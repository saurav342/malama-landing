import React from 'react';
import '../../styles/components/FAQ.css';

const faqData = [
  {
    id: 1,
    icon: '💰',
    question: 'What are the charges for an airport ride?',
    answer: (
      <>
        • City to Airport: ₹699*<br/>
        • Airport to City: ₹799*<br/>
        <span className="faq-note">*Toll charges excluded. Price for &lt;45 KM distance. ₹25/KM above 45 KM.</span>
      </>
    )
  },
  {
    id: 2,
    icon: '🚗',
    question: 'What type of vehicles do you offer?',
    answer: (
      <>
        • Sedan with boot space for luggage<br/>
        • Eco-friendly EV cabs<br/>
        • Clean & hygienic cars
      </>
    )
  },
  {
    id: 3,
    icon: '⏰',
    question: 'How far in advance should I book my ride?',
    answer: '• Book your ride at least 4 hours in advance.'
  },
  {
    id: 4,
    icon: '📱',
    question: 'How can I book a cab?',
    answer: '• You can book via WhatsApp, Call, or SMS at +91 7975612340.'
  },
  {
    id: 5,
    icon: '📲',
    question: 'Is there an app for booking?',
    answer: '• Yes! You can book via our app, available on iOS & Android.'
  }
];

const FAQ = () => {
  return (
    <section className="malama-faq">
      <div className="malama-faq__container">
        <div className="malama-faq__header">
          <h2 className="malama-faq__title">Frequently Asked Questions</h2>
        </div>
        
        <div className="malama-faq__grid">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="faq-card"
            >
              <div className="faq-card__content">
                <h3 className="faq-card__question">
                  <span className="faq-card__icon">{faq.icon}</span>
                  {faq.question}
                </h3>
                <div className="faq-card__answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;