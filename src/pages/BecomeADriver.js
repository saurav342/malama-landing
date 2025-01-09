import React from 'react';
import '../styles/pages/BecomeADriver.css';
import DriverFAQ from '../components/driver/DriverFAQ';

const BecomeADriver = () => {
  const benefits = [
    {
      icon: '/img/wallet-icon.svg',
      title: 'High Earning Potentials',
      // description: 'Earn competitive rates with bonuses and incentives'
    },
    {
      icon: '/img/payment-icon.svg',
      title: 'Weekly Payments',
      // description: 'Get your earnings transferred every week, hassle-free'
    },
    {
      icon: '/img/manager-icon.svg',
      title: 'Dedicated Managers',
      // description: '24/7 support from our experienced team'
    },
    {
      icon: '/img/ev-icon.svg',
      title: 'EV Cars Available',
      // description: 'Access to our fleet of electric vehicles'
    },
    {
      icon: '/img/incentive-icon.svg',
      title: 'Attractive Incentives',
      // description: 'Regular bonuses and performance rewards'
    },
    {
      icon: '/img/id-icon.svg',
      title: 'Personal ID',
      // description: 'Professional identity and recognition'
    }
  ];

  const requirements = [
    {
      title: 'Valid License',
      detail: 'Commercial Driving License with minimum 2 years experience'
    },
    {
      title: 'Clean Record',
      detail: 'No major traffic violations or accidents in the past 3 years'
    },
    {
      title: 'Smart Device',
      detail: 'Android/iOS smartphone with active internet connection'
    },
    {
      title: 'Documentation',
      detail: 'Valid vehicle registration & insurance (if using own vehicle)'
    },
    {
      title: 'Verification',
      detail: 'Must pass background check and drug screening'
    }
  ];

  return (
    <div className="driver-page">
      {/* Hero Section */}
      <section className="driver-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Drive With Malama</h1>
            <p>Join Bangalore's fastest growing taxi service. Earn more, work flexible hours, and be your own boss.</p>
            {/* <form className="signup-form">
              <input type="tel" placeholder="Enter your mobile number" />
              <button type="submit">Sign Up Now</button>
            </form> */}
          </div>
          <div className="hero-image">
            <img src="/images/expresst.jpeg" alt="Become a driver" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="driver-benefits">
        <div className="benefits-pattern"></div>
        <div className="benefits-header">
            <span className="subtitle">MAIN FEATURES</span>
            <h2>Our Benefits</h2>
          </div>
        <div className="container">
         
          <div className="benefits-layout">
            {/* Left Benefits */}
            <div className="benefits-side left-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Fixed Price</h3>
                <p>Transparent pricing with no hidden charges</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Safe Guarantee</h3>
                <p>24/7 support and insurance coverage</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="benefits-center">
              <img src="/img/icon-car-2.png" alt="Taxi" className="taxi-icon" />
            </div>

            {/* Right Benefits */}
            <div className="benefits-side right-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Fast Pickups</h3>
                <p>Quick response and minimal waiting time</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Quick Ride</h3>
                <p>Efficient route optimization system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="how-it-works">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Sign Up</h3>
                <p>Fill in your details and submit required documents</p>
              </div>
              <div className="progress-line"></div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Get Verified</h3>
                <p>Complete background verification process</p>
              </div>
              <div className="progress-line"></div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Complete Training</h3>
                <p>Attend our comprehensive training program</p>
              </div>
              <div className="progress-line"></div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Start Earning</h3>
                <p>Begin accepting rides and earning money</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>Driver Requirements</h2>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index} className="requirement-item">
                    <span className="requirement-number">{index + 1}</span>
                    <div className="requirement-details">
                      <h3>{req.title}</h3>
                      <p>{req.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="requirements-image">
              <img src="/img/requirements.jpg" alt="Driver requirements" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <DriverFAQ />

      {/* CTA Section */}
      {/* <section className="driver-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Earning?</h2>
            <p>Join thousands of satisfied drivers who have chosen Malama</p>
            <button className="cta-button">Register Now</button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BecomeADriver; 