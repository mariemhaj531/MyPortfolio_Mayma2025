import React from 'react'

const Services = () => {
  return (
    <section className="container mt-5">
        <h1 className="text-center">My Services</h1>
        <div className="row mt-4">
            <div className="col-md-4 text-center">
            <div class="icon">
								<img src="assets/icon-responsive.svg" alt=""/>
							</div>
            <h3><a href="#">Web Development</a></h3>
            <p>Building responsive and modern websites.</p>
            </div>
            <div className="col-md-4 text-center">
            <div class="icon">
								<img src="assets/icon-responsive.svg" alt=""/>
							</div>
            <h3><a href="#">Web Design</a></h3>
            <p></p>
            </div>
            <div className="col-md-4 text-center">
            <div class="icon">
								<img src="assets/icon-responsive.svg" alt=""/>
							</div>
            <h3><a href="#">IA</a></h3>
            <p></p>
            </div>
        </div>
    </section>
  )
}

export default Services