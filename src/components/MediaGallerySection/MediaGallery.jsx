import React, { useState } from 'react';
import { Play, Maximize2, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './MediaGallery.css';
import campaign from '../../assets/airport.avif';
import KASvijay from '../../assets/sengottaiyan-aiadmk-tvk.webp';
import ammaKAS from '../../assets/amma-with-kas.jpg';
// import sengottaiyan from '../../assets/sengottaiyan.webp';

const MediaGallery = () => {
    // State for active video (mock functionality)
    const [isPlaying, setIsPlaying] = useState(false);

    const galleryImages = [
        { id: 1, src: KASvijay, category: 'Campaign', caption: 'Massive turnout at Erode TVK Rally', size: 'large' },
        { id: 2, src: campaign, category: 'Official', caption: 'Official Portrait 2026', size: 'small' },
        { id: 3, src: ammaKAS, category: 'Development', caption: 'Inspecting Gobi Water Project', size: 'small' },
        // { id: 4, src: sengottaiyan, category: 'Public', caption: 'Addressing the Youth Wing', size: 'wide' },
    ];

    return (
        <section id="media" className="section media-section">
            <div className="media-bg-gradient"></div>
            <div className="container">
                
                {/* Header */}
                <div className="media-header">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Multimedia</span>
                        <h2 className="section-title">Visual <span className="text-gold">Journey</span></h2>
                    </motion.div>
                    
                    <a href="#all-media" className="view-all-btn">
                        View Archives <ChevronRight size={18} />
                    </a>
                </div>

                {/* FEATURED VIDEO PLAYER (The "War Room" Screen) */}
                <motion.div 
                    className="video-stage"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="video-wrapper">
                        {!isPlaying ? (
                            <div className="video-thumbnail" style={{ backgroundImage: `url('https://i.ytimg.com/vi/1v9e9ehCi88/hqdefault.jpg')` }}>
                                <div className="video-overlay">
                                    <div className="play-button-wrapper" onClick={() => setIsPlaying(true)}>
                                        <div className="play-pulse"></div>
                                        <div className="play-icon">
                                            <Play size={32} fill="currentColor" className="text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="video-meta">
                                        <span className="live-tag">FEATURED SPEECH</span>
                                        <h3>"The Time for Change is Now" - Coimbatore Address</h3>
                                        <p>Jan 04, 2026 • 45m 20s</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Placeholder for actual YouTube Embed
                            <div className="video-embed-placeholder">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src="https://youtu.be/1v9e9ehCi88?si=61vUiojJvOFQxzrr" 
                                    title="Video Player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* PHOTO GRID (Masonry Style) */}
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <motion.div 
                            key={img.id} 
                            className={`gallery-card ${img.size}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={img.src} alt={img.caption} className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-badge">{img.category}</div>
                                <div className="gallery-info">
                                    <h4>{img.caption}</h4>
                                    <button className="expand-btn">
                                        <Maximize2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MediaGallery;