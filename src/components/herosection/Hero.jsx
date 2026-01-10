import React from 'react';
import { ArrowRight, ChevronDown, Activity, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';
import KAS from '../../assets/K.A.Sengottaiyan.jpg';

const Hero = () => {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Apple-style ease
        },
    };

    return (
        <section id="home" className="hero-section">
            {/* Dynamic Background Elements */}
            <div className="hero-bg-gradient"></div>
            <div className="hero-pattern"></div>

            {/* Large Decorative Text behind everything */}
            <div className="hero-outline-text">LEADER</div>

            <div className="container hero-container">
                <motion.div
                    className="hero-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* LEFT COLUMN: Content */}
                    <div className="hero-content">
                        {/* Live Status Badge */}
                        <motion.div variants={itemVariants} className="status-badge">
                            <span className="status-dot"></span>
                            <span className="status-text">Chief Coordinator • TVK</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="hero-title">
                            Experience <br />
                            <span className="text-highlight">In Action.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-description">
                            The official portfolio of <strong>K. A. Sengottaiyan</strong>.
                            From a 9-time MLA to a guiding force in
                            <span className="tvk-text"> Tamilaga Vettri Kazhagam</span>.
                            Leading with wisdom, serving with integrity.
                        </motion.p>

                        <motion.div variants={itemVariants} className="hero-actions">
                            <a href="#career" className="btn-primary">
                                <span>Our Vision</span>
                                <ArrowRight size={18} />
                            </a>
                            <a href="#updates" className="btn-secondary">
                                <Activity size={18} className="icon-pulse" />
                                <span>Latest Updates</span>
                            </a>
                        </motion.div>

                        {/* Quick Stats Row */}
                        <motion.div variants={itemVariants} className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Years Service</span>
                            </div>
                            <div className="stat-separator"></div>
                            <div className="stat-item">
                                <span className="stat-number">9</span>
                                <span className="stat-label">Times MLA</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Visuals */}
                    <motion.div variants={itemVariants} className="hero-visual">
                        <div className="image-card-wrapper">
                            {/* Main Image Frame */}
                            <div className="image-frame">
                                <img
                                    src={KAS}
                                    alt="K. A. Sengottaiyan"
                                    className="hero-image"
                                />
                                <div className="image-overlay-gradient"></div>
                            </div>

                            {/* Floating "Glass" Card */}
                            <motion.div
                                className="glass-card"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="glass-icon">
                                    <Star size={20} color="#FFD700" fill="#FFD700" />
                                </div>
                                <div className="glass-content">
                                    <span className="glass-title">New Mission</span>
                                    <span className="glass-subtitle">2026 Victory Path</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Trigger */}
            <motion.div
                className="scroll-trigger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;