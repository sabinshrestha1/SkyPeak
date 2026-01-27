import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.header__menu-wrapper')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const menuLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Experiences', href: '/experiences', isRoute: true },
    { name: 'Gallery', href: '/#gallery', isRoute: false },
    { name: 'Plan Visit', href: '/#plan', isRoute: false },
    { name: 'Contact', href: '/#contact', isRoute: false },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--hidden' : ''}`}>
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <img
            src="/skypeak_logo.png"
            alt="SkyPeak Nepal Logo"
            className="header__logo-image"
          />
        </Link>

        {/* Menu Button & Dropdown */}
        <div className="header__menu-wrapper">
          <button
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="header__menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>

          </button>

          <nav className={`header__dropdown ${isMenuOpen ? 'header__dropdown--open' : ''}`}>
            {menuLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`header__dropdown-link ${location.pathname === link.href ? 'header__dropdown-link--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="header__dropdown-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
