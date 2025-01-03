import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Careers.css';

const Careers = () => {
  const [openings] = useState([
    {
      id: 1,
      title: 'EV Driver Partner',
      type: 'Full-time',
      location: 'Bengaluru',
      description: 'Join our team of professional EV drivers...'
    },
    // Add more job openings
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="careers-page"
    >
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Mission</h1>
          <p>Build a sustainable future with Malama EV Cabs</p>
        </div>
      </section>

      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {openings.map(job => (
              <motion.div
                key={job.id}
                className="job-card"
                whileHover={{ scale: 1.02 }}
              >
                <h3>{job.title}</h3>
                <p className="job-type">{job.type}</p>
                <p className="job-location">{job.location}</p>
                <p className="job-description">{job.description}</p>
                <button className="btn btn-primary">Apply Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers; 