import React from 'react';
import '../../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Book Your Taxi From<br />Anywhere Today!</h1>
          <p>We successfully cope with tasks of varying complexity, provide long term guarantees and regularly master</p>
          <button className="find-taxi-btn">Find A Taxi</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 