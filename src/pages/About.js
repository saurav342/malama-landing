import React from 'react';
import '../styles/pages/About.css';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '100+', label: 'Professional Drivers' },
    { number: '24/7', label: 'Customer Support' },
    { number: '4.8', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: '/img/icon-safety.svg',
      title: 'Safety First',
      description: 'Your safety is our top priority. All our drivers are verified and vehicles regularly maintained.'
    },
    {
      icon: '/img/icon-reliability.svg',
      title: 'Reliability',
      description: 'Count on us for timely pickups and professional service, every single time.'
    },
    {
      icon: '/img/icon-comfort.svg',
      title: 'Comfort',
      description: 'Travel in clean, air-conditioned cars with experienced drivers.'
    },
    {
      icon: '/img/icon-transparency.svg',
      title: 'Transparency',
      description: 'Clear pricing, no hidden charges. Pay only for what you see.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Malama</h1>
          <p>Transforming urban mobility in Bangalore with reliable, safe, and comfortable taxi services.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in Bangalore, Malama was born from a simple vision: to provide reliable and comfortable transportation services that people can trust. We understand the challenges of urban mobility in our growing city and are committed to being part of the solution.</p>
              <p>Today, we're proud to serve thousands of customers, connecting them with professional drivers and comfortable rides across Bangalore. Our journey is driven by our commitment to safety, reliability, and customer satisfaction.</p>
            </div>
            <div className="story-image">
              <img src="/img/about-story.jpg" alt="Malama story" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <img src={value.icon} alt={value.title} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To revolutionize urban mobility in Bangalore by providing safe, reliable, and comfortable transportation services that enhance the daily lives of our customers.</p>
            <div className="mission-points">
              <div className="mission-point">
                <h3>Vision</h3>
                <p>To be the most trusted taxi service provider in Bangalore, known for excellence in service and customer satisfaction.</p>
              </div>
              <div className="mission-point">
                <h3>Promise</h3>
                <p>We promise to deliver consistent quality service, prioritize your safety, and ensure a comfortable journey every time you ride with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 