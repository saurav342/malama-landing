import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/components/Header.css';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="mailto:info@malamacabs.com">
              <i className="fas fa-envelope"></i>
              info@malamacabs.com
            </a>
            <a href="tel:+91-79756-12340">
              <i className="fas fa-phone"></i>
              Tel: +91 79756 12340
            </a>
          </div>
          <div className="social-links">
            <a href="https://x.com/malamacabs" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/malamacabs" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@malamacabs" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/malamacabs" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/malamacabs" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/mainlogo.png" alt="Malama" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="main-nav desktop-nav">
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/your-next-ride" className={location.pathname === "/your-next-ride" ? "active" : ""}>
                  Your Next Ride
                </Link>
              </li>
              <li>
                <Link to="/become-a-driver" className={location.pathname === "/become-a-driver" ? "active" : ""}>
                  Drive With Us
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={location.pathname === "/about-us" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <motion.a 
            href="tel:+91-79756-12340"
            className="call-now-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="phone-icon"
              animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <i className="fas fa-phone-alt"></i>
            </motion.div>
            <span className="phone-number">+91 79756 12340</span>
          </motion.a>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav 
                className="mobile-nav"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <ul>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link to="/" onClick={closeMobileMenu} className={location.pathname === "/" ? "active" : ""}>
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/about" onClick={closeMobileMenu} className={location.pathname === "/about" ? "active" : ""}>
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link to="/privacy" onClick={closeMobileMenu} className={location.pathname === "/privacy" ? "active" : ""}>
                      Privacy
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to="/drive-with-us" onClick={closeMobileMenu} className={location.pathname === "/drive-with-us" ? "active" : ""}>
                      Drive With Us
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === "/contact" ? "active" : ""}>
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header; 