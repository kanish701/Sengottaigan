import React from 'react';
import { Briefcase, Flag, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../LanguageContext'; // Import the hook
import './PoliticalCareer.css';

const PoliticalCareer = () => {
    const { t } = useLanguage(); // Get translations

    return (
        <section id="career" className="section career-section">
            <div className="container">
                {/* Header */}
                <div className="section-header text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-light text-maroon font-bold text-sm mb-4"
                    >
                        <Star size={14} fill="currentColor" /> {t.career.badge}
                    </motion.div>
                    <h2 className="section-title">
                        {t.career.title} <span className="text-maroon">{t.career.titleHighlight}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t.career.subtitle}
                    </p>
                </div>

                <div className="career-grid">

                    {/* LEFT COLUMN: ELECTION HISTORY (The Fortress) */}
                    <motion.div
                        className="career-card election-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-header">
                            <Flag className="card-icon" />
                            <h3>{t.career.leftTitle}</h3>
                        </div>
                        <p className="card-desc">{t.career.leftDesc}</p>

                        <div className="election-list">
                            {/* Map through the translated elections array */}
                            {t.career.elections.map((e, i) => {
                                // Logic to determine if it was a loss (for styling grey vs green)
                                const isLost = e.result === 'Lost' || e.result === 'தோல்வி';

                                return (
                                    <div key={i} className={`election-row ${isLost ? 'lost' : ''}`}>
                                        <div className="er-year">{e.year}</div>
                                        <div className="er-details">
                                            <span className="er-const">{e.const}</span>
                                            <span className="er-margin">{e.margin}</span>
                                        </div>
                                        <div className="er-result">
                                            {isLost ? (
                                                <span className="badge-lost">{e.result}</span>
                                            ) : (
                                                <span className="badge-won">{e.result}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: PORTFOLIO & CURRENT STATUS */}
                    <div className="flex flex-col gap-8">

                        {/* CURRENT STATUS: TVK */}
                        <motion.div
                            className="career-card tvk-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="tvk-header">
                                <div className="tvk-logo-circle">TVK</div>
                                <div>
                                    <span className="tvk-label">CURRENT CHAPTER</span>
                                    <h3>{t.career.tvkTitle}</h3>
                                </div>
                            </div>
                            <p className="tvk-text">
                                {t.career.tvkDesc}
                            </p>
                            <a href="#contact" className="tvk-link">
                                {t.career.tvkBtn} <ArrowUpRight size={16} />
                            </a>
                        </motion.div>

                        {/* MINISTERIAL TIMELINE */}
                        <motion.div
                            className="career-card portfolio-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-header">
                                <Briefcase className="card-icon" />
                                <h3>{t.career.portfolioTitle}</h3>
                            </div>

                            <div className="timeline-wrap">
                                {/* Map through the translated ministerial portfolios */}
                                {t.career.portfolios.map((item, index) => (
                                    <div className="timeline-item" key={index}>
                                        <div className="tl-dot"></div>
                                        <div className="tl-content">
                                            <span className="tl-year">{item.year}</span>
                                            <h4>{item.role}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PoliticalCareer;