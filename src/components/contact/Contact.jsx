import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                
                <div className="contact-header">
                    <span className="contact-tag">Citizens' Connect</span>
                    <h2 className="section-title">Get in <span className="text-maroon">Touch</span></h2>
                    <p className="contact-subtitle">
                        Whether you have a grievance to report or a suggestion for the constituency, 
                        K. A. Sengottaiyan's office is always open to the people of Gobichettipalayam.
                    </p>
                </div>

                <div className="contact-grid">
                    
                    {/* LEFT: Contact Info Card */}
                    <div className="contact-info-card">
                        <h3>Constituency Office</h3>
                        <p className="office-desc">
                            The official hub for public welfare and administrative support.
                        </p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>123, Main Road, Gobichettipalayam,<br/>Erode District - 638452.</p>
                                </div>
                            </div>
                            
                            <div className="info-item">
                                <div className="icon-box"><Phone size={20} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 4285 222 333</p>
                                    <p className="sub-text">Mon-Sat, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>helpdesk@kasengottaiyan.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Clock size={20} /></div>
                                <div>
                                    <h4>Public Meeting Hours</h4>
                                    <p>Every Saturday: 10:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-preview">
                            <div className="map-overlay">
                                <span>View on Google Maps</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Grievance Form */}
                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <MessageSquare size={24} className="text-maroon" />
                            <h3>Submit a Petition / Grievance</h3>
                        </div>
                        
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your name" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="form-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Constituency / Area</label>
                                <select className="form-select">
                                    <option>Gobichettipalayam Town</option>
                                    <option>Modachur</option>
                                    <option>Lakkampatti</option>
                                    <option>Nambiyur</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="e.g., Water Supply Issue, Road Repair" className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea placeholder="Describe your grievance in detail..." className="form-textarea" rows="4"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;