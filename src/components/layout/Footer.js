import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Malama" />
          <p>Authoritatively simplify open-source resources via backend visualize business e-markets.</p>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <p>25 Street, 145 City Road New Town</p>
          <p>DD14, USA</p>
          <p>+1234567789</p>
          <p>needhelp@company.com</p>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for alerts, our latest blogs, thoughts, and insights.</p>
          <input type="email" placeholder="Your Email address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 by kodesolution.com</p>
        <a href="/privacy" className="privacy-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer; 