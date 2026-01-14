import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MessageSquare, Mic, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import './RecentDevelopments.css';
import Meetupimage from '../../assets/tvk-vijay-sengottiyan.avif'; // Check path

const RecentDevelopments = () => {
    const { t } = useLanguage();

    // Icons helper function since we can't store components in JSON easily
    const getIcon = (index) => {
        if (index === 0) return <Mic size={16} />;
        if (index === 1) return <MessageSquare size={16} />;
        return <AlertCircle size={16} />;
    };

    return (
        <section id="updates" className="section updates-section">
            <div className="container">
                <div className="updates-header">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="live-indicator"
                    >
                        <span className="blink-dot"></span> {t.updates.tag}
                    </motion.div>
                    <h2 className="section-title">{t.updates.title} <span className="text-maroon">{t.updates.titleHighlight}</span></h2>
                </div>

                <div className="newsroom-grid">
                    {/* LEFT: MAIN HERO ARTICLE */}
                    <motion.div 
                        className="main-article-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="article-image-wrap">
                            <img src={Meetupimage} alt="TVK Rally" className="article-image" />
                            <div className="article-overlay">
                                <span className="article-badge">{t.updates.hero.badge}</span>
                            </div>
                        </div>
                        <div className="article-content">
                            <h3 className="article-title">{t.updates.hero.title}</h3>
                            <p className="article-excerpt">{t.updates.hero.excerpt}</p>
                            <div className="article-quote">{t.updates.hero.quote}</div>
                            <div className="article-footer">
                                <span className="read-more">{t.updates.hero.btn} <ArrowRight size={16} /></span>
                                <span className="article-date">{t.updates.hero.date}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: FLASH NEWS FEED */}
                    <div className="news-feed-column">
                        <h4 className="feed-header">{t.updates.feedTitle}</h4>
                        <div className="feed-list">
                            {t.updates.feed.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="feed-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="feed-meta">
                                        <span className="feed-date"><Calendar size={12} /> {item.date}</span>
                                        <span className={`feed-tag ${index === 2 ? 'tag-red' : 'tag-gold'}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h5 className="feed-title">{item.title}</h5>
                                    <p className="feed-desc">{item.desc}</p>
                                    <div className="feed-icon-corner">
                                        {getIcon(index)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentDevelopments;