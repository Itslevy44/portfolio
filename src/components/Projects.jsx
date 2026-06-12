import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Janalisu',
      description: 'A comprehensive web-based system developed for organizational management, featuring modern UI/UX design and robust backend architecture.',
      tags: ['JavaScript', 'PHP', 'MySQL'],
      link: 'https://janalisu.co.ke/',
      cta: 'View Live Site →'
    },
    {
      title: 'Bizpoa POS',
      description: 'Multi-tenant Point of Sale system with advanced inventory management, real-time analytics, and scalable architecture for growing businesses.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://bizpoa.co.ke/',
      cta: 'Explore System →'
    },
    {
      title: 'Offline Notes App',
      description: 'Cross-platform mobile application with offline-first architecture, seamless sync capabilities, and intuitive note-taking experience.',
      tags: ['React Native', 'Firebase'],
      link: '#',
      cta: 'Download APK'
    },
    {
      title: 'Eujim Job Portal',
      description: "Job portal connecting Eujim Academy graduates with potential employers",
      tags: ['React', 'MySQL', 'Django'],
      link: 'https://eujimsolutions.com/',
      cta: 'Explore System →'
    },
    {
      title: 'Faida Agriventure Limited',
      description: 'An ecommerce system for Faida Agriventure Limited that handles dairy farming operations and online course content.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://kilimofaidatv.com/',
      cta: 'Explore System →'
    },
    {
      title: 'Ukilima Bora Farm Management System',
      description: 'A farm management system to help farmers manage inventory, crops, and livestock within their farms.',
      tags: ['Laravel', 'MySQL', 'React'],
      link: 'https://ukulimabora.co.ke/',
      cta: 'Explore System →'
    },
    {
      title: 'Apex Pay',
      description: 'A fintech platform offering payment APIs and integrations for developers.',
      tags: ['Laravel', 'MySQL', 'React'],
      link: 'https://apexpay.com/',
      cta: 'Explore System →'
    },
    {
      title: 'Farmken Limited',
      description: 'An ecommerce site for Farmken Limited to sell certified potato seeds directly to farmers.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://farmkenseeds.com/',
      cta: 'Explore System →'
    },
    {
      title: 'StudyPal',
      description: 'Kenya\'s #1 student study resource platform. Access thousands of past exam papers from top universities, browse freely, and purchase securely via M-Pesa.',
      tags: ['Next.js', 'Telegram', 'M-Pesa'],
      link: 'https://studypal-rust.vercel.app/',
      cta: 'View Live Site →'
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
              <a href={project.link || '#'} className="project-link" target="_blank" rel="noreferrer">{project.cta || 'View Details →'}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
