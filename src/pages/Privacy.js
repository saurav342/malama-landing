import React from 'react';
import '../styles/pages/Privacy.css';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <header className="privacy-header">
                <h1>Privacy Policy</h1>
            </header>

            <div className="privacy-content">
                <div className="privacy-intro">
                    <p>
                        The terms "We"/"Us"/"Our"/"Company" collectively refer to Malama Cabs (Saga15 Internet Pvt Ltd.) & "You"/"Your"/"Yourself" refer to the users of our services. "Services" refers to any services or facilities offered by Malama Cabs (Saga15 Internet Pvt Ltd.)
                    </p>
                </div>

                <section className="privacy-section">
                    <h2>1. Legal Framework</h2>
                    <p>This Privacy Policy is an electronic record under the Information Technology Act, 2000, including associated rules and amendments. It does not require a physical, electronic, or digital signature.</p>
                </section>

                <section className="privacy-section">
                    <h2>2. Binding Nature</h2>
                    <p>This Privacy Policy is a legally binding agreement between You and the Company.</p>
                    <p>By using the Company's Mobile App or Website, or by electronically accepting these terms (e.g., during signup), You agree to this Privacy Policy.</p>
                    <p>The term "Mobile App" includes all software versions designed for specific users (including drivers) and owned, managed, or operated by the Company or its affiliates.</p>
                </section>

                <section className="privacy-section">
                    <h2>3. Collection of Information</h2>
                    <p>To access certain services, You may be required to provide the following information:</p>
                    <h3>Basic Information:</h3>
                    <p>Name, mobile number, email address, gender, date of birth, home/work address, geo-location, occupation, interests, and payment details (e.g., credit/debit card or bank account).</p>
                    <h3>Driver-Specific Information:</h3>
                    <p>Government-issued identity documents (e.g., driving license, PAN, Aadhaar), and details of secondary contacts or references.</p>
                    <p>We may also collect Usage Information automatically, such as browser type, referral URLs, and interaction data within the Mobile App or Website.</p>
                </section>

                <section className="privacy-section">
                    <h2>4. Purpose of Information Collection</h2>
                    <p>Your information is used for the following purposes:</p>
                    <ul>
                        <li>To provide, maintain, and improve our services, including processing payments and developing new features.</li>
                        <li>To communicate with You regarding services, promotions, and advertisements.</li>
                        <li>To analyze performance, fix errors, and enhance user experience.</li>
                        <li>To process voice, image, or video inputs (if applicable) for service delivery and improvement.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>5. Information Sharing</h2>
                    <p>We may share Your Personal Information with third parties in the following cases:</p>
                    <ul>
                        <li><strong>Service Facilitation:</strong> To third-party providers for functions like email delivery, payment processing, data analysis, or customer support.</li>
                        <li><strong>Legal Requirements:</strong> When required by law, court orders, or government authorities for identity verification, crime prevention, or compliance with regulations.</li>
                        <li><strong>Group Companies:</strong> Within Our group companies for data processing, provided they adhere to this Privacy Policy and maintain confidentiality.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>6. Information Security</h2>
                    <p>We implement stringent security measures to protect Your data, including:</p>
                    <ul>
                        <li>Encryption, firewalls, and restricted access to databases.</li>
                        <li>Regular reviews of data storage and processing practices.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access and update Your personal information.</li>
                        <li>Opt-out of promotional communications.</li>
                        <li>Withdraw consent for data collection, subject to the limitations of service delivery.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>8. Grievance Redressal</h2>
                    <p>Redressal Mechanism: Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed via email with digital signature to the company at support@malamacabs.com</p>
                </section>

                <section className="privacy-section">
                    <h2>9. Policy Updates</h2>
                    <p>We may update this Privacy Policy periodically. Continued use of Our services after updates signifies Your acceptance of the revised terms.</p>
                </section>
            </div>
        </div>
    );
};

export default Privacy; 