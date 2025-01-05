import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/DriveWithUs.css';

const DriveWithUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    vehicleType: 'sedan',
    experience: '0-1'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const benefits = [
    { icon: "💰", title: "Competitive Earnings", description: "Earn up to ₹45,000 per month with flexible working hours" },
    { icon: "🎯", title: "Zero Commission", description: "Keep 100% of what you earn. No hidden charges" },
    { icon: "🛡️", title: "Insurance Coverage", description: "Comprehensive insurance coverage for peace of mind" },
    { icon: "📱", title: "Easy App", description: "User-friendly driver app with real-time tracking" }
  ];

  const requirements = [
    "Valid Commercial Driver's License",
    "Clean Driving Record",
    "Vehicle not older than 5 years",
    "Smartphone with Internet Connection",
    "Background Verification",
    "Vehicle Insurance"
  ];

  return (
    <div className="drive-with-us">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Drive & Earn
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="highlight"
            >
              With Malama
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Join our team of professional drivers and start earning while making a difference in your community.
          </motion.p>
          <motion.div 
            className="earnings-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <span className="amount">₹45,000</span>
            <span className="period">per month</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="signup-form"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="form-card">
            <h2>Start Earning Today</h2>
            <p>Fill out the form below and we'll contact you within 24 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="city" 
                  placeholder="City" 
                  value={formData.city}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <select 
                  name="vehicleType" 
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div className="form-group">
                <select 
                  name="experience" 
                  value={formData.experience}
                  onChange={handleInputChange}
                >
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3+">3+ years</option>
                </select>
              </div>
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Drive With Us?</h2>
          <p>Join thousands of drivers who trust Malama</p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <motion.div 
          className="requirements-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="requirements-text">
            <h2>Requirements</h2>
            <ul className="requirements-list">
              {requirements.map((req, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {req}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div 
            className="requirements-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/img/driver-requirements.jpg" alt="Driver Requirements" />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h2>Ready to Start?</h2>
          <p>Join our team of professional drivers today</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('.signup-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default DriveWithUs; 