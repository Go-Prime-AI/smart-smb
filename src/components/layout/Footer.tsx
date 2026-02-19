import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <img src="/smart-logo.webp" alt="SmartSMB Logo" />
                        <p>Providing innovation in security integration and seamless infrastructure solutions across Lebanon since 2020.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="mailto:info@smart-smb.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-nav">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="/services#physical-security">Physical Security</a></li>
                            <li><a href="/services#access-control">Access Control</a></li>
                            <li><a href="/services#door-entry">Door Entry System</a></li>
                            <li><a href="/services#cctv">CCTV & Video Analytics</a></li>
                            <li><a href="/services#intruder-alarm">Intruder Alarm</a></li>
                            <li><a href="/services#fire-alarm">Fire Alarm System</a></li>
                            <li><a href="/services#home-automation">Home Automation</a></li>
                            <li><a href="/services#data-center">Data Center</a></li>
                            <li><a href="/services#wireless">Wireless Telecom</a></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div className="footer-nav">
                        <h4>Key Sectors</h4>
                        <ul>
                            <li><a href="/sectors">Governmental</a></li>
                            <li><a href="/sectors">Educational</a></li>
                            <li><a href="/sectors">Hospitality</a></li>
                            <li><a href="/sectors">Retail</a></li>
                            <li><a href="/sectors">City Surveillance</a></li>
                            <li><a href="/sectors">Real Estate</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <span>Beirut, Lebanon</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <span>+961 00 000 000</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="contact-icon" />
                            <span>info@smart-smb.com</span>
                        </div>
                        <a href="/contact" className="footer-cta-btn">Get a Free Quote</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} SmartSMB. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
