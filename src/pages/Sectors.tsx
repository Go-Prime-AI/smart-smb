import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, GraduationCap, Hotel, ShoppingCart, Camera, Building2, ArrowRight } from 'lucide-react';
import './Sectors.css';

const sectors = [
    {
        icon: <Landmark size={32} />,
        name: 'Governmental',
        description: 'High-security infrastructure for public offices, government buildings, and city-wide surveillance. From access control to CCTV analytics, we protect sensitive public assets and ensure compliance with the highest security standards.',
        features: ['Secure Access Zones', 'City Surveillance Integration', 'Perimeter Control', 'CCTV & Analytics'],
        image: '/assets/sectors/governmental.webp',
    },
    {
        icon: <GraduationCap size={32} />,
        name: 'Educational',
        description: 'Safe learning environments for schools, universities, and training centers. We deploy low-profile surveillance, controlled access points, and early fire warning systems that keep students and staff protected without distraction.',
        features: ['Campus-Wide CCTV', 'Access Card Control', 'Early Fire Detection', 'Emergency Communication'],
        image: '/assets/sectors/educational.webp',
    },
    {
        icon: <Hotel size={32} />,
        name: 'Hospitality',
        description: 'From luxury hotels to boutique resorts, we provide seamless room automation, guest access systems, and discreet surveillance that enhance the guest experience while maintaining total security behind the scenes.',
        features: ['Smart Room Automation', 'Guest Door Entry', 'CCTV & Intrusion', 'Wireless Network Design'],
        image: '/assets/sectors/hospitality.webp',
    },
    {
        icon: <ShoppingCart size={32} />,
        name: 'Retail',
        description: 'Loss prevention, behavioral analytics, and access control solutions for commercial malls, supermarkets, and retail chains. Transform your CCTV from reactive monitoring to active, AI-powered theft prevention.',
        features: ['Loss Prevention Systems', 'AI Behavioral Analytics', 'Customer Flow Analysis', 'Staff Access Control'],
        image: '/assets/sectors/retail.webp',
    },
    {
        icon: <Camera size={32} />,
        name: 'City Surveillance',
        description: 'We design and implement large-scale outdoor surveillance networks for municipalities and smart city initiatives. From IP cameras and Microwave Transmission backbones to command-and-control centers, we enable safer public spaces.',
        features: ['IP Outdoor Cameras', 'Microwave Backbone', 'Centralized Control Room', 'License Plate Recognition'],
        image: '/assets/sectors/city-surveillance.webp',
    },
    {
        icon: <Building2 size={32} />,
        name: 'Real Estate',
        description: 'Complete security and building automation for residential towers, mixed-use developments, and commercial office complexes. We elevate property value through integrated smart building systems that residents and tenants trust.',
        features: ['Intercom & Gate Entry', 'Smart Home Automation', 'Data Center Infrastructure', 'Structured Cabling'],
        image: '/assets/sectors/real-estate.webp',
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
                        <span className="hero-badge">Key Sectors</span>
                        <h1>Expertise Across Industry Verticals</h1>
                        <p>Smart SMB delivers precision security and infrastructure solutions tailored to the unique operational demands of diverse industries, from government to retail.</p>
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
                                <Link to="/contact" className="btn btn-primary">
                                    Discuss Your Needs <ArrowRight size={16} />
                                </Link>
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
                    <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Sectors;
