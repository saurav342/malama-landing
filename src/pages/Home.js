import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home; 