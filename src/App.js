import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './assets/style/index.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="section" id="home">
        <Home />
      </div>
      <div className="section-divider"></div>
      <div className="section" id="about">
        <About />
      </div>
      <div className="section-divider"></div>
      <div className="section" id="projects">
        <Projects />
      </div>
      <div className="section-divider"></div>
      <div className="section" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

