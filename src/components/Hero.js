import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/projects/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched projects:', data); // Check if data is fetched successfully
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>Description: {project.description}</p>
            <p>Project Type: {project.project_type}</p>
            <p>Funding Goal: ${project.funding_goal}</p>
            <p>Current Funding: ${project.current_funding}</p>
            <p>Start Date: {project.start_date}</p>
            <p>End Date: {project.end_date}</p>
            <p>Creator: {project.creator}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
