import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <motion.span 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR SERVICES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="animated-title"
        >
          <span className="text-wrapper">
            <span className="letters">Our Best Services For You</span>
          </span>
        </motion.h2>
      </div>

      <div className="features-grid">
        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="feature-image">
            <img src="/img/p1.jpg" alt="Business Transfer" />
          </div>
          <h3>Business Transfer</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="feature-image">
            <img src="/img/p2.jpg" alt="Online Booking" />
          </div>
          <h3>Online Booking</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="feature-image">
            <img src="/img/p3.jpg" alt="City Transport" />
          </div>
          <h3>City Transport</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 