import { motion } from 'framer-motion';
import { Shield, Key, DoorOpen, Camera, Bell, Flame, Home, Server, Wifi, CheckCircle2 } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 'physical-security',
        icon: <Shield size={32} />,
        title: 'Total Physical Security',
        subtitle: 'Protecting Your People, Property & Information',
        description: 'Many physical security issues are complex. SmartSMB is expert in physical and electronic security — we will work together to find the Total Security Solution for your home or business. Your security begins with a High-Security Keying System, well designed, professionally installed and properly managed.',
        features: [
            'High-Security Keying Systems',
            'Perimeter Protection',
            'Professional Installation & Management',
            'Tailored to Individual Needs',
        ],
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'access-control',
        icon: <Key size={32} />,
        title: 'Access Control',
        subtitle: 'Next-Generation IP-Based Access Management',
        description: 'We deliver the next generation of security in offices and buildings. Employees, customers and visitors are moving around every day — we monitor their movement and restrict access to sensitive areas using IP RFID, NFC readers, door controllers and IP converters in a single integrated solution.',
        features: [
            'IP RFID & NFC Card Readers',
            'Conventional & IP Door Controllers',
            'CCTV System Integration',
            'Movement Monitoring & Audit Logs',
        ],
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'door-entry',
        icon: <DoorOpen size={32} />,
        title: 'Door Entry System',
        subtitle: 'Answer Your Door from Anywhere',
        description: 'SmartSMB offers a fully integrated door entry system compatible with your existing security cameras, anti-burglary alarm, and IP telephony. You can answer your door from your PC, laptop, or smartphone — making remote access convenient, reliable, and secure for buildings of all sizes.',
        features: [
            'Smartphone & Tablet Access',
            'CCTV & Alarm Integration',
            'IP Telephony Compatibility',
            'Scalable for Any Building Size',
        ],
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
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
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'intruder-alarm',
        icon: <Bell size={32} />,
        title: 'Intruder Alarm System',
        subtitle: 'Complete Intrusion Solutions for Every Scale',
        description: 'SmartSMB puts in your hands complete integrated intrusion solutions — from the smallest home application to large-scale commercial projects with the highest security standards. We have proudly served offices, businesses, and hospitality clients across Lebanon in our 5 years of operation.',
        features: [
            'Customized Burglar Alarm Design',
            'Home & Commercial Security',
            'Scalable from Small to Large Projects',
            'Reliable, Knowledgeable Installation Team',
        ],
        image: 'https://images.unsplash.com/photo-1570793294991-17f2e1a2ef91?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'fire-alarm',
        icon: <Flame size={32} />,
        title: 'Fire Alarm System',
        subtitle: 'Early Warning for Safe Evacuation',
        description: 'Fire alarm and detection systems are designed and installed as an early warning system to the occupants of buildings. A correctly designed, installed and maintained system ensures all inhabitants have adequate time to evacuate and alert fire authorities. Protect your property from one of the most destructive threats imaginable.',
        features: [
            'Early Warning Detection Design',
            'Fast Evacuation Notification',
            'Fire Authority Integration',
            'Maintenance & Inspection Services',
        ],
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'home-automation',
        icon: <Home size={32} />,
        title: 'Home Control & Automation',
        subtitle: 'Control Your Entire Home at the Touch of a Button',
        description: 'On your way back home, have the cooling system ready before you arrive. Control lighting, sound, heating, appliances, window coverings, and irrigation — all from your smartphone. SmartSMB integrates and automates the major systems of your home so life is simpler and more efficient.',
        features: [
            'HVAC & Lighting Control',
            'Audio/Video Equipment Automation',
            'Security System Integration',
            'Remote Smartphone & Tablet Control',
        ],
        image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'data-center',
        icon: <Server size={32} />,
        title: 'Structured Cabling & Data Center',
        subtitle: 'High Availability. Zero Downtime. Custom by Design.',
        description: 'Designing a Data Center is a complex process with many decisions that impact cost, operation, and scale. Businesses that require faultless continuity need Disaster Recovery (DR) infrastructure in place. SmartSMB provides customized solutions including network architecture, ICT security, and full Data Centre planning.',
        features: [
            'Custom Network Architecture',
            'Disaster Recovery Planning',
            'ICT Security Integration',
            'High-Availability Infrastructure',
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    },
    {
        id: 'wireless',
        icon: <Wifi size={32} />,
        title: 'Indoor/Outdoor Wireless Telecommunication',
        subtitle: 'Reliable Wireless — Built for the Modern Workforce',
        description: 'As demands for bandwidth continue to grow, SmartSMB evaluates your current wireless system and builds strategies for next-generation performance. We optimize connections, maximize capacity, and reduce cost — eliminating dropped packets, choppy voice, and pixelated video through proven Microwave Transmission backbones.',
        features: [
            'Microwave Transmission Backbone',
            'Indoor & Outdoor Wi-Fi Design',
            'Bandwidth Optimization',
            'Mobile Workforce Enablement',
        ],
        image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1200',
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
                    <span className="section-label">Our Services</span>
                    <h1>Complete Security & Infrastructure Solutions</h1>
                    <p>From physical security and CCTV to data centers and wireless systems — SmartSMB covers every dimension of your security and connectivity needs.</p>
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
                                <p className="service-desc">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((f, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={18} className="feat-icon" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="btn btn-primary">Request This Service</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="services-cta">
                <div className="container text-center">
                    <h2>Not Sure What You Need?</h2>
                    <p>Our consultants will assess your premises and recommend the most effective, cost-efficient solution.</p>
                    <a href="/contact" className="btn btn-primary">Book a Free Assessment</a>
                </div>
            </section>
        </div>
    );
};

export default Services;
