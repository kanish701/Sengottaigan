import React from 'react';
import { Briefcase, Award, TrendingUp, Star, Flag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './PoliticalCareer.css';

const PoliticalCareer = () => {
    const elections = [
        { year: 1977, const: 'Sathyamangalam', result: 'Won', margin: 'Debut Victory' },
        { year: 1980, const: 'Gobichettipalayam', result: 'Won', margin: 'Defended' },
        { year: 1984, const: 'Gobichettipalayam', result: 'Won', margin: 'Hat-trick' },
        { year: 1989, const: 'Gobichettipalayam', result: 'Won', margin: 'Party Split Era' },
        { year: 1991, const: 'Gobichettipalayam', result: 'Won', margin: 'Landslide' },
        { year: 1996, const: 'Gobichettipalayam', result: 'Lost', margin: 'Statewide Wave' },
        { year: 2006, const: 'Gobichettipalayam', result: 'Won', margin: 'The Return' },
        { year: 2011, const: 'Gobichettipalayam', result: 'Won', margin: 'Dominance' },
        { year: 2016, const: 'Gobichettipalayam', result: 'Won', margin: 'Retained' },
        { year: 2021, const: 'Gobichettipalayam', result: 'Won', margin: 'Veteran Win' },
    ];

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
                        <Star size={14} fill="currentColor" /> POLITICAL TIMELINE
                    </motion.div>
                    <h2 className="section-title">A Legacy of <span className="text-maroon">Victories</span></h2>
                    <p className="section-subtitle">
                        From the MGR era to the TVK revolution. A career defined by 9 legislative victories and transformative ministerial tenures.
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
                            <h3>Electoral Fortress</h3>
                        </div>
                        <p className="card-desc">The "Guardian of Gobi" holds one of the most consistent winning records in Tamil Nadu history.</p>
                        
                        <div className="election-list">
                            {elections.map((e, i) => (
                                <div key={i} className={`election-row ${e.result === 'Lost' ? 'lost' : ''}`}>
                                    <div className="er-year">{e.year}</div>
                                    <div className="er-details">
                                        <span className="er-const">{e.const}</span>
                                        <span className="er-margin">{e.margin}</span>
                                    </div>
                                    <div className="er-result">
                                        {e.result === 'Won' ? (
                                            <span className="badge-won">WON</span>
                                        ) : (
                                            <span className="badge-lost">LOST</span>
                                        )}
                                    </div>
                                </div>
                            ))}
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
                                    <h3>Chief Coordinator</h3>
                                </div>
                            </div>
                            <p className="tvk-text">
                                Joined <strong>Tamilaga Vettri Kazhagam</strong> in 2025. Spearheading the party's structure in Western Tamil Nadu (Kongu Belt) for the 2026 Assembly Elections.
                            </p>
                            <a href="#contact" className="tvk-link">Join the Movement <ArrowUpRight size={16} /></a>
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
                                <h3>Ministerial Portfolio</h3>
                            </div>
                            
                            <div className="timeline-wrap">
                                <div className="timeline-item">
                                    <div className="tl-dot"></div>
                                    <div className="tl-content">
                                        <span className="tl-year">2017 – 2021</span>
                                        <h4>Minister for School Education</h4>
                                        <p>Reformed State Board syllabus, introduced NEET coaching, and launched high-tech labs.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="tl-dot"></div>
                                    <div className="tl-content">
                                        <span className="tl-year">2011 – 2012</span>
                                        <h4>Minister for Revenue & IT</h4>
                                        <p>Streamlined land records and initiated early IT park developments in tier-2 cities.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="tl-dot"></div>
                                    <div className="tl-content">
                                        <span className="tl-year">1991 – 1996</span>
                                        <h4>Minister for Transport</h4>
                                        <p>Modernized the government bus fleet and improved rural connectivity.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PoliticalCareer;