import React from 'react';
import '../styles/pages/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        {/* Contact Form Section */}
        <div className="form-section">
          <span className="subtitle">SEND US EMAIL</span>
          <h2>Feel free to write</h2>
          
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Enter Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" />
              <input type="tel" placeholder="Phone" />
            </div>
            <textarea placeholder="Message" rows="6"></textarea>
            <button type="submit" className="send-btn">SEND MESSAGE</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="info-section">
          <span className="subtitle">NEED ANY HELP?</span>
          <h2>Get in touch with us</h2>
          
          <p className="info-description">
            Lorem ipsum is simply free text available dolor sit amet consectetur 
            notted adipisicing elit sed do eiusmod tempor incididunt simply 
            dolore magna.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-box">
                <img src="/icons/phone.svg" alt="Phone" />
              </div>
              <div className="item-content">
                <h3>Have any question?</h3>
                <p>Free +92 (020)-9850</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <img src="/icons/email.svg" alt="Email" />
              </div>
              <div className="item-content">
                <h3>Write email</h3>
                <p>needhelp@company.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <img src="/icons/location.svg" alt="Location" />
              </div>
              <div className="item-content">
                <h3>Visit anytime</h3>
                <p>66 broklyn golden street. New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 