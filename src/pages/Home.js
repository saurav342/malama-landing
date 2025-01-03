import React from 'react';
import Testimonials from '../components/home/Testimonials';
import Features from '../components/home/Features';
import '../styles/pages/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1>Drive the Future with Electric Mobility</h1>
                    <p>Experience sustainable, comfortable, and premium transportation</p>
                    <img src="/images/ev-hero.jpg" alt="Electric Vehicle Fleet" className="hero-image" />
                </div>
            </header>
            
            <section className="about-section">
                <div className="about-content">
                    <img src="/images/about-ev.jpg" alt="Our EV Fleet" className="about-image" />
                    <div className="about-text">
                        <h2>Leading the Electric Revolution</h2>
                        <p>We are committed to providing eco-friendly transportation solutions with our state-of-the-art electric vehicle fleet.</p>
                        <p>Our mission is to make sustainable transportation accessible while reducing carbon emissions in our cities.</p>
                    </div>
                </div>
            </section>

            <Features />
            
            <section className="services-section">
                <h2>Our Premium Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src="/images/airport-transfer.jpg" alt="Airport Transfers" />
                        <h3>Airport Transfers</h3>
                    </div>
                    <div className="service-card">
                        <img src="/images/corporate.jpg" alt="Corporate Travel" />
                        <h3>Corporate Travel</h3>
                    </div>
                    <div className="service-card">
                        <img src="/images/city-tour.jpg" alt="City Tours" />
                        <h3>City Tours</h3>
                    </div>
                    <div className="service-card">
                        <img src="/images/events.jpg" alt="Event Transportation" />
                        <h3>Event Transportation</h3>
                    </div>
                </div>
            </section>

            <Testimonials />
            
            <section className="contact-section">
                <h2>Ready to Go Electric?</h2>
                <div className="contact-content">
                    <img src="/images/contact-support.jpg" alt="24/7 Support" className="contact-image" />
                    <div className="contact-info">
                        <p>Book your eco-friendly ride today!</p>
                        <p>Email: rides@evcompany.com</p>
                        <p>Call: (123) 456-7890</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 