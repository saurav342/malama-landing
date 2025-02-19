import React from 'react';
import '../../styles/components/BookingCTA.css';

const BookingCTA = () => {
  return (
    <section className="booking-cta">
      <div className="cta-gradient-overlay"></div>
      <div className="cta-content">
        <div className="cta-left">
          <div className="section-header">
            <span className="badge">
              <span className="badge-dot"></span>
              Book Now
            </span>
            <h2>Ready for Your <br/><span>Eco-Friendly Ride?</span></h2>
            <p>Choose your preferred way to book</p>
          </div>

          <div className="booking-options">
            <a href="https://wa.me/917975612340" 
               className="booking-card whatsapp" 
               target="_blank" 
               rel="noopener noreferrer">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">
                <i className="button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </i>
                </div>
                <div className="card-text">
                  <h3>WhatsApp Booking</h3>
                  <p>+91 7975612340</p>
                  <span className="support-text">Quick response • 24/7 Support</span>
                </div>
                <span className="arrow-icon">→</span>
              </div>
            </a>

            <a href="tel:+917975612340" className="booking-card call">
              <div className="card-content">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="card-text">
                  <h3>Call Us</h3>
                  <p>+91 7975612340</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="cta-right">
          <div className="app-download">
            <div className="app-content">
              <div className="app-header">
                <h3>Get the Malama App</h3>
                <p>Book your rides instantly</p>
              </div>
              <div className="qr-container">
                <img src="/images/qr.png" alt="Get it on Google Play" width={200}/>
              </div>
              <p class="available-now">Available now on</p>

              <div className="store-buttons">
                <a href="https://play.google.com/store/apps/details?id=com.malamacabs.app" 
                   className="store-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <img src="/images/google-play.png" alt="Get it on Google Play" />
                </a>
                <a href="https://apps.apple.com/app/malama/id6740285748" 
                   className="store-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <img src="/images/app-store.png" alt="Download on the App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
