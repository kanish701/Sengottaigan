import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MessageSquare, Mic, AlertCircle } from 'lucide-react';
import './RecentDevelopments.css';

const RecentDevelopments = () => {
    
    // Flash Feed Data
    const newsFeed = [
        {
            date: "Jan 12, 2026",
            tag: "Policy Critique",
            title: "Sengottaiyan slams Pension Scheme as 'Political Stunt'",
            desc: "In a press meet at Coimbatore, the Chief Coordinator termed the DMK's new assured pension scheme as a 'hollow promise' that fails to address employee concerns.",
            icon: <Mic size={16} />
        },
        {
            date: "Dec 14, 2025",
            tag: "Delhi Visit",
            title: "High-Profile Meeting with Amit Shah & Nirmala Sitharaman",
            desc: "Met Union Ministers in New Delhi to discuss the political climate of Western Tamil Nadu. Sparked nationwide speculation about strategic alliances.",
            icon: <MessageSquare size={16} />
        },
        {
            date: "Nov 27, 2025",
            tag: "Breaking",
            title: "Appointed Chief Coordinator of TVK",
            desc: "Moments after joining, Vijay appoints Sengottaiyan to lead the High-Level Administrative Committee, handing him control of the 'Kongu Belt' strategy.",
            icon: <AlertCircle size={16} />
        }
    ];

    return (
        <section id="updates" className="section updates-section">
            <div className="container">
                
                <div className="updates-header">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="live-indicator"
                    >
                        <span className="blink-dot"></span> LIVE UPDATES
                    </motion.div>
                    <h2 className="section-title">Campaign <span className="text-maroon">Intel</span></h2>
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
                            <img src="/images/rally.png" alt="TVK Rally" className="article-image" />
                            <div className="article-overlay">
                                <span className="article-badge">HEADLINE</span>
                            </div>
                        </div>
                        
                        <div className="article-content">
                            <h3 className="article-title">The "Kongu" Titan Joins Forces with Vijay</h3>
                            <p className="article-excerpt">
                                In a landmark shift for Tamil Nadu politics, K. A. Sengottaiyan has ended his 5-decade association with AIADMK to become the <strong>Chief Coordinator</strong> of Tamilaga Vettri Kazhagam (TVK).
                            </p>
                            <div className="article-quote">
                                "No power can stop Vijay from becoming CM in 2026."
                            </div>
                            <div className="article-footer">
                                <span className="read-more">Read Full Statement <ArrowRight size={16} /></span>
                                <span className="article-date">Nov 27, 2025</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: FLASH NEWS FEED */}
                    <div className="news-feed-column">
                        <h4 className="feed-header">Latest Briefs</h4>
                        
                        <div className="feed-list">
                            {newsFeed.map((item, index) => (
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
                                        <span className={`feed-tag ${item.tag === 'Breaking' ? 'tag-red' : 'tag-gold'}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h5 className="feed-title">{item.title}</h5>
                                    <p className="feed-desc">{item.desc}</p>
                                    <div className="feed-icon-corner">
                                        {item.icon}
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