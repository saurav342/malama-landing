import React from 'react';
import '../../styles/components/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <span className="subtitle">LATEST SERVICES</span>
        <h2>Check Out</h2>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-image">
            <img src="/images/business-transfer.jpg" alt="Business Transfer" />
          </div>
          <h3>Business Transfer</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src="/images/online-booking.jpg" alt="Online Booking" />
          </div>
          <h3>Online Booking</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <img src="/images/city-transport.jpg" alt="City Transport" />
          </div>
          <h3>City Transport</h3>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default Features; 