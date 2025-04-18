import React from 'react';

const HeroSection = () => {
	return (
        <section id="home" className="dark_bg">
        <div id="particles-js"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="banner_content">
                <h3>Hi There,</h3>
                <h1 className="cd-headline clip">
                  <span className="fw_600">I Am</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible fw_600">Mariem Hajji</b>
                    <b className="fw_600">Web Developer</b>
                  </span>
                </h1>
                <p>I'm a Web Developer with extensive experience...</p>
                <a href="#" className="btn btn-secondary banner_btn">Hire Me</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner-images">
                <img src="/assets/" alt="me" />
              </div>
            </div>
          </div>
        </div>
      </section>
	);
};

export default HeroSection;