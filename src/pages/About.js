import React from 'react';
import '../styles/pages/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <span className="subtitle">WELCOME TO OUR COMPANY</span>
          <h1>Feel The Difference<br />And Relaxation!</h1>
          
          <p className="description">
            We successfully cope with tasks of varying complexity, provide long-term 
            guarantees and regularly master new technologies. Our portfolio includes 
            dozens of successfully completed projects of houses of different storeys, 
            with high-quality finishes and good repairs. Building houses is our 
            vocation We offer customized transportation solutions for businesses and 
            organizations of all sizes Our corporate
          </p>

          <div className="features-list">
            <div className="feature">
              <span className="check-icon">✓</span>
              <p>We successfully cope with tasks of varying complexity.</p>
            </div>
            <div className="feature">
              <span className="check-icon">✓</span>
              <p>Long-term guarantees and regularly</p>
            </div>
            <div className="feature">
              <span className="check-icon">✓</span>
              <p>Master new technologies.</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="phone-section">
              <h3>Call For Taxi</h3>
              <p className="phone">012 345 6789</p>
            </div>
            <div className="ceo-section">
              {/* <img src="/images/ceo.jpg" alt="CEO" className="ceo-image" />
              <div className="ceo-details">
                <h4>Thomas Walker</h4>
                <p>Founder - CEO</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="about-images">
          <div className="image-grid">
            <img src="/images/taxi-city.jpg" alt="Taxi in city" className="main-image" />
            <img src="/images/driver.jpg" alt="Professional driver" className="driver-image" />
            <img src="/images/taxi-street.jpg" alt="Taxi on street" className="street-image" />
            <div className="play-button">
              <button>▶</button>
            </div>
          </div>
          <div className="yellow-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default About; 