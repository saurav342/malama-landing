import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import AppDownload from '../components/home/AppDownload';
import HowItWorks from '../components/home/HowItWorks';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <AppDownload />
    </div>
  );
};

export default Home; 