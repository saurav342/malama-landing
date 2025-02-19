import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/malama-logo.png" alt="Malama EV Cabs" className="footer-logo" />
            <p>Economical & Green Airport Rides in Bangalore</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <a href="tel:+917975612340">+91 7975612340</a>
            </p>
            <p>
              <a href="https://www.malamacabs.com">www.malamacabs.com</a>
            </p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/twitter.svg" alt="Twitter" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Malama EV Cabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
