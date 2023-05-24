import React from 'react';
import ProjectGrid from './ProjectGrid';
import '../styles/PortfolioSection.css';
import '../styles/dark_theme/PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <ProjectGrid />
    </section>
  );
};

export default PortfolioSection;
