// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar shadow sticky-top">
//       <div className="container d-flex align-items-center justify-content-between">
//         {/* Logo à gauche */}
//         <Link className="navbar-brand fw-bold" to="/">Mayma</Link>

//         {/* Liens à droite */}
//         <ul className="navbar-nav d-flex flex-row">
//           <li className="nav-item mx-2"><Link className="nav-link" to="/">Home</Link></li>
//           <li className="nav-item mx-2"><Link className="nav-link" to="/about">About</Link></li>
//           <li className="nav-item mx-2"><Link className="nav-link" to="/services">Services</Link></li>
//           <li className="nav-item mx-2"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
//           <li className="nav-item mx-2"><Link className="nav-link" to="/skills">Skills</Link></li>
//           <li className="nav-item mx-2"><Link className="nav-link" to="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar shadow sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo à gauche */}
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
      </div>
    </nav>
  );
};

export default Navbar;

