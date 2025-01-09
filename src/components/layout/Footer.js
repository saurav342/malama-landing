import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/img/logo.png" alt="Malama" />
            <span>Malama</span>
          </Link>
          <p className="footer-description">
            Revolutionizing the way you travel in Bangalore. Experience comfort, reliability, and safety with every ride.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <div className="service-info">
            <div className="service-item">
              <img src="/img/icon-location.svg" alt="Location" />
              <p>Whitefield, Bangalore</p>
            </div>
            <div className="service-item">
              <img src="/img/icon-phone.svg" alt="Phone" />
              <p>+91 79756 12340</p>
            </div>
            <div className="service-item">
              <img src="/img/icon-email.svg" alt="Email" />
              <p>info@malamacabs.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest offers and services.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your Email address" 
              className="newsletter-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© Copyright 2024 by Malama</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/about-us">About</Link>
            <span>/</span>
            <Link to="/contact-us">Contact</Link>
            <span>/</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 