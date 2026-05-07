<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galaxy Global - Pro Pricing</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>

    <div class="bg-glow"></div>

    <nav class="navbar">
        <div class="nav-logo">GALAXY GLOBAL</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Masterpieces</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header class="hero-section">
        <div class="logo-container">
            <img src="./photo_2026-04-22_15-43-19.jpg" alt="Galaxy Global Logo" class="site-logo">
        </div>
        
        <h1 class="main-title">GALAXY GLOBAL</h1>
        <p class="subtitle">THE WORLD'S LARGEST VIDEO PRODUCTION SQUAD</p>
        <button class="btn primary-btn" onclick="openSampleModal()">GET 1 FREE SAMPLE</button>
    </header>

    <section id="services" class="services-section">
        <h2 class="section-title">OUR SERVICES</h2>
        <p class="subtitle">សេវាកម្មដែលយើងផ្តល់ជូន</p>
        <div class="services-grid">
            <div class="service-card tilt-card">
                <div class="service-icon">
                    <i class="fa-solid fa-clapperboard"></i>
                </div>
                <h3>Video Editing</h3>
                <p>កាត់តវីដេអូប្រកបដោយវិជ្ជាជីវៈសម្រាប់ YouTube, Facebook, និង TikTok។</p>
            </div>
            <div class="service-card tilt-card">
                <div class="service-icon">
                    <i class="fa-solid fa-palette"></i>
                </div>
                <h3>Color Grading</h3>
                <p>កែពណ៌វីដេអូឲ្យស្រស់ស្អាត ទាក់ទាញ និងមានស្តង់ដារភាពយន្តកម្រិតខ្ពស់។</p>
            </div>
            <div class="service-card tilt-card">
                <div class="service-icon">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <h3>Motion & VFX</h3>
                <p>បញ្ចូល Effects និង Animations ធ្វើឲ្យវីដេអូកាន់តែរស់រវើក និងទាក់ទាញចំណាប់អារម្មណ៍។</p>
            </div>
            <div class="service-card tilt-card">
                <div class="service-icon">
                    <i class="fa-solid fa-music"></i>
                </div>
                <h3>Audio Design</h3>
                <p>រៀបចំសំឡេង បញ្ចូលភ្លេង និង Sound Effects ឲ្យស៊ីចង្វាក់គ្នាឥតខ្ចោះ។</p>
            </div>
        </div>
    </section>

    <section id="portfolio" class="masterpieces-section">
        <h2 class="section-title">OUR MASTERPIECES</h2>
        <div class="video-grid">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/McLq0PjZHgg" title="YouTube video 1" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/-sdSyj1aFuM" title="YouTube video 2" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/4i4zE9cubqk" title="YouTube video 3" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/otFqTautpug" title="YouTube video 4" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <section id="pricing" class="pricing-section">
        <h2 class="section-title">CHOOSE YOUR PLAN</h2>
        <div class="pricing-grid">
            
            <div class="pricing-card tilt-card">
                <div class="card-content">
                    <h3 class="plan-name">BASIC</h3>
                    <p class="plan-price">$20</p>
                    <p class="plan-desc">ល្អសម្រាប់វីដេអូខ្លីៗ & TikTok</p>
                    <ul class="plan-features">
                        <li><span class="check">✔</span> វីដេអូដើមប្រវែងក្រោម 10 នាទី</li>
                        <li><span class="check">✔</span> កាត់តមូលដ្ឋាន (Basic Editing)</li>
                        <li><span class="check">✔</span> តន្ត្រីអត់ជាប់កម្មសិទ្ធិ</li>
                        <li><span class="check">✔</span> កែតម្រូវបាន 2 ដង</li>
                    </ul>
                    <button class="btn plan-btn" onclick="openPaymentModal('BASIC', 20)">ORDER NOW</button>
                </div>
            </div>

            <div class="pricing-card tilt-card popular">
                <div class="popular-badge">MOST POPULAR</div>
                <div class="card-content">
                    <h3 class="plan-name">BUSINESS</h3>
                    <p class="plan-price">$100</p>
                    <p class="plan-desc">ល្អសម្រាប់ YouTube & អាជីវកម្ម</p>
                    <ul class="plan-features">
                        <li><span class="check">✔</span> វីដេអូដើមប្រវែងក្រោម 45 នាទី</li>
                        <li><span class="check">✔</span> កាត់តកម្រិតខ្ពស់ & Color Grading</li>
                        <li><span class="check">✔</span> ដាក់អក្សររត់ពីក្រោម (Subtitles)</li>
                        <li><span class="check">✔</span> កែតម្រូវមិនកំណត់</li>
                    </ul>
                    <button class="btn plan-btn glow-btn" onclick="openPaymentModal('BUSINESS', 100)">ORDER NOW</button>
                </div>
            </div>

            <div class="pricing-card tilt-card">
                <div class="card-content">
                    <h3 class="plan-name">PREMIUM</h3>
                    <p class="plan-price">$500</p>
                    <p class="plan-desc">កញ្ចប់ម៉ៅប្រចាំខែ (Unlimited)</p>
                    <ul class="plan-features">
                        <li><span class="check">✔</span> ស្នើសុំវីដេអូមិនកំណត់ក្នុង១ខែ</li>
                        <li><span class="check">✔</span> មានអ្នកកាត់តផ្ទាល់ខ្លួន</li>
                        <li><span class="check">✔</span> Motion Graphics & VFX</li>
                        <li><span class="check">✔</span> ទទួលបានឯកសារដើម</li>
                    </ul>
                    <button class="btn plan-btn" onclick="openPaymentModal('PREMIUM', 500)">ORDER NOW</button>
                </div>
            </div>
        </div>
    </section>

    <section class="workflow-section">
        <h2 class="section-title">How We Work</h2>
        <p class="subtitle">A simple process that delivers premium results.</p>
        
        <div class="workflow-grid">
            <div class="workflow-card tilt-card">
                <div class="workflow-img">
                    <img src="./image/1.png" alt="Step 1: Consultation">
                </div>
                <div class="workflow-step">01</div>
                <h3>Consultation & Onboarding</h3>
                <p>We will consult with you directly to fully understand the goals, preferences, and creative direction of your desired video.</p>
            </div>

            <div class="workflow-card tilt-card">
                <div class="workflow-img">
                    <img src="./image/2.jpg" alt="Step 2: Production">
                </div>
                <div class="workflow-step">02</div>
                <h3>Creation & Editing</h3>
                <p>Our expert team will begin organizing, editing, color grading, and adding artistic elements to transform your raw footage into a masterpiece.</p>
            </div>

            <div class="workflow-card tilt-card">
                <div class="workflow-img">
                    <img src="./image/4.jpg" alt="Step 3: Delivery">
                </div>
                <div class="workflow-step">03</div>
                <h3>Delivery & Revisions</h3>
                <p>We will send you the initial draft for review and make adjustments until you are 100% satisfied before delivering the final files.</p>
            </div>
        </div>
    </section>

    <footer id="contact" class="footer-section">
        <div class="footer-content">
            <div class="footer-about">
                <h3 class="footer-logo">GALAXY GLOBAL</h3>
                <p>The World's Largest Video Production Squad. Contact us for your next project. Let's create masterpieces together!</p>
            </div>
            
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p><i class="fa-solid fa-envelope" style="color: var(--gold-main); margin-right: 8px;"></i> Email: contact@galaxyglobal.net</p>
                <p><i class="fa-solid fa-phone" style="color: var(--gold-main); margin-right: 8px;"></i> Phone: +855 12 345 678</p>
                <p><i class="fa-solid fa-location-dot" style="color: var(--gold-main); margin-right: 8px;"></i> Location: Phnom Penh, Cambodia</p>
            </div>

            <div class="footer-partners">
                <h4>Our Partners</h4>
                <div class="partners-logos">
                    <div class="partner-logo-box">
                        <img src="./image/Galaxy-Logo KH.png" alt="Galaxy Navatra KH">
                        <span>Galaxy Navatra KH</span>
                    </div>
                    <div class="partner-logo-box">
                        <img src="./image/Galaxy-Logo.png" alt="Galaxy Navatra">
                        <span>Galaxy Navatra</span>
                    </div>
                </div>
            </div>
            </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Galaxy Global. All Rights Reserved.</p>
        </div>
    </footer>

    <div id="payment-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="close-btn" onclick="closePaymentModal()">&times;</span>
            <h2 class="modal-title">Complete Your Order</h2>
            <p class="modal-subtitle" id="modal-plan-info">Plan: BASIC | Total: $20</p>

            <div class="payment-tabs">
                <button class="tab-btn active" onclick="switchPaymentMethod('card')">Credit Card</button>
                <button class="tab-btn" onclick="switchPaymentMethod('qr')">QR KHQR</button>
            </div>

            <div id="method-card" class="payment-method-box active">
                <input type="text" class="pay-input" placeholder="Cardholder Name" required>
                <input type="text" class="pay-input" placeholder="Card Number (0000 0000 0000 0000)" maxlength="19" required>
                <div class="input-row">
                    <input type="text" class="pay-input" placeholder="MM/YY" maxlength="5" required>
                    <input type="text" class="pay-input" placeholder="CVC" maxlength="3" required>
                </div>
                <button class="btn plan-btn glow-btn" style="width: 100%; margin-top: 15px;" onclick="processPayment()">PAY NOW</button>
            </div>

            <div id="method-qr" class="payment-method-box">
                <div class="qr-container">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GalaxyGlobalPayment&color=dcb34d&bgcolor=1f2029" alt="Scan QR to Pay">
                </div>
                <p class="qr-text">សូមស្កេន QR តាមរយៈកម្មវិធីធនាគាររបស់អ្នក (ABA, ACLEDA, ល។)</p>
                <button class="btn plan-btn" style="width: 100%; margin-top: 10px;" onclick="processPayment()">I HAVE PAID</button>
            </div>
        </div>
    </div>

    <div id="sample-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="close-btn" onclick="closeSampleModal()">&times;</span>
            <h2 class="modal-title">Request Free Sample</h2>
            <p class="modal-subtitle">សូមបំពេញព័ត៌មានខាងក្រោម</p>

            <form id="sample-form" onsubmit="submitSampleForm(event)">
                <input type="text" class="pay-input" id="sample-name" placeholder="Name" required>
                <input type="email" class="pay-input" id="sample-email" placeholder="Email" required>
                <input type="text" class="pay-input" id="sample-project" placeholder="Project (ex: YouTube, TikTok)" required>
                <input type="text" class="pay-input" id="sample-timeline" placeholder="Timeline (ex: 3 days, 1 week)" required>
                <textarea class="pay-input" id="sample-message" placeholder="Message / Detail" rows="4" required></textarea>
                
                <button type="submit" class="btn plan-btn glow-btn" style="width: 100%; margin-top: 15px;">SUBMIT NOW</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
