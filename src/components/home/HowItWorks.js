import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: "🚕",
      title: "BOOK IN JUST",
      subtitle: "2 TABS",
      description: "Book your ride with just two simple taps on your phone. Quick, easy, and hassle-free booking process.",
      bgColor: "#4CAF50"
    },
    {
      icon: "📍",
      title: "TRACK YOUR",
      subtitle: "DRIVER",
      description: "Track your driver in real-time and know exactly when they'll arrive at your location.",
      bgColor: "#FFFFFF"
    },
    {
      icon: "✨",
      title: "PICK & ARRIVE",
      subtitle: "SAFELY",
      description: "Get picked up and reach your destination safely with our professional drivers.",
      bgColor: "#F5F5F5"
    }
  ];

  return (
    <section className="how-it-works">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="title-tag">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            ⚡
          </motion.span>
          ORDER TAXI ONLINE
        </div>
        <h2>How It Works</h2>
      </motion.div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            style={{ backgroundColor: step.bgColor }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="step-icon"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
            >
              {step.icon}
            </motion.div>
            <div className="step-content">
              <h3>
                {step.title}<br />
                <span className="subtitle">{step.subtitle}</span>
              </h3>
              <p>{step.description}</p>
            </div>
            <div className="step-number">{index + 1}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 