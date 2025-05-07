import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../component/Img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <img src={logo} alt="TaxiGo Logo" className="navbar__logo" />
        
        </div>

        <div 
          className={`navbar__toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link 
              to="/" 
              className={`navbar__link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              to="/Book" 
              className={`navbar__link ${activeLink === 'book' ? 'active' : ''}`}
              onClick={() => handleLinkClick('book')}
            >
              Book Ride
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              to="/Services" 
              className={`navbar__link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              to="/About" 
              className={`navbar__link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              to="/Contact" 
              className={`navbar__link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;