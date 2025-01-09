import React from 'react';
import '../../styles/components/DriverFAQ.css';

const DriverFAQ = () => {
  const driverFaqs = [
    {
      question: "How much can I earn?",
      answer: "Earnings vary based on hours worked and trips completed. On average, our drivers earn ₹35,000 - ₹45,000 per month plus incentives. During peak seasons and with bonuses, earnings can be significantly higher."
    },
    {
      question: "Do I need my own car?",
      answer: "You can drive with your own car or use one of our partner vehicles. We have flexible options to suit your needs, including daily and weekly rental plans with comprehensive insurance coverage."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are made weekly directly to your bank account. You can track your earnings in real-time through our driver app. We ensure timely payments and transparent fare calculations."
    },
    {
      question: "What support do you provide?",
      answer: "We offer comprehensive support including: 24/7 helpline, vehicle maintenance assistance, insurance coverage, regular training programs, and dedicated driver success managers to help you maximize your earnings."
    },
    {
      question: "What documents do I need?",
      answer: "Required documents include: Valid commercial driving license, vehicle registration (if using own vehicle), insurance documents, proof of identity, address proof, and background verification documents."
    },
    {
      question: "How long is the registration process?",
      answer: "The registration process typically takes 2-3 business days, including document verification and background checks. Our team will guide you through each step to ensure a smooth onboarding experience."
    }
  ];

  return (
    <section className="driver-faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about driving with Malama</p>
      </div>
      <div className="driver-faq-container">
        {driverFaqs.map((faq, index) => (
          <div key={index} className="driver-faq-item">
            <details>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DriverFAQ; 