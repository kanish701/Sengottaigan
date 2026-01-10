import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, Twitter, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

// Custom X Logo (reusing for consistency)
const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                
                {/* Main Footer Content */}
                <div className="footer-grid">
                    
                    {/* Col 1: Brand & Mission */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <span className="logo-initials">K.A.S.</span>
                            <span className="logo-full">Sengottaiyan</span>
                        </div>
                        <p className="footer-bio">
                            Chief Coordinator, <strong className="text-gold">Tamilaga Vettri Kazhagam</strong>. 
                            Dedicating 50+ years to the development of Gobichettipalayam and Tamil Nadu.
                        </p>
                        <div className="social-links">
                            <a href="https://x.com/KASengottaiyan" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                                <XLogo className="social-icon" />
                            </a>
                            {/* Placeholders for other potential socials */}
                            <a href="#" className="disabled-link" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="disabled-link" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Col 2: Quick Navigation */}
                    <div className="footer-col">
                        <h4 className="col-title">Explore</h4>
                        <ul className="footer-links">
                            <li><a href="#biography">Political Journey</a></li>
                            <li><a href="#career">Achievements</a></li>
                            <li><a href="#media">Media Gallery</a></li>
                            <li><a href="#updates">Live Updates</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Constituency Office */}
                    <div className="footer-col">
                        <h4 className="col-title">Constituency Office</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>
                                    Gobichettipalayam, <br />
                                    Erode District, Tamil Nadu.
                                </span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>contact@kasengottaiyan.com</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+91 4285 222 333</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter / Action */}
                    <div className="footer-col">
                        <h4 className="col-title">Join the Mission</h4>
                        <p className="footer-text-sm">
                            Be part of the change with TVK. Sign up for official press releases.
                        </p>
                        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your Email Address" className="footer-input" />
                            <button type="submit" className="footer-btn">Subscribe</button>
                        </form>
                    </div>

                </div>

                {/* Footer Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2026 K. A. Sengottaiyan. All Rights Reserved.
                    </p>
                    
                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;