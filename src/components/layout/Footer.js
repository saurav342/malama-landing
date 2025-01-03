import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 Malama EV Cabs. All rights reserved.</p>
        <p>Contact: info@malamaevcabs.com</p>
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer; 