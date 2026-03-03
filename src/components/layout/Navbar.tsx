import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const servicesLinks = [
        { name: 'Physical Security', path: '/services#physical-security' },
        { name: 'Access Control', path: '/services#access-control' },
        { name: 'Door Entry System', path: '/services#door-entry' },
        { name: 'CCTV & Analytics', path: '/services#cctv' },
        { name: 'Intruder Alarm', path: '/services#intruder-alarm' },
        { name: 'Fire Alarm System', path: '/services#fire-alarm' },
        { name: 'Home Automation', path: '/services#home-automation' },
        { name: 'Data Center', path: '/services#data-center' },
        { name: 'Wireless Telecom', path: '/services#wireless' },
    ];

    const sectorsLinks = [
        { name: 'Governmental', path: '/sectors#governmental' },
        { name: 'Educational', path: '/sectors#educational' },
        { name: 'Hospitality', path: '/sectors#hospitality' },
        { name: 'Retail', path: '/sectors#retail' },
        { name: 'City Surveillance', path: '/sectors#city-surveillance' },
        { name: 'Real Estate', path: '/sectors#real-estate' },
    ];

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', dropdown: servicesLinks },
        { name: 'Sectors', path: '/sectors', dropdown: sectorsLinks },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
            <div className="container nav-wrapper">
                <NavLink to="/" className="brand-logo">
                    <img src="/smart-smb-logo.jpeg" alt="Smart SMB Logo" />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <div key={link.path} className={`nav-item-container ${link.dropdown ? 'has-dropdown' : ''}`}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                            </NavLink>

                            {link.dropdown && (
                                <div className="dropdown-menu">
                                    {link.dropdown.map((subLink) => (
                                        <NavLink key={subLink.path} to={subLink.path} className="dropdown-item">
                                            {subLink.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="tel:+9613326759" className="nav-cta btn btn-primary">
                        <Phone size={18} /> Call Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu glass ${isOpen ? 'active' : ''}`}>
                <div className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <div key={link.path} className="mobile-nav-item">
                            <div className="mobile-nav-header">
                                <NavLink
                                    to={link.path}
                                    onClick={() => !link.dropdown && setIsOpen(false)}
                                    className="mobile-nav-link"
                                >
                                    {link.name}
                                </NavLink>
                                {link.dropdown && (
                                    <button
                                        className={`dropdown-toggle ${activeDropdown === link.name ? 'active' : ''}`}
                                        onClick={() => toggleDropdown(link.name)}
                                    >
                                        <ChevronDown size={24} />
                                    </button>
                                )}
                            </div>

                            {link.dropdown && (
                                <div className={`mobile-dropdown ${activeDropdown === link.name ? 'open' : ''}`}>
                                    {link.dropdown.map((subLink) => (
                                        <NavLink
                                            key={subLink.path}
                                            to={subLink.path}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setActiveDropdown(null);
                                            }}
                                            className="mobile-sub-link"
                                        >
                                            {subLink.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mobile-cta">
                        <a href="tel:+9613326759" className="btn btn-primary w-full">
                            <Phone size={18} /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
