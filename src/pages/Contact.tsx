import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-overhaul">
            {/* Contact Hero */}
            <section className="contact-hero-section">
                <div className="contact-hero-bg" />
                <div className="contact-hero-overlay" />
                <div className="container contact-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="section-subtitle">Get In Touch</span>
                        <h1>Global Expertise, Local Support</h1>
                        <p>Our consultation team is available 24/7 to discuss your infrastructure needs and provide a comprehensive security assessment.</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-content-section">
                <div className="container">
                    <div className="contact-grid-main">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="contact-form-card glass"
                        >
                            <div className="form-header">
                                <MessageCircle className="icon-accent" />
                                <h2>Send a Message</h2>
                            </div>
                            <form className="modern-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label>Company</label>
                                        <input type="text" placeholder="Enter Company" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@company.com" />
                                </div>
                                <div className="form-group">
                                    <label>Project Type</label>
                                    <select>
                                        <option>Physical Security</option>
                                        <option>Data Networking</option>
                                        <option>Smart Building</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows={5} placeholder="Describe your requirements..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">
                                    <Send size={18} /> Submit Consultation Request
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Details */}
                        <div className="contact-details-grid">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="detail-item glass"
                            >
                                <div className="detail-icon"><MapPin /></div>
                                <div className="detail-text">
                                    <h3>Headquarters</h3>
                                    <p>Main Corporate Office,<br />Beirut Business District, Lebanon</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="detail-item glass"
                            >
                                <div className="detail-icon"><Mail /></div>
                                <div className="detail-text">
                                    <h3>Email Us</h3>
                                    <p>info@smart-smb.com<br />support@smart-smb.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="detail-item glass"
                            >
                                <div className="detail-icon"><Phone /></div>
                                <div className="detail-text">
                                    <h3>Call Directly</h3>
                                    <p>+961 03 000 000<br />+961 01 000 000</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
