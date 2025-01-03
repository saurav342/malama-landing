import { motion } from 'framer-motion';
import '../styles/pages/About.css';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <section className="about-hero">
        <div className="container">
          <h1>About Malama EV Cabs</h1>
          <p>Leading the green revolution in Bengaluru's transportation</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To provide sustainable, comfortable, and reliable transportation while reducing carbon emissions in Bengaluru.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Electric Vehicles</p>
            </div>
            <div className="stat-card">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Tons CO2 Saved</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {/* Add team member components */}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 