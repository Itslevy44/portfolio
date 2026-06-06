import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment gateway integration, user authentication, and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'HealthCare Dashboard',
      description: 'An intuitive dashboard for healthcare professionals to manage patient records and appointments securely.',
      tags: ['Vue', 'Express', 'PostgreSQL']
    },
    {
      title: 'Real Estate App',
      description: 'A property listing application featuring interactive maps, advanced search filters, and virtual tours.',
      tags: ['Next.js', 'Tailwind', 'Firebase']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Portfolio</div>
          <h2>Featured Works</h2>
          <p>Explore some of the recent projects I've built, showcasing my expertise in developing scalable web applications.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href="#" className="project-link">View Details &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
