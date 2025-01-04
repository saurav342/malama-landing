import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../../styles/components/Header.css';

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="mailto:needhelp@example.com">
              <i className="fas fa-envelope"></i>
              info@malamacabs.com
            </a>
            <a href="tel:+666-888-9999">
              <i className="fas fa-phone"></i>
              Tel: +91 79756 12340
            </a>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="../public/images/logo.png" alt="Malama" />
            <span>Malama</span>
          </Link>

          <Navbar />

          <Link to="/book" className="book-now-btn">
            Book Now
            <span className="btn-accent"></span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header; 