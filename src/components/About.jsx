import React from "react";
import perso from "../assets/perso.png";
import "../css/About.css";

const About = () => {
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
            <p> I enjoy
              building clean, responsive, and user-friendly applications. With a
              deep interest in problem-solving and continuous learning, I strive
              to deliver efficient and scalable web solutions.</p>
          <button className="read-more">Read More</button>
        </div>
        <div className="about-image">
          <img src={perso} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default About;
