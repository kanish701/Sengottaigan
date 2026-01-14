import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, TrendingUp, BookOpen, Crown } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import './About.css';
import leader from '../../assets/sengottaiyan.webp'; // Ensure path is correct

const About = () => {
    const { t } = useLanguage();
    
    // Animation Stagger
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-header">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        {t.about.title} <span className="text-gold">{t.about.titleHighlight}</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        {t.about.subtitle}
                    </motion.p>
                </div>

                <motion.div 
                    className="bento-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* CARD 1: BIO */}
                    <motion.div className="bento-card bio-card" variants={item}>
                        <div className="card-icon"><Crown size={24} /></div>
                        <h3>{t.about.cardBio.title}</h3>
                        <p>{t.about.cardBio.desc}</p>
                    </motion.div>

                    {/* CARD 2: POWER */}
                    <motion.div className="bento-card power-card" variants={item}>
                        <div className="card-icon"><ShieldCheck size={24} /></div>
                        <h3>{t.about.cardPower.title}</h3>
                        <p>{t.about.cardPower.desc}</p>
                        <div className="stat-badge">
                            <span>{t.about.cardPower.badge}</span>
                        </div>
                    </motion.div>

                    {/* CARD 3: KNOWLEDGE */}
                    <motion.div className="bento-card knowledge-card" variants={item}>
                        <div className="card-icon"><BookOpen size={24} /></div>
                        <h3>{t.about.cardKnowledge.title}</h3>
                        <p>{t.about.cardKnowledge.desc}</p>
                        <ul className="power-list">
                            {t.about.cardKnowledge.list.map((li, index) => (
                                <li key={index}>{li}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CARD 4: STRATEGY */}
                    <motion.div className="bento-card strategy-card" variants={item}>
                        <div className="card-icon"><Brain size={24} /></div>
                        <h3>{t.about.cardStrategy.title}</h3>
                        <p>{t.about.cardStrategy.desc}</p>
                    </motion.div>

                    {/* CARD 5: IMAGE */}
                    <motion.div className="bento-card image-card" variants={item}>
                        <img src={leader} alt="Sengottaiyan" />
                        <div className="image-overlay">
                            <span>{t.about.cardImage}</span>
                        </div>
                    </motion.div>

                    {/* CARD 6: FUTURE */}
                    <motion.div className="bento-card future-card" variants={item}>
                        <div className="card-icon"><TrendingUp size={24} /></div>
                        <h3>{t.about.cardFuture.title}</h3>
                        <p>{t.about.cardFuture.desc}</p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;