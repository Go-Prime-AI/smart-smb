import { motion } from 'framer-motion';
import { Landmark, GraduationCap, Hotel, ShoppingCart, Camera, Building2, ArrowRight } from 'lucide-react';
import './Sectors.css';

const sectors = [
    {
        icon: <Landmark size={32} />,
        name: 'Governmental',
        description: 'High-security infrastructure for public offices, government buildings, and city-wide surveillance. From access control to CCTV analytics, we protect sensitive public assets and ensure compliance with the highest security standards.',
        features: ['Secure Access Zones', 'City Surveillance Integration', 'Perimeter Control', 'CCTV & Analytics'],
        image: 'https://images.pexels.com/photos/6462850/pexels-photo-6462850.jpeg',
    },
    {
        icon: <GraduationCap size={32} />,
        name: 'Educational',
        description: 'Safe learning environments for schools, universities, and training centers. We deploy low-profile surveillance, controlled access points, and early fire warning systems that keep students and staff protected without distraction.',
        features: ['Campus-Wide CCTV', 'Access Card Control', 'Early Fire Detection', 'Emergency Communication'],
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
    },
    {
        icon: <Hotel size={32} />,
        name: 'Hospitality',
        description: 'From luxury hotels to boutique resorts, we provide seamless room automation, guest access systems, and discreet surveillance that enhance the guest experience while maintaining total security behind the scenes.',
        features: ['Smart Room Automation', 'Guest Door Entry', 'CCTV & Intrusion', 'Wireless Network Design'],
        image: 'https://images.unsplash.com/photo-1516788875874-c5912cae7b43?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        icon: <ShoppingCart size={32} />,
        name: 'Retail',
        description: 'Loss prevention, behavioral analytics, and access control solutions for commercial malls, supermarkets, and retail chains. Transform your CCTV from reactive monitoring to active, AI-powered theft prevention.',
        features: ['Loss Prevention Systems', 'AI Behavioral Analytics', 'Customer Flow Analysis', 'Staff Access Control'],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    },
    {
        icon: <Camera size={32} />,
        name: 'City Surveillance',
        description: 'We design and implement large-scale outdoor surveillance networks for municipalities and smart city initiatives. From IP cameras and Microwave Transmission backbones to command-and-control centers, we enable safer public spaces.',
        features: ['IP Outdoor Cameras', 'Microwave Backbone', 'Centralized Control Room', 'License Plate Recognition'],
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    },
    {
        icon: <Building2 size={32} />,
        name: 'Real Estate',
        description: 'Complete security and building automation for residential towers, mixed-use developments, and commercial office complexes. We elevate property value through integrated smart building systems that residents and tenants trust.',
        features: ['Intercom & Gate Entry', 'Smart Home Automation', 'Data Center Infrastructure', 'Structured Cabling'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    },
];

const Sectors = () => {
    return (
        <div className="sectors-page">

            {/* Hero */}
            <section className="sectors-hero">
                <div className="sectors-hero-bg" />
                <div className="sectors-hero-overlay" />
                <div className="container sectors-hero-content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span className="section-label">Key Sectors</span>
                        <h1>Expertise Across Industry Verticals</h1>
                        <p>SmartSMB delivers precision security and infrastructure solutions tailored to the unique operational demands of diverse industries — from government to retail.</p>
                    </motion.div>
                </div>
            </section>

            {/* Sectors Detailed Grid */}
            <section className="sectors-detail">
                <div className="container">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            id={sector.name.toLowerCase().replace(' ', '-')}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5 }}
                            className={`sector-row ${index % 2 === 1 ? 'reverse' : ''}`}
                        >
                            <div className="sector-row-image">
                                <img src={sector.image} alt={sector.name} loading="lazy" />
                                <div className="sector-icon-badge">{sector.icon}</div>
                            </div>
                            <div className="sector-row-content">
                                <h2>{sector.name}</h2>
                                <p>{sector.description}</p>
                                <ul className="sector-features">
                                    {sector.features.map((f, i) => (
                                        <li key={i}>
                                            <span className="feat-dot" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="btn btn-primary">
                                    Discuss Your Needs <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="sectors-cta">
                <div className="container text-center">
                    <h2>Don't See Your Industry?</h2>
                    <p>We work with clients across all verticals. Contact us to discuss how we can adapt our expertise to your specific requirements.</p>
                    <a href="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></a>
                </div>
            </section>
        </div>
    );
};

export default Sectors;
