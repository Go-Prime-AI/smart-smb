import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-overhaul">
            <section className="contact-content-section">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-label">Get In Touch</span>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '1rem' }}>We're Ready to Help</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Choose your preferred way to connect with our technical consultation team.</p>
                    </div>
                    <div className="contact-direct-grid">
                        {/* Call Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="contact-card-modern"
                        >
                            <div className="card-icon-wrapper">
                                <Phone size={32} />
                            </div>
                            <h3>Phone Consultation</h3>
                            <p>Speak directly with our technical experts for immediate assistance.</p>
                            <a href="tel:+9613326759" className="card-action-btn">+961 3 326759</a>
                        </motion.div>

                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="contact-card-modern"
                        >
                            <div className="card-icon-wrapper whatsapp-theme">
                                <MessageCircle size={32} />
                            </div>
                            <h3>WhatsApp Chat</h3>
                            <p>Fast and convenient support. Get answers to your questions in minutes.</p>
                            <a
                                href="https://wa.me/9613326759?text=Hello%20Smart%20SMB,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                className="card-action-btn whatsapp-theme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chat Now
                            </a>
                        </motion.div>

                        {/* Location Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="contact-card-modern"
                        >
                            <div className="card-icon-wrapper location-theme">
                                <MapPin size={32} />
                            </div>
                            <h3>Our Location</h3>
                            <p>Headquarters in Baouchriyeh, Lebanon.</p>
                            <a
                                href="https://maps.app.goo.gl/owZA9aC3auv3jJkB9"
                                className="card-action-btn location-theme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Maps
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
