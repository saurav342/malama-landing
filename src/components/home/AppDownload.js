import React from 'react';
import '../../styles/components/AppDownload.css';

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="app-download-bg">
        <div className="app-download-content">
          <div className="app-download-text">
            <h2>Download the Malama App Now </h2>
            <p>Book a cab in seconds</p>
            <div className="app-store-buttons">
              <a href="#" className="store-button play-store">
                <img src="/img/google-play.png" alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-button app-store">
                <img src="/img/app-store.png" alt="Download on App Store" />
              </a>
            </div>
          </div>
          <div className="app-mockup">
            <div className="phone-mockup">
              <img src="/img/about.jpg" alt="App Screenshot" className="phone-img" />
              <div className="screen-content">
                <img src="/img/about2.jpg" alt="App Interface" className="screen-img" />
              </div>
            </div>
            <div className="floating-elements">
              <div className="taxi-icon"></div>
              <div className="location-pin"></div>
              <div className="route-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload; 