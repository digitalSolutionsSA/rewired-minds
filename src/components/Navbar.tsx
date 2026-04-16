import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Books', href: '#books' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="18" cy="17" rx="13" ry="15" fill="url(#headGrad)" />
              <path
                d="M18 32 C18 32 10 28 9 20"
                stroke="#dbeafe"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M18 32 C18 32 26 28 27 20"
                stroke="#dbeafe"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="14" cy="11" r="1.5" fill="white" />
              <circle cx="21" cy="9" r="1.5" fill="white" />
              <circle cx="24" cy="15" r="1.5" fill="white" />
              <circle cx="13" cy="17" r="1.5" fill="white" />
              <circle cx="19" cy="20" r="1.5" fill="white" />
              <line x1="14" y1="11" x2="21" y2="9" stroke="white" strokeWidth="1.2" />
              <line x1="21" y1="9" x2="24" y2="15" stroke="white" strokeWidth="1.2" />
              <line x1="14" y1="11" x2="13" y2="17" stroke="white" strokeWidth="1.2" />
              <line x1="13" y1="17" x2="19" y2="20" stroke="white" strokeWidth="1.2" />
              <line x1="24" y1="15" x2="19" y2="20" stroke="white" strokeWidth="1.2" />
              <line
                x1="14"
                y1="11"
                x2="19"
                y2="20"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line
                x1="21"
                y1="9"
                x2="13"
                y2="17"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <defs>
                <radialGradient id="headGrad" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="60%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#dbeafe" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="navbar__logo-text">
            <span className="navbar__logo-rewired">REWIRED</span>
            <span className="navbar__logo-minds">MINDS</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#books" className="navbar__cta">
          Shop Books
        </a>

        {/* Burger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#books"
          className="navbar__cta navbar__cta--mobile"
          onClick={() => setMenuOpen(false)}
        >
          Shop Books
        </a>
      </div>
    </nav>
  );
}