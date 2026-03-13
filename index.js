require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const { google } = require("googleapis");

const app = express();
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME || "DATA";
const TIMEZONE = process.env.TIMEZONE || "Asia/Phnom_Penh";
const PORT = process.env.PORT || 3000;

const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : "";

const NAME_COL_INDEX = 0; // A
const DATE_COL_INDEX = 7; // H

let lastAutoSentDate = null;

async function getSheetsClient() {
  const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  await auth.authorize();

  return google.sheets({
    version: "v4",
    auth,
  });
}

function getTodayCompare(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getTodayDisplay(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function normalizeSheetDate(value) {
  if (!value) return "";

  const str = String(value).trim();

  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) {
    return getTodayCompare(parsed);
  }

  const parts = str.split(/[\/\-]/);
  if (parts.length === 3) {
    let [d, m, y] = parts;
    d = d.padStart(2, "0");
    m = m.padStart(2, "0");
    if (y.length === 2) y = "20" + y;
    if (y.length === 4) return `${y}-${m}-${d}`;
  }

  return "";
}

async function getTodayFacebookData() {
  const sheets = await getSheetsClient();

  const range = `${SHEET_NAME}!A:H`;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
  });

  const rows = res.data.values || [];
  const todayCompare = getTodayCompare();
  const todayDisplay = getTodayDisplay();

  const matchedNames = [];

  for (const row of rows) {
    const name = (row[NAME_COL_INDEX] || "").toString().trim();
    const rawDate = row[DATE_COL_INDEX] || "";
    const rowDate = normalizeSheetDate(rawDate);

    if (!name) continue;
    if (rowDate === todayCompare) {
      matchedNames.push(name);
    }
  }

  const uniqueNames = [...new Set(matchedNames)];

  return {
    total: matchedNames.length,
    uniqueNames,
    todayDisplay,
    todayCompare,
  };
}

function buildReportMessage(data) {
  const { total, uniqueNames, todayDisplay } = data;

  const names =
    uniqueNames.length > 0
      ? uniqueNames.map((name) => `- ${name}`).join("\n")
      : "- មិនមានទិន្នន័យ";

  return `គោរពជម្រាបបងសម្រាប់ថ្ងៃទី ${todayDisplay} ជាទិន្នន័យ បង្កើត Facebook
ចំនួន សរុប ${total} អាខោន

+អ្នកបង្កើតមាន៖
${names}

សូមគោរពអគុណ🙏🙏`;
}

async function sendTelegramMessage(chatId, text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text,
  });
}

async function sendDailyAutoReport() {
  try {
    const data = await getTodayFacebookData();

    if (lastAutoSentDate === data.todayCompare) {
      console.log("Auto report already sent today.");
      return;
    }

    const message = buildReportMessage(data);
    await sendTelegramMessage(CHAT_ID, message);

    lastAutoSentDate = data.todayCompare;
    console.log("Auto report sent successfully.");
  } catch (error) {
    console.error("Auto report error:", error.response?.data || error.message);
  }
}

cron.schedule(
  "0 17 * * *",
  async () => {
    console.log("Running 5:00 PM auto report...");
    await sendDailyAutoReport();
  },
  { timezone: TIMEZONE }
);

app.post(`/webhook/${BOT_TOKEN}`, async (req, res) => {
  try {
    console.log("Incoming update:", JSON.stringify(req.body, null, 2));

    const message = req.body?.message;
    if (!message) return res.sendStatus(200);

    const chatId = message.chat?.id;
    const text = (message.text || "").trim();
    const normalizedText = text.toLowerCase().split("@")[0];

    if (normalizedText === "/report") {
      const data = await getTodayFacebookData();
      const report = buildReportMessage(data);
      await sendTelegramMessage(chatId, report);
      console.log("Report sent to:", chatId);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("Webhook error:", error.response?.data || error.message);
    return res.sendStatus(200);
  }
});

app.get("/", (req, res) => {
  res.send("Telegram Report Bot is running...");
});

app.get("/test-report", async (req, res) => {
  try {
    const data = await getTodayFacebookData();
    const report = buildReportMessage(data);
    await sendTelegramMessage(CHAT_ID, report);
    res.send("Test report sent.");
  } catch (error) {
    console.error("Test report error:", error.response?.data || error.message);
    res.status(500).send(error.response?.data || error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Waiting for 5:00 PM auto report and /Report command...");
});
