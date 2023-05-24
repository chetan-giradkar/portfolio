import React from 'react';
import { Link } from 'react-scroll';
import '../styles/HeroSection.css';
import '../styles/dark_theme/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate software engineer.</p>
        <Link to="about" smooth={true} duration={500}>
          <button className="cta-button">Learn More</button>
        </Link>
      </div>
      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
