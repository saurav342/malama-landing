import React from 'react';
import '../styles/pages/BecomeADriver.css';

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
        <div className="container">
          <div className="benefits-header">
            <h1>Benefits of driving with us</h1>
            <p>
              As a driver with us, you'll enjoy flexible scheduling, competitive earnings, 
              and the support of a dedicated team that values your contribution. Whether 
              you're looking for full-time opportunities or part-time work, we provide 
              comprehensive training and state-of-the-art technology to help you succeed.
            </p>
          </div>
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
              <h2>Requirements</h2>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              {/* <button className="apply-btn">Apply Now</button> */}
            </div>
            <div className="requirements-image">
              <img src="/img/requirements.jpg" alt="Driver requirements" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <details>
                <summary>How much can I earn?</summary>
                <p>Earnings vary based on hours worked and trips completed. On average, our drivers earn ₹35,000 - ₹45,000 per month plus incentives.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Do I need my own car?</summary>
                <p>You can drive with your own car or use one of our partner vehicles. We have flexible options to suit your needs.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How do I get paid?</summary>
                <p>Payments are made weekly directly to your bank account. You can track your earnings in real-time through our driver app.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>What support do you provide?</summary>
                <p>We offer 24/7 support, insurance coverage, maintenance assistance, and regular training programs.</p>
              </details>
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