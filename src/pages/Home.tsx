import { motion } from 'framer-motion';
import { Shield, Camera, Key, Bell, Flame, Server, Wifi, DoorOpen, ArrowRight, CheckCircle2, Phone, Home as HomeIcon } from 'lucide-react';
import './Home.css';

const services = [
    {
        icon: <Shield size={28} />,
        title: 'Total Physical Security',
        desc: 'Comprehensive security solutions for your home and business — protecting your people, property, and information.',
        image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#physical-security'
    },
    {
        icon: <Key size={28} />,
        title: 'Access Control',
        desc: 'IP RFID & NFC-based systems that monitor and restrict movement in your building with total precision.',
        image: 'https://images.pexels.com/photos/13657406/pexels-photo-13657406.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#access-control'
    },
    {
        icon: <DoorOpen size={28} />,
        title: 'Door Entry System',
        desc: 'Answer your door from anywhere — PC, laptop, or smartphone. Fully integrated with CCTV and alarm systems.',
        image: 'https://images.pexels.com/photos/8978630/pexels-photo-8978630.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#door-entry'
    },
    {
        icon: <Camera size={28} />,
        title: 'CCTV & Video Analytics',
        desc: 'Round-the-clock surveillance with AI-powered analytics — transforming reactive monitoring into proactive prevention.',
        image: 'https://images.pexels.com/photos/18693311/pexels-photo-18693311.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#cctv'
    },
    {
        icon: <Bell size={28} />,
        title: 'Intruder Alarm System',
        desc: 'Customized burglar alarm solutions for homes and commercial premises, covering all scales and standards.',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/020/724/282/small/thief-with-balaclava-and-wire-cutter-was-spotted-trying-to-steal-in-a-apartment-from-the-security-alarm-system-scared-expression-photo.jpg',
        href: '/services#intruder-alarm'
    },
    {
        icon: <Flame size={28} />,
        title: 'Fire Alarm System',
        desc: 'Early warning detection systems designed and installed to ensure safe and timely evacuation of any building.',
        image: 'https://images.pexels.com/photos/7425340/pexels-photo-7425340.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#fire-alarm'
    },
    {
        icon: <HomeIcon size={28} />,
        title: 'Home Control & Automation',
        desc: 'Control lighting, HVAC, audio, irrigation, and security from your smartphone — anytime, anywhere.',
        image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&q=80&w=800',
        href: '/services#home-automation'
    },
    {
        icon: <Server size={28} />,
        title: 'Structured Cabling & Data Center',
        desc: 'Custom-designed network architectures and disaster recovery infrastructure for zero-downtime operations.',
        image: 'https://images.pexels.com/photos/4716292/pexels-photo-4716292.jpeg?auto=format&fit=crop&q=80&w=800',
        href: '/services#data-center'
    },
    {
        icon: <Wifi size={28} />,
        title: 'Wireless Telecommunication',
        desc: 'Next-gen Wi-Fi and Microwave Transmission backbones — optimized for maximum capacity, minimum dropouts.',
        image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800',
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
                        <p>SmartSMB delivers seamless integration of physical security, data networking, and intelligent building systems — protecting your people, property, and information.</p>
                        <div className="hero-cta">
                            <a href="/contact" className="btn btn-primary">Get a Free Consultation <ArrowRight size={18} /></a>
                            <a href="/services" className="btn btn-outline">Explore Our Services</a>
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
                        <p>From CCTV and access control to data centers and wireless systems — everything your business needs under one roof.</p>
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
                        <span className="section-label">Why SmartSMB</span>
                        <h2>Innovation at the Core of Every Solution</h2>
                        <p>We don't just install systems — we design flexible, open-architecture solutions that provide a clear return on investment, reduce total cost of ownership, and increase your security effectiveness.</p>
                        <ul className="why-list">
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Seamless multi-system integration</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Flexible open architecture design</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Measurable ROI & reduced TCO</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>5+ years serving Lebanon's top sectors</span></li>
                            <li><CheckCircle2 size={20} className="check-icon" /> <span>Residential, commercial & governmental expertise</span></li>
                        </ul>
                        <a href="/about" className="btn btn-primary">About SmartSMB <ArrowRight size={18} /></a>
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
                        <p>Contact our team for a tailored security assessment and consultation.</p>
                    </div>
                    <div className="cta-actions">
                        <a href="tel:+9613326759" className="btn btn-outline-light"><Phone size={18} /> Call Us Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
