import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Repeat, ArrowUpRight, Eye } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import './SocialMedia.css';
import KasProfile from '../../assets/KAS.jpg';

const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const SocialMedia = () => {
    const { t } = useLanguage();

    return (
        <section className="section social-section">
            <div className="social-bg-glow"></div>
            <div className="container">
                <div className="social-header">
                    <div>
                        <div className="live-indicator">
                            <span className="pulse-dot"></span>
                            <span className="live-text">{t.social.tag}</span>
                        </div>
                        <h2 className="section-title">{t.social.title} <span className="text-gradient">{t.social.titleHighlight}</span></h2>
                    </div>
                    <a href="https://x.com/KASengottaiyan" target="_blank" rel="noreferrer" className="x-connect-btn">
                        <span>{t.social.followBtn}</span> <XLogo className="btn-icon" />
                    </a>
                </div>

                <div className="social-grid">
                    {/* HERO CARD */}
                    <motion.div className="social-card hero-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="card-overlay">
                            <div className="card-top">
                                <div className="user-badge">
                                    <img src={KasProfile} alt="KAS" />
                                    <span>@KASengottaiyan</span>
                                </div>
                                <XLogo className="x-watermark" />
                            </div>
                            <div className="card-content">
                                <p className="hero-text" dir="auto">{t.social.heroPost.content}</p>
                                <div className="tags">
                                    {t.social.heroPost.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                                </div>
                            </div>
                            <div className="card-stats">
                                <div className="stat"><Heart size={16} /> {t.social.heroPost.stats.likes}</div>
                                <div className="stat"><Repeat size={16} /> {t.social.heroPost.stats.reposts}</div>
                                <div className="stat"><Eye size={16} /> {t.social.heroPost.stats.views}</div>
                                <div className="stat-date">{t.social.heroPost.date}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* UPDATES STACK */}
                    <div className="updates-stack">
                        {t.social.posts.map((post, index) => (
                            <motion.div key={index} className="social-card update-card" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="update-header">
                                    <div className="user-badge-small">
                                        <div className="avatar-small">K</div>
                                        <span className="username">K. A. Sengottaiyan</span>
                                    </div>
                                    <span className="post-date">{post.date}</span>
                                </div>
                                <p className="update-text" dir="auto">{post.content}</p>
                                <div className="update-footer">
                                    <div className="interactions">
                                        <span><Heart size={14} /> {post.stats.likes}</span>
                                        <span><Repeat size={14} /> {post.stats.reposts}</span>
                                        <span><Eye size={14} /> {post.stats.views}</span>
                                    </div>
                                    <a href="https://x.com/KASengottaiyan" target="_blank" className="link-arrow"><ArrowUpRight size={18} /></a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;