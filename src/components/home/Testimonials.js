import React from 'react';
// import './Testimonials.css'; // Ensure you have a CSS file for styling

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                <div className="testimonial-item">
                    <p>"Great service! Highly recommend!"</p>
                    <h4>- Client Name</h4>
                </div>
                <div className="testimonial-item">
                    <p>"The drivers are professional and the cars are clean!"</p>
                    <h4>- Another Client</h4>
                </div>
                <div className="testimonial-item">
                    <p>"Booking was easy and the ride was smooth."</p>
                    <h4>- Satisfied Customer</h4>
                </div>
                <div className="testimonial-item">
                    <p>"Excellent customer support and timely service."</p>
                    <h4>- Happy Client</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 