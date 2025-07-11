// import React from "react";
import "../css/Services.css";
import ai from '../assets/ai.png';
import design from '../assets/design.png';
import web from '../assets/web.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("Web Development"),
      description: t("Building responsive and modern websites."),
      icon: web,
    },
    {
      title: t("Web Design"),
      description: t("Crafting clean and user-friendly interfaces."),
      icon: design,
    },
    {
      title: t("Artificial Intelligence (AI)"),
      description: t("Integrating intelligent solutions using AI."),
      icon: ai,
    },
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <h1 className="text-center mb-5">
          {t("My")} <span>{t("Services")}</span>
        </h1>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4 px-3 mb-4" key={index}>
              <div className="text-center service-card">
                <div className="icon-wrapper mb-3">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>
                  <a href="#">{service.title}</a>
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

