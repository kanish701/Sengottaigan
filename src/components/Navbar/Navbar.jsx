import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Biography', href: '#about' },
        { name: 'Political Career', href: '#career' },
        { name: 'Updates', href: '#updates' },
        { name: 'Media', href: '#media' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">

                {/* Logo Section */}
                <div className="nav-logo-group">
                    <div className="logo-icon">
                        K
                    </div>
                    <a href="#" className="logo-text">
                        K. A. Sengottaiyan
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}

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
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
