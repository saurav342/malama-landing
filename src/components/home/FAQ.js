import React, { useState } from 'react';
import '../../styles/components/FAQ.css';

const faqData = [
  {
    id: 1,
    icon: '🚗',
    question: 'How do I book a taxi?',
    answer: 'Booking a taxi is simple! Open our app, enter your pickup location and destination, choose your preferred vehicle type, and confirm your booking. You can track your driver in real-time.',
    color: '#E8F5E9'
  },
  {
    id: 2,
    icon: '💳',
    question: 'What payment methods are accepted?',
    answer: 'We accept multiple payment methods including credit/debit cards, digital wallets, and cash. All online payments are secured with industry-standard encryption.',
    color: '#F3E5F5'
  },
  {
    id: 3,
    icon: '🌟',
    question: 'Are your drivers verified?',
    answer: 'Yes, all our drivers undergo thorough background checks, vehicle inspections, and training programs. We prioritize your safety and comfort.',
    color: '#E3F2FD'
  },
  {
    id: 4,
    icon: '⏰',
    question: 'How far in advance should I book?',
    answer: 'While immediate bookings are available, we recommend booking 2-3 hours in advance for guaranteed availability, especially during peak hours.',
    color: '#FFF3E0'
  },
  {
    id: 5,
    icon: '📍',
    question: 'Do you operate in all areas?',
    answer: 'We operate in most major cities and surrounding areas. Check our app for specific coverage details in your location.',
    color: '#E0F2F1'
  },
  {
    id: 6,
    icon: '💰',
    question: 'How is the fare calculated?',
    answer: 'Fares are calculated based on distance, time, vehicle type, and current demand. You will see the exact fare before confirming your booking.',
    color: '#FBE9E7'
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="subtitle">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about our taxi service</p>
        </div>

        <div className="faq-grid">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
              style={{ '--hover-color': faq.color }}
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="faq-icon">
                <span>{faq.icon}</span>
              </div>
              <div className="faq-content">
                <h3>{faq.question}</h3>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
              <div className="faq-toggle">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="toggle-icon"
                >
                  <path 
                    d="M12 8L12 16" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M16 12L8 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-line"></div>
          <div className="pattern-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;