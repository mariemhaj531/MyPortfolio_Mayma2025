import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Skills.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsData = [
    {
      category: "Front-end",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"]
    },
    {
      category: "Back-end",
      items: ["Node.js", "Express", "PHP", "Laravel", "Python"]
    },
    {
      category: "Architecture / DevOps",
      items: ["REST API", "MVC", "Git", "Docker", "CI/CD", "Linux"]
    },
    {
      category: "Base de données",
      items: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      category: "Autres compétences",
      items: ["Méthode Agile", "Scrum", "Communication", "Travail en équipe", "Gestion du temps"]
    }
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Voici un aperçu de mes compétences techniques et professionnelles :</p>
      
      <div className="skills-grid">
        {skillsData.map((module, index) => (
          <div className="skills-card" key={index} data-aos="fade-up">
            <h3>{module.category}</h3>
            <ul>
              {module.items.map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
