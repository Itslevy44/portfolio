import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Available for new projects
          </div>
          <h1 className="hero__title">
            Hi, I'm <span className="text-red">Levy</span><br />
            Software Developer
          </h1>
          <p className="hero__desc">
            Empowering businesses with cutting-edge software solutions. From web & mobile apps to digital transformation.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-red">Let's Talk</a>
            <a href="#projects" className="btn btn-outline" style={{color: '#fff', borderColor: '#fff'}}>View Work</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src="/levy.jpg" alt="Levy Kiprotich" className="hero__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
