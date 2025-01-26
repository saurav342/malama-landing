import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AppDownload from '../components/home/AppDownload';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import ComingSoonBanner from '../components/home/ComingSoonBanner';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* <ComingSoonBanner /> */}
      <Hero />
      <HowItWorks />
      {/* <Features /> */}
      <section className="rider-testimonials">
        <div className="container">
          <h2>What Our Riders Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Excellent service! Clean cars and professional drivers. My go-to choice for daily commute."</p>
              <div className="testimonial-author">
                <h4>Priya S.</h4>
                <span>Regular Customer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The app is super easy to use and the fare transparency is amazing. No surprises!"</p>
              <div className="testimonial-author">
                <h4>Rahul M.</h4>
                <span>Business Traveler</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      {/* <AppDownload /> */}
    </div>
  );
};

export default Home; 