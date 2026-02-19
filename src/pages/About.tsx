import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import './About.css';

const values = [
    {
        icon: <Target size={28} />,
        title: 'Innovation in Design',
        desc: 'Our main focus is to provide innovation when designing solutions — not just installing standard products, but crafting tailored architectures that actually solve problems.'
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Seamless Integration',
        desc: 'We specialize in the seamless integration of multiple sub-systems: intrusion detection, fire, automation, access control, and video analytics — all working as one.'
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Return on Investment',
        desc: 'We offer flexible open architecture systems that provide a measurable return on investment and reduce the total cost of ownership for every client.'
    },
    {
        icon: <Users size={28} />,
        title: 'People First',
        desc: 'We understand that security is ultimately about protecting people. Every solution we design starts with this fundamental commitment to human safety.'
    }
];

const About = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero-bg" />
                <div className="about-hero-overlay" />
                <div className="container about-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">About SmartSMB</span>
                        <h1>Lebanon's Trusted Security & Infrastructure Partner</h1>
                        <p>SmartSMB is a leading professional services provider specialized in physical security, data networking, enterprise security integration, building control-automation and consulting.</p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="about-story">
                <div className="container story-grid">
                    <motion.div
                        className="story-image"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
                            alt="SmartSMB Professional Team"
                        />
                    </motion.div>
                    <div className="story-content">
                        <span className="section-label">Our Story</span>
                        <h2>Built on Expertise,<br />Driven by Innovation</h2>
                        <p>SmartSMB brings together expertise in physical security, data networking, and building automation to deliver complete, end-to-end infrastructure solutions. In over 5 years of business, we have served homes, offices, hotels, and governmental institutions across Lebanon.</p>
                        <p>We work closely with each client to understand their unique environment and design systems that are not only effective today, but scalable for tomorrow. Our solutions span everything from a single door entry system to a full data center and city-wide surveillance network.</p>
                        <div className="story-stats">
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years of Business</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">9</span>
                                <span className="stat-label">Core Service Areas</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">6</span>
                                <span className="stat-label">Key Sectors Served</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="about-values">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Approach</span>
                        <h2>How We Think About Security</h2>
                        <p>Every project begins with a fundamental philosophy — security should be seamless, affordable, and built to last.</p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="value-card"
                            >
                                <div className="value-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer Summary */}
            <section className="about-services-summary">
                <div className="container">
                    <div className="summary-grid">
                        <div className="summary-image">
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200"
                                alt="Data Center Infrastructure"
                            />
                        </div>
                        <div className="summary-content">
                            <span className="section-label">Our Expertise</span>
                            <h2>A Complete Range of Solutions</h2>
                            <p>From physical security to wireless networks, we cover all technology layers of your business infrastructure:</p>
                            <ul className="summary-list">
                                <li>Total Physical Security & High-Security Keying</li>
                                <li>Access Control (IP RFID, NFC)</li>
                                <li>Door Entry Systems</li>
                                <li>CCTV & AI Video Analytics</li>
                                <li>Intruder Alarm Systems</li>
                                <li>Fire Alarm & Detection</li>
                                <li>Home Control & Automation</li>
                                <li>Structured Cabling & Data Centers</li>
                                <li>Indoor/Outdoor Wireless Telecommunication</li>
                            </ul>
                            <a href="/services" className="btn btn-primary">View All Services</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
