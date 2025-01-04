import React from 'react';
import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import '../../styles/components/WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-container">
                <div className="welcome-image-container">
                    <img src="/images/customer.jpg" alt="Happy Customer" className="welcome-image" />
                    <div className="icon-circle">
                        <div className="icon-inner">
                            <FaMapMarkedAlt className="taxi-icon" />
                        </div>
                    </div>
                </div>

                <div className="welcome-content">
                    <span className="welcome-label">WELCOME TO OUR COMPANY</span>
                    <h2>We Provide Trusted<br />Cab Services</h2>
                    <p className="welcome-description">
                        We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.
                    </p>
                    <div className="welcome-quote">
                        <div className="quote-bar"></div>
                        <p>Our portfolio includes dozens of successfully completed projects of houses of different storeys,</p>
                    </div>
                    <div className="welcome-features">
                        <div className="feature-item">
                            <FaMapMarkedAlt />
                            <span>Online Booking</span>
                        </div>
                        <div className="feature-item">
                            <FaClock />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                    <button className="read-more-btn">
                        Read More
                        <span className="btn-accent"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection; 