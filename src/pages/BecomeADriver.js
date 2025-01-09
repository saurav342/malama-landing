import React from 'react';
import '../styles/pages/BecomeADriver.css';

const BecomeADriver = () => {
  const benefits = [
    {
      icon: '/img/icon-earnings.svg',
      title: 'Guaranteed Earnings',
      description: 'Earn up to ₹45,000 per month with additional incentives and bonuses'
    },
    {
      icon: '/img/icon-flexible.svg',
      title: 'Flexible Hours',
      description: 'Choose your own schedule. Work when you want, as much as you want'
    },
    {
      icon: '/img/icon-support.svg',
      title: '24/7 Support',
      description: 'Dedicated support team to help you with any issues or queries'
    },
    {
      icon: '/img/icon-training.svg',
      title: 'Professional Training',
      description: 'Comprehensive training program to help you succeed'
    }
  ];

  const requirements = [
    'Valid Commercial Driving License',
    'Minimum 2 years of driving experience',
    'Clean driving record',
    'Smartphone with internet connection',
    'Vehicle registration documents (if using own vehicle)',
    'Background verification clearance'
  ];

  return (
    <div className="driver-page">
      {/* Hero Section */}
      <section className="driver-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Drive With Malama</h1>
            <p>Join Bangalore's fastest growing taxi service. Earn more, work flexible hours, and be your own boss.</p>
            <form className="signup-form">
              <input type="tel" placeholder="Enter your mobile number" />
              <button type="submit">Sign Up Now</button>
            </form>
          </div>
          <div className="hero-image">
            <img src="/img/driver-hero.png" alt="Become a driver" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="driver-benefits">
        <div className="container">
          <h2>Why Drive With Us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Fill in your details and submit required documents</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Verified</h3>
              <p>Complete background verification process</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Complete Training</h3>
              <p>Attend our comprehensive training program</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Start Earning</h3>
              <p>Begin accepting rides and earning money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button className="apply-btn">Apply Now</button>
            </div>
            <div className="requirements-image">
              <img src="/img/requirements.jpg" alt="Driver requirements" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="driver-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much can I earn?</h3>
              <p>Earnings vary based on hours worked and trips completed. On average, our drivers earn ₹35,000 - ₹45,000 per month plus incentives.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need my own car?</h3>
              <p>You can drive with your own car or use one of our partner vehicles. We have flexible options to suit your needs.</p>
            </div>
            <div className="faq-item">
              <h3>How do I get paid?</h3>
              <p>Payments are made weekly directly to your bank account. You can track your earnings in real-time through our driver app.</p>
            </div>
            <div className="faq-item">
              <h3>What support do you provide?</h3>
              <p>We offer 24/7 support, insurance coverage, maintenance assistance, and regular training programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="driver-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Earning?</h2>
            <p>Join thousands of satisfied drivers who have chosen Malama</p>
            <button className="cta-button">Register Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeADriver; 