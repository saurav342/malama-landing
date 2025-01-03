import React from 'react';
import { FaLeaf, FaHeadset, FaCalendarCheck, FaMapMarkedAlt, FaCreditCard } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="features-section">
            <h2>Our Features</h2>
            <div className="features-container">
                <div className="feature-item">
                    <FaLeaf size={40} color="#1a4b84" />
                    <h3>Eco-Friendly Vehicles</h3>
                    <p>Our fleet consists of the latest eco-friendly vehicles to ensure a sustainable future.</p>
                    <img src="/images/eco-car.jpg" alt="Eco-friendly vehicle" className="feature-image" />
                </div>
                <div className="feature-item">
                    <FaHeadset size={40} color="#1a4b84" />
                    <h3>24/7 Customer Support</h3>
                    <p>Our support team is available around the clock to assist you with any inquiries.</p>
                    <img src="/images/support.jpg" alt="Customer support" className="feature-image" />
                </div>
                <div className="feature-item">
                    <FaCalendarCheck size={40} color="#1a4b84" />
                    <h3>Easy Booking Process</h3>
                    <p>Book your ride in just a few clicks with our user-friendly booking system.</p>
                    <img src="/images/booking.jpg" alt="Booking process" className="feature-image" />
                </div>
                <div className="feature-item">
                    <FaMapMarkedAlt size={40} color="#1a4b84" />
                    <h3>Real-Time Tracking</h3>
                    <p>Track your ride in real-time and stay updated on your driver's location.</p>
                    <img src="/images/tracking.jpg" alt="Real-time tracking" className="feature-image" />
                </div>
                <div className="feature-item">
                    <FaCreditCard size={40} color="#1a4b84" />
                    <h3>Flexible Payment Options</h3>
                    <p>Choose from a variety of payment methods for your convenience.</p>
                    <img src="/images/payment.jpg" alt="Payment options" className="feature-image" />
                </div>
            </div>
        </section>
    );
};

export default Features; 