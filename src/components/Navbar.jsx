import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en'); // 'en' par défaut

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!isLangMenuOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    console.log("Langue sélectionnée :", lang);
    setLangMenuOpen(false);
  };

  const getFlag = (lang) => {
    switch (lang) {
      case 'en': return 'En';
      case 'fr': return 'Fr';
      case 'ar': return 'Ar';
      default: return '🌐';
    }
  };

  return (
    <nav className="navbar shadow sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand fw-bold" to="/">Mayma</Link>

        <div className="burger d-md-none" onClick={toggleMenu}>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>

        <ul className={`navbar-nav ${isMobileMenuOpen ? 'show' : ''} d-flex flex-column flex-md-row`}>
          <li className="nav-item mx-2"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/about" onClick={closeMenu}>About</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Language Selector */}
        <div className="lang-menu position-relative">
          <button className="btn btn-light" onClick={toggleLangMenu}>
            🌐 {getFlag(selectedLang)}
          </button>
          {isLangMenuOpen && (
            <ul className="dropdown-menu show" style={{ position: 'absolute', top: '100%', right: 0 }}>
              <li><button className="dropdown-item" onClick={() => selectLanguage('en')}>En English</button></li>
              <li><button className="dropdown-item" onClick={() => selectLanguage('fr')}>Fr Français</button></li>
              <li><button className="dropdown-item" onClick={() => selectLanguage('ar')}>Ar العربية</button></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
