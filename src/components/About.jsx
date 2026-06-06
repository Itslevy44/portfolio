import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section bg-dark-2">
      <div className="container">
        <div className="section-header">
          <div className="badge">About Me</div>
          <h2>Driven by Passion & Logic</h2>
          <p>
            I'm a dedicated software developer passionate about creating modern, efficient, and user-centric web experiences. I love solving complex problems with clean code and innovative design.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-card__val gradient-text">3+</h3>
            <p className="stat-card__label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__val gradient-text">20+</h3>
            <p className="stat-card__label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__val gradient-text">15+</h3>
            <p className="stat-card__label">Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__val gradient-text">100%</h3>
            <p className="stat-card__label">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
