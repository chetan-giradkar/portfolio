import React from 'react';
import '../styles/dark_theme/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={project.image} alt={project.title} />
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a className="demo-link" href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a className="source-link" href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
