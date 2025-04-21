import React from "react";
import "../css/Portfolio.css";
// import proj1 from "../assets/proj1.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="container mt-5">
        <h1 className="text-center">My Projects</h1>
        <div className="row mt-4">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              {/* <img src="chemin/vers/image.jpg" alt="MaymaBlog" /> */}
              <h3>MaymaBlog</h3>
              <p></p>
              <p>
                <strong>Technologies:</strong> ReactJS
              </p>
              <p>
                <strong>Outils:</strong> VSCode,GitHub,Figma,EmailJS
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              {/* <img src={proj1} alt="MaymaBlog" /> */}
              <h3>MaymaPortfolio</h3>
              <p> <strong>Mayma</strong> is a personal project, built from scratch, designed to showcase my skills, services, and projects as a developer.</p>
              <p>
               <strong>Technologies:</strong> ReactJs,Laravel,MySQL,JQuery
              </p>
              <p>
                <strong>Outils:</strong> VSCode,GitHub,ESLint
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              {/* <img src="chemin/vers/image.jpg" alt="MaymaBlog" /> */}
              <h3>Ma&Ma</h3>
              <p></p>
              <p>
                <strong>Technologies:</strong>ReactJs,Node.js,MongoDB
              </p>
              <p>
                <strong>Outils:</strong>VSCode,Figma,Postman
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
