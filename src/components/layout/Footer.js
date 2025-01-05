import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src="/logo.png" alt="Malama" />
        <p>Revolutionizing the way you travel in Bangalore</p>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <p>Whitefield, Bangalore</p>
          <p>+91 79756 12340</p>
          <p>info@malamacabs.com</p>
        </div>
        <div className="footer-newsletter">
          {/* <h3>Newsletter</h3>
          <p>Sign up for alerts, our latest blogs, thoughts, and insights.</p>
          <input type="email" placeholder="Your Email address" />
          <button className="subscribe-btn">Subscribe</button> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2025 by Malama</p>
        <a href="/privacy" className="privacy-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer; 