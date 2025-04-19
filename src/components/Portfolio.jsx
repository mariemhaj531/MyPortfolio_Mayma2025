import React from "react";
import "../css/Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="container mt-5">
        <h1 className="text-center">My Projects</h1>
        <div className="row mt-4">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              <img src="chemin/vers/image.jpg" alt="MaymaBlog" />
              <h3>MaymaBlog</h3>
              <p>
                <strong>Technologies:</strong> React, Node.js, MongoDB
              </p>
              <p>
                <strong>Outils:</strong> VSCode, GitHub, Figma
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              <img src="chemin/vers/image.jpg" alt="MaymaBlog" />
              <h3>MaymaBlog</h3>
              <p>
                <strong>Technologies:</strong> React, Node.js, MongoDB
              </p>
              <p>
                <strong>Outils:</strong> VSCode, GitHub, Figma
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex">
            <div className="card-project text-center w-100">
              <img src="chemin/vers/image.jpg" alt="MaymaBlog" />
              <h3>MaymaBlog</h3>
              <p>
                <strong>Technologies:</strong> React, Node.js, MongoDB
              </p>
              <p>
                <strong>Outils:</strong> VSCode, GitHub, Figma
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
