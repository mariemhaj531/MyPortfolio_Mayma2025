import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HeroSection from './components/HeroSection';
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="header-container">
          <Navbar />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<HeroSection />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer
            className="text-center py-3 text-white mt-auto"
            style={{ background: "linear-gradient(90deg, #0ca8e6, #0ca8e6)",transition: 'background-color 0.3s ease-in-out' }}
          >
            Made by me © 2025
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
