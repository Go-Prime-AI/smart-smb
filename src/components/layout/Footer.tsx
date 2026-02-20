import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
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
                    </div>

                    {/* Services */}
                    <div className="footer-nav">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link to="/services#physical-security">Physical Security</Link></li>
                            <li><Link to="/services#access-control">Access Control</Link></li>
                            <li><Link to="/services#door-entry">Door Entry System</Link></li>
                            <li><Link to="/services#cctv">CCTV & Video Analytics</Link></li>
                            <li><Link to="/services#intruder-alarm">Intruder Alarm</Link></li>
                            <li><Link to="/services#fire-alarm">Fire Alarm System</Link></li>
                            <li><Link to="/services#home-automation">Home Automation</Link></li>
                            <li><Link to="/services#data-center">Data Center</Link></li>
                            <li><Link to="/services#wireless">Wireless Telecom</Link></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div className="footer-nav">
                        <h4>Key Sectors</h4>
                        <ul>
                            <li><Link to="/sectors">Governmental</Link></li>
                            <li><Link to="/sectors">Educational</Link></li>
                            <li><Link to="/sectors">Hospitality</Link></li>
                            <li><Link to="/sectors">Retail</Link></li>
                            <li><Link to="/sectors">City Surveillance</Link></li>
                            <li><Link to="/sectors">Real Estate</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <a href="https://maps.app.goo.gl/PTX9mnJX1BzSLQxMA" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Baouchriyeh, Lebanon</a>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <a href="tel:+9613326759" style={{ color: 'inherit', textDecoration: 'none' }}>+961 3 326759</a>
                        </div>


                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} SmartSMB. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
