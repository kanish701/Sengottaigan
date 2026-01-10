import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, TrendingUp, Users, BookOpen, Crown } from 'lucide-react';
import './About.css';

const About = () => {
    // Animation Stagger
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="about" className="section about-section">
            <div className="container">
                
                {/* Section Header */}
                <div className="about-header">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        The Strategist. <span className="text-gold">The Reformer.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        Beyond the titles lies a legacy of administrative brilliance and unmatched political endurance in Tamil Nadu.
                    </motion.p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <motion.div 
                    className="bento-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >

                    {/* CARD 1: MAIN BIOGRAPHY (Large) */}
                    <motion.div className="bento-card bio-card" variants={item}>
                        <div className="card-icon"><Crown size={24} /></div>
                        <h3>A Colossus of Western Politics</h3>
                        <p>
                            K. A. Sengottaiyan is not just a politician; he is the <strong className="text-highlight">architect of the Kongu Belt's political landscape</strong>. 
                            Starting his journey with MGR in 1972, he has remained an unconquerable force for over 50 years. 
                            As a <strong>9-time MLA</strong>, his influence transcends party lines, making him one of the most respected senior leaders in the state.
                        </p>
                    </motion.div>

                    {/* CARD 2: THE STRONGHOLD (Power) */}
                    <motion.div className="bento-card power-card" variants={item}>
                        <div className="card-icon"><ShieldCheck size={24} /></div>
                        <h3>The "Gobi" Fortress</h3>
                        <p>
                            Gobichettipalayam is often called his personal fortress. While waves of political change swept Tamil Nadu, Sengottaiyan stood firm, winning this constituency <strong>eight times</strong> between 1980 and 2021.
                        </p>
                        <div className="stat-badge">
                            <span>Undefeated Streak (Modern Era)</span>
                        </div>
                    </motion.div>

                    {/* CARD 3: EDUCATION REFORM (Knowledge) */}
                    <motion.div className="bento-card knowledge-card" variants={item}>
                        <div className="card-icon"><BookOpen size={24} /></div>
                        <h3>Administrative Intellect</h3>
                        <p>
                            As <strong>Minister for School Education (2017-2021)</strong>, he modernized Tamil Nadu's curriculum for the first time in a decade.
                        </p>
                        <ul className="power-list">
                            <li>Introduced Smart Classrooms & High-Tech Labs</li>
                            <li>Launched unexpected NEET coaching initiatives</li>
                            <li>Revamped syllabus to match CBSE standards</li>
                        </ul>
                    </motion.div>

                    {/* CARD 4: ELECTION STRATEGY (Skill) */}
                    <motion.div className="bento-card strategy-card" variants={item}>
                        <div className="card-icon"><Brain size={24} /></div>
                        <h3>Election Engineering</h3>
                        <p>
                            Known as a master organizer, he served as the <strong>Headquarters Secretary</strong> and <strong>Presidium Chairman</strong> for AIADMK. His ability to mobilize cadres and manage booth-level strategies is legendary.
                        </p>
                    </motion.div>

                    {/* CARD 5: IMAGE / VISUAL */}
                    <motion.div className="bento-card image-card" variants={item}>
                        <img src="/images/kas_rally.jpg" alt="Sengottaiyan with Supporters" />
                        <div className="image-overlay">
                            <span>The People's Leader</span>
                        </div>
                    </motion.div>

                    {/* CARD 6: FUTURE VISION */}
                    <motion.div className="bento-card future-card" variants={item}>
                        <div className="card-icon"><TrendingUp size={24} /></div>
                        <h3>The New Chapter: TVK</h3>
                        <p>
                            Now bringing his 50 years of "Power & Knowledge" to <strong>Tamilaga Vettri Kazhagam</strong> to guide the next generation of leadership.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;