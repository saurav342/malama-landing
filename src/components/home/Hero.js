import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/Hero.css';

const statsData = [
  {
    icon: '/img/icon-vehicle.svg',
    number: '32002',
    label: 'SPECIAL VEHICLE'
  },
  {
    icon: '/img/icon-road.svg',
    number: '16008',
    label: 'ROAD TRIPS DONE'
  },
  {
    icon: '/img/icon-location.svg',
    number: '17068',
    label: 'PEOPLE DROPPED'
  }
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    statsData.forEach((stat, index) => {
      const target = parseInt(stat.number);
      const increment = target / 50; // Divide animation into 50 steps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Book Your Taxi From<br />Anywhere Today!</h1>
          <p>We successfully cope with tasks of varying complexity, provide long term guarantees and regularly master</p>
          {/* <button className="find-taxi-btn">Find A Taxi</button> */}
        </div>
      </div>
      
      <div className="hero-stats" ref={statsRef}>
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <div className="stat-info">
                <h3 className="stat-number">
                  {counters[index].toLocaleString()}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="app-store-wrapper">
          <div className="coming-soon-badge">Coming Soon</div>
          <a href="#" className="store-button disabled">
            <img src="/img/app-store.png" alt="Download on App Store" />
          </a>
          <a href="#" className="store-button disabled">
            <img src="/img/google-play.png" alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 