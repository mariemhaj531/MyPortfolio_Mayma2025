import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Skills.css";

// Import des icônes
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaLaravel,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsData = [
    {
      category: "Front-end",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Back-end",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      category: "Architecture / DevOps",
      items: [
        { name: "REST API", icon: <SiRedux /> },
        { name: "MVC", icon: <SiRedux /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <SiRedux /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      {/* <p className="skills-subtitle">Voici un aperçu de mes compétences techniques et professionnelles </p> */}
      <p className="skills-subtitle"> Here is an overview of my technical and professional skills</p>
      <div className="skills-grid">
        {skillsData.map((module, index) => (
          <div className="skills-card" key={index} data-aos="fade-up">
            <h3>{module.category}</h3>
            <ul>
              {module.items.map((item, idx) => (
                <li key={idx}>
                  <span className="skill-icon">{item.icon}</span> {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
