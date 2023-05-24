import React from 'react';
import ProjectCard from './ProjectCard';
import '../Styles/ProjectGrid.css';
import '../Styles/dark_theme/ProjectGrid.css';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam neque eu ante pulvinar, ac varius tortor fringilla.',
      image: 'project1.jpg',
      demoLink: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam neque eu ante pulvinar, ac varius tortor fringilla.',
      image: 'project2.jpg',
      demoLink: 'https://example.com/project2',
      sourceLink: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
