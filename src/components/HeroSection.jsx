import React from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div id="particles-js"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="banner-content">
              <h3>
                Hello, I'm <span className="highlight">Mariem Hajji</span>
              </h3>
              <h1>
                <b className="fw-bold ">Web Developer</b>
              </h1>
              <p>
                I'm a passionate Web Developer with extensive experience in
                building full-stack applications using modern technologies.
              </p>
              <div className="banner-socials mb-3">
                <a
                  href="https://www.linkedin.com/in/mariemhajji

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/mariemhaj531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:mariemhajji099@gmail.com" className="social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <div className="banner-buttons">
                <a  href="/Mariem.pdf" className="btn custom-btn">
                  Download CV
                </a>
                <a href="/contact" className="btn custom-btn">
                Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <div className="banner-image">
              <img src="../assets/perso.jpeg" alt="Mariem Hajji" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
