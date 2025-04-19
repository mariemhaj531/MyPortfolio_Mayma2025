import React ,{useEffect} from "react";
import $ from "jquery";
import "../css/HeroSection.css";
import persoImg from '../assets/perso.jpg';

const HeroSection = () => {
  useEffect(() => {
    // Animer le h1 lettre par lettre
    const h1 = $(".banner-content h1");
    const originalText = "Web Developer";
    h1.text(""); // Vide d'abord
    let index = 0;
  
    const interval = setInterval(() => {
      h1.text(originalText.substring(0, index + 1));
      index++;
  
      if (index >= originalText.length) {
        clearInterval(interval); // Fin animation
      }
    }, 100);
  
    // Gérer les hover sur les boutons
    $(".banner-buttons a").hover(
      function () {
        $(this).css("background-color", "#0ca8e6");
      },
      function () {
        $(this).css("background-color", "");
      }
    );
  
    // Nettoyage
    return () => {
      $(".banner-buttons a").off("mouseenter mouseleave");
    };
  }, []);
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
              <img src={persoImg} alt="Mariem Hajji" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
