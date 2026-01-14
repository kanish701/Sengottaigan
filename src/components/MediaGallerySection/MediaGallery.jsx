import React, { useState } from 'react';
import { Play, Maximize2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import './MediaGallery.css';
import campaign from '../../assets/airport.avif';
import KASvijay from '../../assets/sengottaiyan-aiadmk-tvk.webp';
import ammaKAS from '../../assets/amma-with-kas.jpg';

const MediaGallery = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { t } = useLanguage();

    // Mapping images to the translated captions (order matters!)
    const images = [
        { src: KASvijay, size: 'large' },
        { src: campaign, size: 'small' },
        { src: ammaKAS, size: 'small' }
    ];

    return (
        <section id="media" className="section media-section">
            <div className="media-bg-gradient"></div>
            <div className="container">
                <div className="media-header">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="section-tag">{t.media.tag}</span>
                        <h2 className="section-title">{t.media.title} <span className="text-gold">{t.media.titleHighlight}</span></h2>
                    </motion.div>
                    <a href="#all-media" className="view-all-btn">{t.media.btn} <ChevronRight size={18} /></a>
                </div>

                <motion.div className="video-stage" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <div className="video-wrapper">
                        {!isPlaying ? (
                            <div className="video-thumbnail" style={{ backgroundImage: `url('https://i.ytimg.com/vi/1v9e9ehCi88/hqdefault.jpg')` }}>
                                <div className="video-overlay">
                                    <div className="play-button-wrapper" onClick={() => setIsPlaying(true)}>
                                        <div className="play-pulse"></div>
                                        <div className="play-icon"><Play size={32} fill="currentColor" className="text-white ml-1" /></div>
                                    </div>
                                    <div className="video-meta">
                                        <h3>{t.media.videoTitle}</h3>
                                        <p>{t.media.videoMeta}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="video-embed-placeholder">
                                <iframe width="100%" height="100%" src="https://youtu.be/1v9e9ehCi88?si=61vUiojJvOFQxzrr" title="Video Player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        )}
                    </div>
                </motion.div>

                <div className="gallery-grid">
                    {t.media.gallery.map((imgData, index) => (
                        <motion.div 
                            key={index} 
                            className={`gallery-card ${images[index].size}`}
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ delay: index * 0.1 }} 
                            viewport={{ once: true }}
                        >
                            <img src={images[index].src} alt={imgData.caption} className="gallery-img" />
                            <div className="gallery-overlay">
                                <div className="gallery-badge">{imgData.category}</div>
                                <div className="gallery-info">
                                    <h4>{imgData.caption}</h4>
                                    <button className="expand-btn"><Maximize2 size={16} /></button>
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