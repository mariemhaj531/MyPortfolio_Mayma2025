import React from "react";
import "../css/Portfolio.css";
import proj from '../assets/proj1.png';
import maymaBlog from "../assets/maymaBlog.png";
import mama from "../assets/mama.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="container mt-5">
        <h1 className="text-center">My Projects</h1>
        <div className="row mt-4">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              {/* Design image de telle façon cv pour width et height */}
              <img src={maymaBlog} alt="MaymaBlog" />
              <h3>MaymaBlog</h3>
              <p></p>
              <p>
                <strong>Technologies:</strong> ReactJS
              </p>
              <p>
                <strong>Tools:</strong> VSCode,GitHub,Figma,EmailJS
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              <img src={proj} alt="MaymaPortfolio" />
              <h3>MaymaPortfolio</h3>
              {/* <p> <strong>Mayma</strong> is a personal project, built from scratch, designed to showcase my skills, services, and projects as a developer.</p> */}
              <p>
                <strong>Technologies:</strong> ReactJs,Laravel,MySQL,JQuery
              </p>
              <p>
                <strong>Tools:</strong> VSCode,GitHub,ESLint
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              <img src={mama} alt="Mama" />
              <h3>Ma&Ma</h3>
              <p></p>
              <p>
                <strong>Technologies:</strong>ReactJs,Node.js,MongoDB
              </p>
              <p>
                <strong>Tools:</strong>VSCode,Figma,Postman
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Portfolio;
