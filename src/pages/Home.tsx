import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Camera, Key, Bell, Flame, Server, Wifi, DoorOpen, ArrowRight, CheckCircle2, Phone, Home as HomeIcon } from 'lucide-react';
import './Home.css';

const services = [
    {
        icon: <Shield size={28} />,
        title: 'Total Physical Security',
        desc: 'Many physical security issues are complex. Smart SMB is expert in physical and electronic security, providing Total Security Solutions.',
        image: '/assets/physical-security.webp',
        href: '/services#physical-security'
    },
    {
        icon: <Key size={28} />,
        title: 'Access Control',
        desc: 'Next-generation IP-based security with RFID/NFC support and CCTV integration to monitor and restrict movement.',
        image: '/assets/access-control.webp',
        href: '/services#access-control'
    },
    {
        icon: <DoorOpen size={28} />,
        title: 'Door Entry System',
        desc: 'Fully integrated door-phone systems with remote access via PC or smartphone, secure for buildings of all sizes.',
        image: '/assets/door-entry.webp',
        href: '/services#door-entry'
    },
    {
        icon: <Camera size={28} />,
        title: 'CCTV & Video Analytics',
        desc: 'AI-powered video analytics for homes and businesses—tracking suspicious behavior and alerting operators in real-time.',
        image: '/assets/cctv.webp',
        href: '/services#cctv'
    },
    {
        icon: <Bell size={28} />,
        title: 'Intruder Alarm System',
        desc: 'Complete integrated intrusion solutions based on 20 years of expertise, designed to protect your home or business.',
        image: '/assets/intruder.webp',
        href: '/services#intruder-alarm'
    },
    {
        icon: <Flame size={28} />,
        title: 'Fire Alarm & Suppression Systems',
        desc: 'Advanced early warning and suppression systems using clean agents and aerosols to protect property without water damage.',
        image: '/assets/fire-alarm.webp',
        href: '/services#fire-alarm'
    },
    {
        icon: <HomeIcon size={28} />,
        title: 'Home Control & Home Automation',
        desc: 'Smart SMB integrates and automates your home—lighting, cooling, sound, and security—all managed from your smartphone.',
        image: '/assets/automation.webp',
        href: '/services#home-automation'
    },
    {
        icon: <Server size={28} />,
        title: 'Structured Cabling and Data Center',
        desc: 'Customized solutions for network architecture and data center planning to ensure faultless business continuity.',
        image: '/assets/cabling.webp',
        href: '/services#data-center'
    },
    {
        icon: <Wifi size={28} />,
        title: 'Indoor/Outdoor Wireless Telecommunication',
        desc: 'Proven wireless connectivity for indoor and outdoor environments, optimizing connections and maximizing capacity.',
        image: '/assets/mobile-network.webp',
        href: '/services#wireless'
    }
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero */}
            <section className="hero-section">
                <div className="hero-bg-image" />
                <div className="hero-overlay" />
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <span className="hero-badge">Lebanon's Trusted Security Partner</span>
                        <h1>Smart Security.<br />Smarter Infrastructure.</h1>
                        <p>Smart SMB delivers seamless integration of physical security, data networking, and intelligent building systems, protecting your people, property, and information.</p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">Get a Free Consultation <ArrowRight size={18} /></Link>
                            <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">What We Do</span>
                        <h2>Complete Security & Infrastructure Solutions</h2>
                        <p>From CCTV and access control to data centers and wireless systems: everything your business needs under one roof.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="service-card"
                            >
                                <div className="service-card-image">
                                    <img src={s.image} alt={s.title} loading="lazy" />
                                    <div className="service-card-overlay" />
                                    <div className="service-card-icon">{s.icon}</div>
                                </div>
                                <div className="service-card-body">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <span className="card-link">Learn More <ArrowRight size={14} /></span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
                <div className="container why-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="why-image"
                    >
                        <img src="https://www.identityone.net/wp-content/uploads/2024/08/physical-and-logical-security-convergence.jpg" alt="Modern Retail Solutions" />
                    </motion.div>
                    <div className="why-content">
                        <span className="section-label">Why Smart SMB</span>
                        <h2>Unmatched Integration,<br />Measurable Safety</h2>
                        <p>We don't just install systems: we design flexible, open-architecture solutions that provide a clear return on investment, reduce total cost of ownership, and increase your security effectiveness.</p>
                        <ul className="why-list">
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Seamless multi-system integration</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Flexible open architecture design</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Measurable ROI & reduced TCO</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>20+ years serving Lebanon's top sectors</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Residential, commercial & governmental expertise</span></li>
                        </ul>
                        <a href="/about" className="btn btn-primary">About Smart SMB <ArrowRight size={18} /></a>
                    </div>
                </div>
            </section>

            {/* Sectors Strip */}
            <section className="sectors-strip">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Industries We Serve</span>
                        <h2>Trusted Across Key Sectors</h2>
                    </div>
                    <div className="sectors-pills">
                        {['Governmental', 'Educational', 'Hospitality', 'Retail', 'City Surveillance', 'Real Estate'].map((s, i) => (
                            <motion.a
                                key={i}
                                href="/sectors"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="sector-pill"
                            >
                                {s}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container cta-content">
                    <div>
                        <h2>Ready to Secure Your Business?</h2>
                        <p>Contact our team to discuss your security and infrastructure needs.</p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary">Get a Quote <ArrowRight size={18} /></Link>
                        <a href="tel:+9613326759" className="btn btn-outline-light"><Phone size={18} /> Call Us Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
