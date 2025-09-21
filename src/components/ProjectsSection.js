import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://link-to-project-three.com'
        }
    ];

    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsSection;