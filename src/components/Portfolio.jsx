import React from 'react'

const Portfolio = () => {
  return (
    // <div className="p-6">
    // <h2>My Projects</h2>
    // <p>Here are some of the recent projects we have completed.</p>
    // </div>
      <section className="container mt-5">
      <h1 className="text-center">My Projects</h1>
      <div className="row mt-4">
          <div className="col-md-4 text-center">
          <img src ="{{assets/}}" alt=""/>
          <h3>MaymaBlog</h3>
          <p>Technolgies</p>
          <p>Outils</p>
          </div>
          <div className="col-md-4 text-center">
          <img src ="{{assets/}}" alt=""/>
          <h3>MaymaBlog</h3>
          <p>Technolgies</p>
          <p>Outils</p>
          </div>
          <div className="col-md-4 text-center">
          <img src ="{{assets/}}" alt=""/>
          <h3>MaymaBlog</h3>
          <p>Technolgies</p>
          <p>Outils</p>
          </div>
      </div>
  </section>
  )
}

export default Portfolio