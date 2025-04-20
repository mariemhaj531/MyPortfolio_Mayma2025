import React, { useState } from "react";
import perso from "../assets/perso.png";
import "../css/About.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about">
      <section className="about-section">
        <div className="about-content">
          <h2>
            About <span className="highlight">Me</span>
          </h2>
          <h3>
            I'm a <span>Web Developer</span>
          </h3>
          <p>
            I'm a passionate and creative Full-Stack Web Developer with a
            strong background in JavaScript, React, Node.js, and PHP.
          </p>
          <p>
            I enjoy building clean, responsive, and user-friendly applications.
            With a deep interest in problem-solving and continuous learning, I
            strive to deliver efficient and scalable web solutions.
          </p>

          {showMore && (
            <>
              <p>
                I also love working in teams, sharing knowledge, and learning
                from others. I've participated in multiple collaborative projects
                where we built modern web apps using best practices.
              </p>
              <p>
                In addition to my coding skills, I'm very organized, adaptable,
                and curious — always eager to explore new technologies and tools
                in the world of software development.
              </p>
            </>
          )}

          <button className="read-more" onClick={toggleContent}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
        <div className="about-image">
          <img src={perso} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default About;
