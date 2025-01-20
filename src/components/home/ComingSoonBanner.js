import React from 'react';
import '../../styles/components/ComingSoonBanner.css';

const ComingSoonBanner = () => {
  return (
    // <div className="coming-soon-banner">
    //   <div className="banner-content">
    //     <div className="thumbs-up">👍</div>
    //     <h2>WE'RE ALMOST</h2>
    //     <h1>Ready to Launch!</h1>
    //     <p>Our app is on its way and will be live very soon.</p>
    //     <p className="phone-number">
    //       In the meantime, you can book cabs through phone or WhatsApp at{' '}
    //       <span className="animated-number">+91 79756 12340</span>
    //     </p>
    //     <p>Stay tuned for updates!</p>
    //   </div>
    // </div>
    <div className="coming-soon-banner">
    <div className="banner-content">
      <div className="thumbs-up">👍</div>
      <h2 className="main-heading">WE'RE LIVE ON THE</h2>
      <h1 className="highlight-heading">App Store!</h1>
      <p className="intro-text">
        Our app is now available on the <strong>App Store</strong>. Download it today and experience the future of electric cab services!
      </p>
      <div className="store-buttons">
        <a
          href="https://apps.apple.com/app/malama/id6740285748"
          target="_blank"
          rel="noopener noreferrer"
          className="app-store-button"
        >
          <img
            src="/img/app-store.png"
            alt="Download on the App Store"
            className="store-icon"
          />
        </a>
        {/* <div className="play-store-placeholder">
          <img
            src="/img/play-store.png"
            alt="Google Play Coming Soon"
            className="store-icon disabled"
          />
          <p className="coming-soon-text">Coming Soon</p>
        </div> */}
      </div>
      <p className="phone-number">
        Android user? Our app is coming soon to the <strong>Play Store</strong>. 
        Meanwhile, you can book cabs via phone or WhatsApp at{' '}
        <span className="animated-number">+91 79756 12340</span>.
      </p>
      <p className="stay-tuned">Stay tuned for updates!</p>
    </div>
  </div>
  );
};

export default ComingSoonBanner; 