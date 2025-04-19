import React from "react";
import "../css/Services.css";
import ai from '../assets/ai.png'
import design from '../assets/design.png'
import web from '../assets/web.png'
const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h1 className="text-center mb-5">My <span>Services</span></h1>
        <div className="row">
          <div className="col-md-4 text-center service-card">
            <div className="icon-wrapper mb-3">
              <img src={web} alt="" />
            </div>
            <h3>
              <a href="#">Web Development</a>
            </h3>
            <p>Building responsive and modern websites.</p>
          </div>

          <div className="col-md-4 text-center service-card">
            <div className="icon-wrapper mb-3">
              <img src={design} alt="" />
            </div>
            <h3>
              <a href="#">Web Design</a>
            </h3>
            <p>Crafting clean and user-friendly interfaces.</p>
          </div>

          <div className="col-md-4 text-center service-card">
            <div className="icon-wrapper mb-3">
              <img src={ai} alt="" />
            </div>
            <h3>
              <a href="#">Artificial Intelligence(AI)</a>
            </h3>
            <p>Integrating intelligent solutions using AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
