import React from 'react';
import persoImg from '../assets/perso.jpg';
import '../css/About.css'; 

const About = () => {
  return (
    <div className="about">
    <section className="about-section">
      <div className="about-content">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <h3>I'm a <span>Web Developer</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto
          eveniet odio rem sint minus repellat doloribus deserunt ea voluptas.
        </p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src={persoImg} alt="Profile" />
      </div>
    </section>
    </div>
  );
};

export default About;
