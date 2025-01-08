import React, { useState } from 'react';
import '../../styles/components/Testimonials.css';

const testimonialData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur cing elit nisi montes dignissim necylt orcid velitnemup nam timely.",
    name: "Rash Justin",
    image: "/img/p1.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur cing elit nisi montes dignissim necylt orcid velitnemup nam timely.",
    name: "Stefanie Rashford",
    image: "/img/p2.jpg",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur cing elit nisi montes dignissim necylt orcid velitnemup nam timely.",
    name: "Grace Rashford",
    image: "/img/p3.jpg",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="subtitle">TESTIMONIALS</span>
          <h2>Our Customer Say</h2>
        </div>
        
        <div className="testimonials-slider">
          <button className="slider-arrow prev" onClick={prevSlide}>&lt;</button>
          <div className="testimonials-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">&#8221;</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="author-image"
                  />
                  <h3 className="author-name">{testimonial.name}</h3>
                  <p className="author-title">Customer</p>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-arrow next" onClick={nextSlide}>&gt;</button>
        </div>

        <div className="testimonials-dots">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 