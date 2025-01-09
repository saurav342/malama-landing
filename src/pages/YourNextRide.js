import React from 'react';
import '../styles/pages/YourNextRide.css';

const YourNextRide = () => {
  const features = [
    {
      icon: '/img/icon-safety.svg',
      title: 'Safe & Secure',
      description: 'All our drivers are verified and vehicles are regularly sanitized'
    },
    {
      icon: '/img/icon-comfort.svg',
      title: 'Premium Comfort',
      description: 'Travel in clean, air-conditioned cars with experienced drivers'
    },
    {
      icon: '/img/icon-price.svg',
      title: 'Transparent Pricing',
      description: 'No surge pricing, no hidden charges. Pay only what you see'
    },
    {
      icon: '/img/icon-track.svg',
      title: 'Live Tracking',
      description: 'Track your ride in real-time and share your journey with loved ones'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Book Your Ride',
      description: 'Enter your pickup & drop location and choose your ride'
    },
    {
      number: '02',
      title: 'Get Picked Up',
      description: 'Your driver arrives at your location in a clean, sanitized car'
    },
    {
      number: '03',
      title: 'Enjoy the Journey',
      description: 'Relax and enjoy your comfortable ride to your destination'
    }
  ];

  return (
    <div className="rider-page">
      {/* Hero Section */}
      <section className="rider-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Next Ride,<br />Made Better</h1>
            <p>Experience the future of urban mobility with Malama. Safe, reliable, and comfortable rides at your fingertips.</p>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="/img/app-store.png" alt="Download on App Store" />
              </a>
              <a href="#" className="app-button">
                <img src="/img/play-store.png" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/rider-app.png" alt="Malama App" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="rider-features">
        <div className="container">
          <h2>Why Choose Malama</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="app-features">
        <div className="container">
          <div className="app-features-content">
            <div className="app-features-text">
              <h2>Smart Features for a Better Ride</h2>
              <ul className="features-list">
                <li>Schedule rides in advance</li>
                <li>Multiple payment options</li>
                <li>24/7 customer support</li>
                <li>Emergency SOS button</li>
                <li>Rate and review your ride</li>
                <li>Save favorite locations</li>
              </ul>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="/img/app-store.png" alt="Download on App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="/img/play-store.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
            <div className="app-features-image">
              <img src="/img/app-features.png" alt="App features" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rider-testimonials">
        <div className="container">
          <h2>What Our Riders Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Excellent service! Clean cars and professional drivers. My go-to choice for daily commute."</p>
              <div className="testimonial-author">
                <h4>Priya S.</h4>
                <span>Regular Customer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The app is super easy to use and the fare transparency is amazing. No surprises!"</p>
              <div className="testimonial-author">
                <h4>Rahul M.</h4>
                <span>Business Traveler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rider-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Next Ride?</h2>
            <p>Download the app and experience the difference</p>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="/img/app-store.png" alt="Download on App Store" />
              </a>
              <a href="#" className="app-button">
                <img src="/img/play-store.png" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YourNextRide; 