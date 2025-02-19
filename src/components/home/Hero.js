import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/Hero.css';

const Hero = () => {
  const benefits = [
    {
      icon: '🚗',
      title: 'Sedan with Boot Space',
      description: 'Comfortable ride with luggage space'
    },
    {
      icon: '⚡',
      title: 'EV - Eco-friendly Ride',
      description: 'Zero emissions, clean energy'
    },
    {
      icon: '🛡️',
      title: 'Clean & Hygienic Car',
      description: 'Sanitized after every ride'
    }
  ];

  return (
    <section className="hero">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse"></span>
            Now in Bangalore
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Economical & Green
            <span>Airport Rides</span>
          </motion.h1>
          
          <motion.div 
            className="benefits-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="benefits-row">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="benefit-item"
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-title">{benefit.title}</div>
                  <div className="benefit-description">{benefit.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="card-content">
                <h3>City to Airport</h3>
                <div className="price">₹699<span>*</span></div>
                <div className="flat-price-badge">Flat Price</div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="card-content">
                <h3>Airport to City</h3>
                <div className="price">₹799<span>*</span></div>
                <div className="flat-price-badge">Flat Price</div>
              </div>
            </div>
          </div>

          <div className="hero-note">
            <p>*Toll charges excluded. Book at least 4 hours in advance.</p>
            <p>Price valid for first 45 KM. ₹25/KM applies thereafter.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="car-wrapper">
            <img 
              src="/images/ev-car.png" 
              alt="Malama EV Cab" 
              className="car-image"
            />
            <div className="eco-badge">
              <span className="eco-icon">🌱</span>
              <span>100% Electric</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;