import React from 'react';
import '../../styles/components/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-text">
          <span className="welcome-text">WELCOME TO OUR COMPANY</span>
          <h2>We Provide The Best</h2>
          <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
          
          <div className="testimonials-features">
            <p>Our portfolio includes dozens of successfully completed projects of houses of different storeys.</p>
            <div className="feature-items">
              <div className="feature-item">
                <img src="/icons/booking.svg" alt="Online Booking" />
                <span>Online Booking</span>
              </div>
              <div className="feature-item">
                <img src="/icons/support.svg" alt="24/7 Support" />
                <span>24/7 Support</span>
              </div>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="testimonials-image">
          <img src="/images/customer-service.jpg" alt="Customer Service" />
          <div className="video-overlay">
            <button className="play-btn">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 