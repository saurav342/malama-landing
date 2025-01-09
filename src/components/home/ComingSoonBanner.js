import React from 'react';
import '../../styles/components/ComingSoonBanner.css';

const ComingSoonBanner = () => {
  return (
    <div className="coming-soon-banner">
      <div className="banner-content">
        <div className="thumbs-up">👍</div>
        <h2>WE'RE ALMOST</h2>
        <h1>Ready to Launch!</h1>
        <p>Our app is on its way and will be live very soon.</p>
        <p className="phone-number">
          In the meantime, you can book cabs through phone or WhatsApp at{' '}
          <span className="animated-number">+91 79756 12340</span>
        </p>
        <p>Stay tuned for updates!</p>
      </div>
    </div>
  );
};

export default ComingSoonBanner; 