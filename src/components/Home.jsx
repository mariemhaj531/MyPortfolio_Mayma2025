import React from 'react'
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import '../css/Home.css'
const Home = () => {
  return (
    <div className="home-container">
    <HeroSection />
    <About />
    <Services />
    <Portfolio />
    <Skills />
    <Contact />
    </div>
  )
}

export default Home