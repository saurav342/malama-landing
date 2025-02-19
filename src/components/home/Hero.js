import React from 'react';
import '../../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse"></span>
            Now in Bangalore
          </div>
          <h1>
            Economical & Green
            <span>Airport Rides</span>
          </h1>
          
          <div className="hero-features">
            <div className="feature">
              <div className="feature-content">
                <h3>Sedan with Boot Space</h3>
                <p>Comfortable ride with luggage space</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h3>EV - Eco-friendly Ride</h3>
                <p>Zero emissions, clean energy</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <h3>Clean & Hygienic Car</h3>
                <p>Sanitized after every ride</p>
              </div>
            </div>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="card-content">
                <h3>City to Airport</h3>
                <div className="price">₹699<span>*</span></div>
                <div className="flat-price-badge">Flat Price</div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="card-content">
                <h3>Airport to City</h3>
                <div className="price">₹799<span>*</span></div>
                <div className="flat-price-badge">Flat Price</div>
              </div>
            </div>
          </div>

          <div className="hero-note">
            <p>*Toll charges excluded. Book at least 4 hours in advance.</p>
            <p>Price valid for first 45 KM. ₹25/KM applies thereafter.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="car-wrapper">
            <img 
              src="/images/ev-car.png" 
              alt="Malama EV Cab" 
              className="car-image"
            />
            <div className="eco-badge">
              <span className="eco-icon">🌱</span>
              <span>100% Electric</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;