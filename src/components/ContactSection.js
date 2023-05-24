import React from 'react';
import ContactForm from './ContactForm';
import MapSection from './MapSection';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <ContactForm />
        <MapSection />
      </div>
    </section>
  );
};

export default ContactSection;
