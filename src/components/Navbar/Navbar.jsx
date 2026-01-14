import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Globe } from 'lucide-react';
import { useLanguage } from '../../LanguageContext'; // Import the translation hook
import './Navbar.css';
import TVK from '../../assets/flag.png';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage(); // Access translations
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle Scroll Effect for Navbar transparency
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Define links using the translation object 't'
    const navLinks = [
        { name: t.navbar.home, href: '#home' },
        { name: t.navbar.about, href: '#about' },
        { name: t.navbar.career, href: '#career' },
        { name: t.navbar.updates, href: '#updates' },
        { name: t.navbar.media, href: '#media' },
        { name: t.navbar.contact, href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">

                {/* Logo Section */}
                <div className="nav-logo-group">
                    <div className="logo-icon">
                        <img src={TVK} alt="Logo" style={{ width: '40px', height: 'auto' }} />
                    </div>
                    <a href="#" className="logo-text">
                        K. A. Sengottaiyan
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Language Toggle Button (Desktop) */}
                    <button 
                        onClick={toggleLanguage} 
                        className="nav-social-btn lang-btn"
                        style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0.5rem 1rem', width: 'auto' }}
                    >
                        <Globe size={18} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {t.navbar.btn}
                        </span>
                    </button>

                    {/* Social Icon (Navbar) */}
                    <a
                        href="https://x.com/KASengottaiyan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-social-btn"
                    >
                        <Twitter size={18} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={28} className="menu-icon" />
                    ) : (
                        <Menu size={28} className="menu-icon" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-dropdown">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* Language Toggle (Mobile) */}
                    <button 
                        onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-link"
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <Globe size={20} />
                        Switch to {t.navbar.btn}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;