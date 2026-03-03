import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Key, DoorOpen, Camera, Bell, Flame, Home, Server, Wifi, CheckCircle2 } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 'physical-security',
        icon: <Shield size={32} />,
        title: 'Total Physical Security',
        subtitle: 'Protecting Your People, Property & Information',
        description: 'Many physical security issues are complex. Smart SMB is expert in physical and electronic security, providing Total Security Solutions for homes and businesses. With over 20 years of experience, we design and install high-security systems tailored to your needs—from single door entry to city-wide surveillance.',
        features: [
            'High-Security Keying Systems',
            'Perimeter Protection',
            'Professional Installation & Management',
            'Tailored to Individual Needs',
        ],
        image: '/assets/physical-security.webp',
    },
    {
        id: 'access-control',
        icon: <Key size={32} />,
        title: 'Access Control',
        subtitle: 'Next-Generation IP-Based Access Management',
        description: 'We deliver next-generation security for offices and buildings, monitoring movement and restricting access to sensitive areas. Our reliable systems utilize IP technology with RFID and NFC support, and can seamlessly integrate with CCTV for a complete security solution.',
        features: [
            'IP RFID & NFC Card Readers',
            'Conventional & IP Door Controllers',
            'CCTV System Integration',
            'Movement Monitoring & Audit Logs',
        ],
        image: '/assets/access-control.webp',
        partners: [
            { name: 'Anviz', logo: '/assets/partners/anviz.png', url: 'https://www.anviz.com' },
            { name: '2N', logo: '/assets/partners/zn.png', url: 'https://www.2n.com/' },
            { name: 'Dnake', logo: '/assets/partners/dnake.png', url: 'https://www.dnake-global.com' },
        ]
    },
    {
        id: 'door-entry',
        icon: <DoorOpen size={32} />,
        title: 'Door Entry System',
        subtitle: 'Answer Your Door from Anywhere',
        description: 'Smart SMB offers fully integrated door entry systems compatible with existing security cameras, alarms, and IP telephony. Answer your door from anywhere via PC, laptop, or smartphone—making remote access convenient and secure for buildings of all sizes.',
        features: [
            'Smartphone & Tablet Access',
            'CCTV & Alarm Integration',
            'IP Telephony Compatibility',
            'Scalable for Any Building Size',
        ],
        image: '/assets/door-entry.webp',
        partners: [
            { name: 'Anviz', logo: '/assets/partners/anviz.png', url: 'https://www.anviz.com' },
            { name: '2N', logo: '/assets/partners/zn.png', url: 'https://www.2n.com/' },
            { name: 'Dnake', logo: '/assets/partners/dnake.png', url: 'https://www.dnake-global.com' },
        ]
    },
    {
        id: 'cctv',
        icon: <Camera size={32} />,
        title: 'CCTV & Video Analytics',
        subtitle: 'From Reactive Monitoring to Proactive Prevention',
        description: 'We are committed to bringing high-quality CCTV systems for homes, companies, city surveillance, hotels, banks, and governmental sectors. Our AI-powered video analytics automatically track suspicious behavior, alert operators, and transform camera feeds into active security tools.',
        features: [
            'AI-Powered Behavioral Detection',
            'Real-Time Operator Alerts',
            '24/7 Field-of-View Monitoring',
            'Government, Hotel & Bank Grade Deployments',
        ],
        image: '/assets/cctv.webp',
        partners: [
            { name: 'Dahua', logo: '/assets/partners/alhua.png', url: 'https://www.dahuasecurity.com' },
            { name: 'Hikvision', logo: '/assets/partners/hikvision.png', url: 'https://www.hikvision.com' },
            { name: 'Partizan', logo: '/assets/partners/partizan.png', url: 'https://www.partizan.global' },
            { name: 'TVT', logo: '/assets/partners/tvt.png', url: 'https://en.tvt.net.cn' },
        ]
    },
    {
        id: 'intruder-alarm',
        icon: <Bell size={32} />,
        title: 'Intruder Alarm System',
        subtitle: 'Complete Intrusion Solutions for Every Scale',
        description: 'We provide complete integrated intrusion solutions, from small home applications to large-scale commercial projects. With 20 years of experience serving Lebanon, we deliver reliable, high-security systems designed to protect your most valuable assets and people.',
        features: [
            'Customized Burglar Alarm Design',
            'Home & Commercial Security',
            'Scalable from Small to Large Projects',
            'Reliable, Knowledgeable Installation Team',
        ],
        image: '/assets/intruder.webp',
        partners: [
            { name: 'Pyronix', logo: '/assets/partners/pyronix.png', url: 'https://www.pyronix.com' },
            { name: 'Ajax', logo: '/assets/partners/ajax.png', url: 'https://ajax.systems' },
            { name: 'Inim', logo: '/assets/partners/inim.png', url: 'https://www.inim.biz' },
        ]
    },
    {
        id: 'fire-alarm',
        icon: <Flame size={32} />,
        title: 'Fire Alarm & Suppression Systems',
        subtitle: 'Early Warning for Safe Evacuation',
        description: 'Our fire detection and suppression systems provide critical early warnings and advanced protection using clean agents, water mist, and aerosols. We ensure safe evacuation and property preservation, protecting your investment from the threat of fire.',
        features: [
            'Early Warning Detection Design',
            'Fast Evacuation Notification',
            'Fire Authority Integration',
            'Latest Fire Suppression Agents',
        ],
        image: '/assets/fire-alarm.webp',
        partners: [
            { name: 'Ajax', logo: '/assets/partners/ajax.png', url: 'https://ajax.systems' },
            { name: 'Inim', logo: '/assets/partners/inim.png', url: 'https://www.inim.biz' },
        ]
    },
    {
        id: 'home-automation',
        icon: <Home size={32} />,
        title: 'Home Control & Home Automation',
        subtitle: 'Control Your Entire Home at the Touch of a Button',
        description: 'On your way back home, have the cooling system ready before you arrive. Control lighting, sound, heating, appliances, window coverings, and irrigation — all from your smartphone. Smart SMB integrates and automates the major systems of your home so life is simpler and more efficient.',
        features: [
            'HVAC & Lighting Control',
            'Audio/Video Equipment Automation',
            'Security System Integration',
            'Remote Smartphone & Tablet Control',
        ],
        image: '/assets/automation.webp',
        partners: [
            { name: 'Control4', logo: '/assets/partners/control.png', url: 'https://www.control4.com' },
            { name: 'Ajax', logo: '/assets/partners/ajax.png', url: 'https://ajax.systems' },
        ]
    },
    {
        id: 'data-center',
        icon: <Server size={32} />,
        title: 'Structured Cabling and Data Center',
        subtitle: 'High Availability. Zero Downtime. Custom by Design.',
        description: 'Designing a Data Center requires strategic planning for cost, operation, and scale. We provide customized solutions including network architecture, ICT security, and Disaster Recovery infrastructure to ensure business continuity and readiness for evolving requirements.',
        features: [
            'Custom Network Architecture',
            'Disaster Recovery Planning',
            'ICT Security Integration',
            'High-Availability Infrastructure',
        ],
        image: '/assets/cabling.webp',
        partners: [
            { name: 'Cisco', logo: '/assets/partners/cisco.png', url: 'https://www.cisco.com' },
            { name: 'Ruijie', logo: '/assets/partners/ruijie.png', url: 'https://www.ruijienetworks.com' },
            { name: 'Reyee', logo: '/assets/partners/reyee.png', url: 'https://www.ruijienetworks.com/products/reyee' },
            { name: 'HP', logo: '/assets/partners/hp.png', url: 'https://www.hp.com' },
            { name: 'Leviton', logo: '/assets/partners/leviton.png', url: 'https://www.leviton.com' },
            { name: 'Bariticom', logo: '/assets/partners/bariticom.png', url: 'https://www.bariticom.com' },
        ]
    },
    {
        id: 'wireless',
        icon: <Wifi size={32} />,
        title: 'Indoor/Outdoor Wireless Telecommunication',
        subtitle: 'Reliable Wireless — Built for the Modern Workforce',
        description: 'As bandwidth demands grow, we build strategies for next-generation wireless performance. We optimize connections and maximize capacity for both indoor and outdoor environments—enabling any location to become a high-performance workstation.',
        features: [
            'Microwave Transmission Backbone',
            'Indoor & Outdoor Wi-Fi Design',
            'Bandwidth Optimization',
            'Mobile Workforce Enablement',
        ],
        image: '/assets/mobile-network.webp',
        partners: [
            { name: 'Cisco', logo: '/assets/partners/cisco.png', url: 'https://www.cisco.com' },
            { name: 'Ruijie', logo: '/assets/partners/ruijie.png', url: 'https://www.ruijienetworks.com' },
            { name: 'Reyee', logo: '/assets/partners/reyee.png', url: 'https://www.ruijienetworks.com/products/reyee' },
            { name: 'HP', logo: '/assets/partners/hp.png', url: 'https://www.hp.com' },
        ]
    },
];

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="services-hero-bg" />
                <div className="services-hero-overlay" />
                <div className="container services-hero-content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span className="hero-badge">Our Expertise</span>
                        <h1>Advanced Security &<br />Building Solutions</h1>
                        <p>SmartSMB delivers precision-engineered security and intelligent infrastructure — from single high-security locks to city-wide surveillance networks.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="services-list">
                <div className="container">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5 }}
                            className={`service-module ${index % 2 === 1 ? 'reverse' : ''}`}
                        >
                            <div className="service-module-image">
                                <img src={service.image} alt={service.title} loading="lazy" />
                                <div className="service-module-icon-badge">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="service-module-content">
                                <span className="service-number">0{index + 1}</span>
                                <h2>{service.title}</h2>
                                <p className="service-subtitle">{service.subtitle}</p>
                                <div className="service-desc">{service.description}</div>
                                <ul className="service-features">
                                    {service.features.map((f, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={18} className="feat-icon" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                {service.partners && service.partners.length > 0 && (
                                    <div className="service-partners">
                                        <span className="partners-label">Authorized Partners:</span>
                                        <div className="partners-logos">
                                            {service.partners.map((p, i) => (
                                                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-logo-link" title={p.name}>
                                                    <img src={p.logo} alt={p.name} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <Link to="/contact" className="btn btn-primary">Request This Service</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="services-cta">
                <div className="container text-center">
                    <h2>Ready to Secure Your Business?</h2>
                    <p>Contact our team to discuss your security and infrastructure needs.</p>
                    <Link to="/contact" className="btn btn-primary">Reach Us Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
