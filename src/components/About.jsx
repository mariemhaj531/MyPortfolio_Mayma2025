import React, { useState } from "react";
import perso from "../assets/perso.png";
import "../css/About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about">
      <section className="about-section">
        <div className="about-content">
          <h2>
            {t("About")} <span className="highlight">{t("Me")}</span>
          </h2>
          <h3>
            {t("I'm a")} <span>{t("Web Developer")}</span>
          </h3>

          <p>
            {t("I'm a passionate and creative Full-Stack Web Developer with a strong background in JavaScript, React, Python, and PHP.")}
          </p>
          <p>
            {t("I enjoy building clean, responsive, and user-friendly applications.With a deep interest in problem-solving and continuous learning, I strive to deliver efficient and scalable web solutions.")}
          </p>

          {showMore && (
            <>
              <p>
                {t("I also love working in teams, sharing knowledge, and learning from others.I've participated in multiple collaborative projects where we built modern web apps using best practices.")}
              </p>
              <p>
                {t("In addition to my coding skills, I'm very organized, adaptable, and curious — always eager to explore new technologies and tools in the world of software development.")}
              </p>
            </>
          )}

          <button className="read-more" onClick={toggleContent}>
            {showMore ? t("Show Less") : t("Read More")}
          </button>
        </div>

        <div className="about-image">
          <img src={perso} alt={t("Profile picture")} />
        </div>
      </section>
    </div>
  );
};

export default About;
