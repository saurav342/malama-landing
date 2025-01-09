import React from 'react';
import '../styles/pages/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="current">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          {/* Contact Form Section */}
          <div className="form-section">
            <span className="subtitle">SEND US EMAIL</span>
            <h2>Feel free to write</h2>
            
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
              </div>
              <textarea placeholder="Write a Message" rows="6"></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="info-section">
            <span className="subtitle">NEED ANY HELP?</span>
            <h2>Get in touch with us</h2>
            
            <p className="info-description">
              Lorem ipsum is simply free text available dolor sit amet consectetur 
              notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="item-content">
                  <h3>Have any question?</h3>
                  <p>Free +92 (020)-9850</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="item-content">
                  <h3>Write email</h3>
                  <p>needhelp@company.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt"></i>
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

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact; 