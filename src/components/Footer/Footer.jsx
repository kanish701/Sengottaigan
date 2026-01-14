import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import './Footer.css';

const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const Footer = () => {
    const { t } = useLanguage();
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <span className="logo-initials">K.A.S.</span>
                            <span className="logo-full">Sengottaiyan</span>
                        </div>
                        <p className="footer-bio">{t.footer.bio}</p>
                        <div className="social-links">
                            <a href="https://x.com/KASengottaiyan"><XLogo className="social-icon" /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.footer.col2}</h4>
                        <ul className="footer-links">
                            <li><a href="#career">{t.navbar.career}</a></li>
                            <li><a href="#media">{t.navbar.media}</a></li>
                            <li><a href="#updates">{t.navbar.updates}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.footer.col3}</h4>
                        <ul className="contact-list">
                            <li><MapPin size={18} className="contact-icon" /> <span>Gobichettipalayam</span></li>
                            <li><Mail size={18} className="contact-icon" /> <span>contact@kas.com</span></li>
                            <li><Phone size={18} className="contact-icon" /> <span>+91 4285 222 333</span></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.footer.col4}</h4>
                        <p className="footer-text-sm">{t.footer.subText}</p>
                        <form className="footer-form">
                            <input type="email" placeholder="Email" className="footer-input" />
                            <button className="footer-btn">{t.footer.btn}</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">{t.footer.copyright}</p>
                    <button onClick={scrollToTop} className="scroll-top-btn"><ArrowUp size={20} /></button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;