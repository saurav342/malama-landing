import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import '../styles/pages/Contact.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
});

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <p>+91 XXXXXXXXXX</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>contact@malamaevcabs.com</p>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-form">
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={(values, { setSubmitting }) => {
                  // Handle form submission
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <Field name="name" placeholder="Your Name" />
                      {errors.name && touched.name && <div className="error">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                      <Field name="email" type="email" placeholder="Your Email" />
                      {errors.email && touched.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <Field name="message" as="textarea" placeholder="Your Message" />
                      {errors.message && touched.message && <div className="error">{errors.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 