import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar shadow sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo à gauche */}
        <Link className="navbar-brand fw-bold" to="/">Mayma</Link>

        {/* Liens à droite */}
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-2"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/skills">Skills</Link></li>
          <li className="nav-item mx-2"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
