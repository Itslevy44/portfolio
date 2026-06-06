import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React / React Native', percentage: 90 },
        { name: 'JavaScript / TypeScript', percentage: 85 },
        { name: 'HTML / CSS', percentage: 95 },
        { name: 'Tailwind CSS', percentage: 88 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Django', percentage: 85 },
        { name: 'PHP / Laravel', percentage: 80 },
        { name: 'Node.js', percentage: 75 },
        { name: 'Database Design', percentage: 82 }
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Git / Version Control', percentage: 90 },
        { name: 'Logo Design', percentage: 85 },
        { name: 'UI/UX Design', percentage: 78 },
        { name: 'Project Management', percentage: 80 }
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
