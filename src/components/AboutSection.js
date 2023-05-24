import React from 'react';
import Timeline from './Timeline';
import '../styles/AboutSection.css';
import '../styles/dark_theme/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <Timeline />
    </section>
  );
};

export default AboutSection;
