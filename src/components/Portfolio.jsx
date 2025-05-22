import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Portfolio.css";
import proj from "../assets/proj.png";
import mayma from "../assets/mayma.png";
import mama from "../assets/mama.jpg";
import healthCoaching from "../assets/healthCoaching.png";
const Portfolio = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
     responsive: [
      {
         breakpoint: 992,
         settings: {
          slidesToShow: 2,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
         },
       },
     ],
   };

  const projects = [
    {
      img: mama,
      title: "Ma&Ma",
      tech:"ReactJS,Node.js,MongoDB",
      tools:"VSCode,Figma,Postman",
    },
     {
      img: healthCoaching,
      title: "Health Coaching",
      tech:"Hml,css,Bootstrap",
      tools:"VSCode,GitHub,ESLint",
    },
    {
      img: proj,
      title: "MaymaPortfolio",
      tech:"ReactJS,Laravel,MySQL,JQuery",
      tools:"VSCode,GitHub,ESLint",
    },
     {
      img: mayma,
      title: "MaymaBlog",
      tech:"ReactJS,MONGODB,Node.js",
      tools:"VSCode,GitHub,Figma,EmailJS",
    }
  ];

  return (
    <div className="portfolio">
      <section className="container mt-5">
        <h1 className="text-center">My Projects</h1>
        <Slider  {...settings} className="mt-4">
          {projects.map((project, index) => (
            <div className="card-project text-center" key={index}>
              <img src={project.img} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <div className="tech-tools">
              <p><strong>Technologies:</strong> {project.tech}</p>
              <p><strong>Tools:</strong> {project.tools}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Portfolio;
