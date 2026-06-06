import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
          </div>
          <div className="navbar__logo-text">
            <div>
              <span className="logo-tech">Levy</span>
              <span className="logo-rift">Kiprotich</span>
            </div>
            <span className="logo-sub">Software Developer</span>
          </div>
        </a>

        <div className="navbar__links">
          <div className="navbar__item">
            <a href="#home" className="navbar__link">Home</a>
          </div>
          <div className="navbar__item">
            <a href="#about" className="navbar__link">About</a>
          </div>
          <div className="navbar__item">
            <a href="#projects" className="navbar__link">Projects</a>
          </div>
          <div className="navbar__item">
            <a href="#skills" className="navbar__link">Skills</a>
          </div>
        </div>

        <div className="navbar__cta">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>

        <button 
          className="navbar__toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile navbar__mobile--open">
          <a href="#home" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#projects" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#skills" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Skills</a>
          <a href="#contact" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>Contact Me</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
