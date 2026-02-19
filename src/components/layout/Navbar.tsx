import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Sectors', path: '/sectors' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
            <div className="container nav-wrapper">
                <NavLink to="/" className="brand-logo">
                    <img src="/smart-logo.webp" alt="SmartSMB Logo" />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <a href="tel:+961000000" className="nav-cta btn btn-primary">
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
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="mobile-nav-link"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="mobile-cta">
                        <a href="tel:+961000000" className="btn btn-primary w-full">
                            <Phone size={18} /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
