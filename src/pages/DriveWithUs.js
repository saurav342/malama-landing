import React from 'react';
import '../styles/pages/DriveWithUs.css';

const DriveWithUs = () => {
  return (
    <div className="drive-with-us">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Earn. Connect.<br />Contribute to<br />Society.</h1>
          <p>Join our team of professional drivers and start earning while making a difference in your community.</p>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <img src="/images/app-store.png" alt="Download on App Store" />
            </a>
            <a href="#" className="app-button">
              <img src="/images/play-store.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        <div className="signup-form">
          <div className="form-card">
            <h2>Sign Up to Drive</h2>
            <p>Start earning money and help people reach their destinations.</p>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="City" />
              <button type="submit" className="submit-btn">Apply Now</button>
            </form>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Sign Up in Just 3 Steps</h3>
            <p>Submit your details and we'll contact you as soon as we can.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Get a Driver</h3>
            <p>Complete verification and start accepting ride requests.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Track your Driver</h3>
            <p>Track your earnings and manage your schedule easily.</p>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <h3>Be time savvy</h3>
            <p>Choose your own hours and maximize your earnings.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About CarrGo</h2>
            <p>We're committed to providing the best experience for our drivers and passengers. Join our growing community of professional drivers and be part of something bigger.</p>
            <ul className="features">
              <li>Flexible working hours</li>
              <li>Competitive earnings</li>
              <li>Professional support</li>
              <li>Regular incentives</li>
            </ul>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="about-image">
            <img src="/images/drivers-team.jpg" alt="Our Drivers Team" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-content">
          <h2>Trusted Cab Services<br />in the World</h2>
          <div className="services-grid">
            <div className="service-image">
              <img src="/images/yellow-cab.jpg" alt="Yellow Cab" />
            </div>
            <div className="service-features">
              <ul>
                <li>24/7 Support</li>
                <li>Professional Drivers</li>
                <li>Flexible Hours</li>
              </ul>
              <button className="discover-btn">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section">
        <div className="app-content">
          <h2>Download CarrGo</h2>
          <p>Download the CarrGo mobile application</p>
          <div className="app-preview">
            <img src="/images/app-preview.png" alt="Mobile App Preview" />
          </div>
          <div className="download-buttons">
            <a href="#" className="store-button">
              <img src="/images/app-store.png" alt="Download on App Store" />
            </a>
            <a href="#" className="store-button">
              <img src="/images/play-store.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriveWithUs; 