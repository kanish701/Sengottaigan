import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-header">
                    <span className="contact-tag">{t.contact.tag}</span>
                    <h2 className="section-title">{t.contact.title} <span className="text-maroon">{t.contact.titleHighlight}</span></h2>
                    <p className="contact-subtitle">{t.contact.desc}</p>
                </div>

                <div className="contact-grid">
                    {/* LEFT: INFO */}
                    <div className="contact-info-card">
                        <h3>{t.contact.officeTitle}</h3>
                        <p className="office-desc">{t.contact.officeDesc}</p>
                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div><h4>{t.contact.addressTitle}</h4><p>123, Main Road, Gobichettipalayam</p></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Phone size={20} /></div>
                                <div><h4>{t.contact.phoneTitle}</h4><p>+91 4285 222 333</p></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <div><h4>{t.contact.emailTitle}</h4><p>helpdesk@kasengottaiyan.com</p></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Clock size={20} /></div>
                                <div><h4>{t.contact.hoursTitle}</h4><p>Sat: 10:00 AM - 1:00 PM</p></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: FORM */}
                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <MessageSquare size={24} className="text-maroon" />
                            <h3>{t.contact.formTitle}</h3>
                        </div>
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{t.contact.labels.name}</label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>{t.contact.labels.phone}</label>
                                    <input type="tel" className="form-input" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>{t.contact.labels.area}</label>
                                <select className="form-select">
                                    <option>Gobichettipalayam Town</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{t.contact.labels.subject}</label>
                                <input type="text" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>{t.contact.labels.desc}</label>
                                <textarea className="form-textarea" rows="4"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">{t.contact.labels.btn} <Send size={18} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;