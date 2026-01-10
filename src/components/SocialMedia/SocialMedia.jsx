import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Repeat, ArrowUpRight, MessageCircle, Eye } from 'lucide-react';
import './SocialMedia.css';

// Custom X Logo
const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const SocialMedia = () => {
    // REAL DATA (In Original Tamil)
    const posts = [
        {
            id: 1,
            type: 'hero', // Large Card
            date: 'Jan 4, 2026',
            // "The people's verdict is clear. TVK will create a new history in 2026. The change has begun."
            content: "மக்களின் தீர்ப்பு தெளிவாக உள்ளது. 2026 சட்டமன்றத் தேர்தலில் தமிழக வெற்றிக் கழகம் (TVK) புதிய வரலாற்றைப் படைக்கும். மாற்றம் ஒன்றே மாறாதது! 🚩",
            tags: ["#TVK", "#Vijay2026", "#TamilNadu"],
            stats: { likes: "12.5K", reposts: "4.1K", views: "450K" },
            image: "/images/rally_crowd.jpg" 
        },
        {
            id: 2,
            type: 'update', // Standard Card
            date: 'Jan 3, 2026',
            // Tribute to Freedom Fighters
            content: "வீரபாண்டிய கட்டபொம்மன் மற்றும் வீரமங்கை வேலுநாச்சியார் ஆகியோரின் பிறந்தநாளில், அவர்களின் தியாகத்தை போற்றி வணங்குகிறேன். அவர்களது வீரம் நமது சமூக நீதி பயணத்திற்கு என்றும் உத்வேகம் அளிக்கும்.",
            stats: { likes: "3.2K", reposts: "850", views: "120K" }
        },
        {
            id: 3,
            type: 'update',
            date: 'Dec 16, 2025',
            // "Making Thalapathy Vijay CM is my goal."
            content: "தளபதி விஜய் அவர்களை தமிழகத்தின் முதலமைச்சராக அரியணையில் அமர வைப்பதே எனது ஒரே லட்சியம். இந்த மக்கள் அலையை இனி எந்த சக்தியாலும் தடுக்க முடியாது! 🌊",
            stats: { likes: "24K", reposts: "8.9K", views: "1.2M" }
        }
    ];

    return (
        <section className="section social-section">
            <div className="social-bg-glow"></div>
            <div className="container">
                
                {/* Modern Header */}
                <div className="social-header">
                    <div>
                        <div className="live-indicator">
                            <span className="pulse-dot"></span>
                            <span className="live-text">DIGITAL PULSE</span>
                        </div>
                        <h2 className="section-title">The <span className="text-gradient">Voice</span> of Change</h2>
                    </div>
                    
                    <a href="https://x.com/KASengottaiyan?s=20" target="_blank" rel="noreferrer" className="x-connect-btn">
                        <span>Follow on</span> <XLogo className="btn-icon" />
                    </a>
                </div>

                {/* MASONRY GRID LAYOUT */}
                <div className="social-grid">
                    
                    {/* LEFT: HERO POST (Large Visual) */}
                    <motion.div 
                        className="social-card hero-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-bg-image" style={{ backgroundImage: `url('/images/rally.png')` }}></div>
                        <div className="card-overlay">
                            <div className="card-top">
                                <div className="user-badge">
                                    <img src="/images/kas_profile.jpg" alt="KAS" />
                                    <span>@KASengottaiyan</span>
                                </div>
                                <XLogo className="x-watermark" />
                            </div>
                            
                            <div className="card-content">
                                <p className="hero-text" dir="auto">
                                    "மக்களின் தீர்ப்பு தெளிவாக உள்ளது. <span className="highlight">2026-ல் த.வெ.க ஆட்சி அமைப்பது உறுதி</span>."
                                </p>
                                <div className="tags">
                                    {posts[0].tags.map((tag, i) => <span key={i}>{tag}</span>)}
                                </div>
                            </div>

                            <div className="card-stats">
                                <div className="stat"><Heart size={16} /> {posts[0].stats.likes}</div>
                                <div className="stat"><Repeat size={16} /> {posts[0].stats.reposts}</div>
                                <div className="stat"><Eye size={16} /> {posts[0].stats.views}</div>
                                <div className="stat-date">{posts[0].date}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: UPDATES STACK */}
                    <div className="updates-stack">
                        {posts.slice(1).map((post, index) => (
                            <motion.div 
                                key={post.id} 
                                className="social-card update-card"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
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
                                    <a href="https://x.com/KASengottaiyan?s=20" target="_blank" className="link-arrow">
                                        <ArrowUpRight size={18} />
                                    </a>
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