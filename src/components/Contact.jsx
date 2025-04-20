import React from "react"; 
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="container py-5">
      {/* Titre principal */}
      <h2 className="contact-title text-center mb-5">Contact <span>Me</span></h2>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="form-container">
            <div className="left-container">
              <div className="left-inner-container">
                <h2>Let's Chat</h2>
                <p>
                  Whether you have a question, want to start a project, or simply
                  want to connect, feel free to send me a message.
                </p>
              </div>
            </div>
            <div className="right-container">
              <div className="right-inner-container">
                <form action="#">
                  <h2 className="lg-view">Get in touch</h2>
                  <h2 className="sm-view">Let's Chat</h2>

                  {/* Réseaux sociaux */}
                  <div className="social-container mb-4">
                    <a href="https://www.linkedin.com/in/mariemhajji" className="social" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/mariemhaj531" className="social" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:mariemhajji099@gmail.com" className="social">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>

                  {/* Formulaire */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Subject"
                  />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Message"
                  ></textarea>

                  {/* Bouton */}
                  <button type="submit" className="w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
