import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AppDownload from '../components/home/AppDownload';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      {/* <Features /> */}
      <Testimonials />
      <FAQ />
      <AppDownload />
    </div>
  );
};

export default Home; 