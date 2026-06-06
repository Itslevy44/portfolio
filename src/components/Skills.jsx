import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'Vue.js', percentage: 80 },
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'PostgreSQL', percentage: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-dark-2">
      <div className="container">
        <div className="section-header">
          <div className="badge">Expertise</div>
          <h2>My Technical Skills</h2>
          <p>Continuous learning is my core philosophy. Here is a snapshot of my current technical proficiency.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skill-category card" key={idx}>
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
