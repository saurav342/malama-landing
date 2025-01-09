import React from 'react';
import '../styles/pages/YourNextRide.css';
import HowItWorks from '../components/home/HowItWorks';

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
            {/* <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="/img/app-store.png" alt="Download on App Store" />
              </a>
              <a href="#" className="app-button">
                <img src="/img/google-play.png" alt="Get it on Google Play" />
              </a>
            </div> */}
          </div>
          <div className="hero-image">
            <img src="/img/x.png" alt="Malama App" />
          </div>
        </div>
      </section>

      {/* Why choose Malama */}
      <section className="driver-benefits">
        <div className="benefits-pattern"></div>
        <div className="benefits-header">
          <span className="subtitle">WHY CHOOSE US</span>
          <h2>Why choose Malama?</h2>
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
                <h3>Affordable Rates</h3>
                <p>Best-in-class pricing with no hidden charges or surge fees</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Safety First</h3>
                <p>Verified drivers, real-time tracking, and 24/7 support</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="benefits-center">
              <img src="/images/c3e.png" alt="Taxi" className="taxi-icon" />
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
                <h3>Quick Pickups</h3>
                <p>Large fleet ensures minimal waiting time for your ride</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <div className="icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <h3>Comfort Assured</h3>
                <p>Clean, air-conditioned cars with professional drivers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />


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
                  <img src="/img/google-play.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
            <div className="app-features-image">
              <img src="/img/appmap.png" alt="App features" />
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
    </div>
  );
};

export default YourNextRide; 