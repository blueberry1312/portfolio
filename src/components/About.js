import React from 'react';
import '../assets/style/about.css';
import JestLogo from '../assets/images/jestlogo.svg';
import TailwindCSSLogo from '../assets/images/tailwindcsslogo.svg';
import PostgreSQLLogo from '../assets/images/postgresqllogo.svg';
import RubyLogo from '../assets/images/rubylogo.svg';
import RailsLogo from '../assets/images/railslogo.svg';
import ReduxLogo from '../assets/images/reduxlogo.svg';
import CplusLogo from '../assets/images/cpluslogo.svg';
import ArduinoLogo from '../assets/images/arduinologo.svg';

const About = () => {
  const logoStyle = {
    height: '2em',
    color: '#595380'
  };
  return (
    <div className='about-container' id="about">
      <h1 className='title subtitle'>INTRODUCTION</h1>
      <h1 className='title'>ABOUT ME</h1>
      <p className='resume'>My name is Nestor, A highly skilled full-stack developer graduated from Microverse with
      strong passions about technology and proficient in multiple programming languages, frameworks, softwares and
      technologies such as JavaScript, React, Ruby on Rails and TailwindCSS. Skilled mentor with the proven ability
      to motivate, educate, and manage a team of 4+ developers to build software programs and effectively track changes.
      Confident communicator, strategic thinker, and innovative creator to develop customized apps to meet organizational
      needs, highlight their core competencies, and further success. I have developed real-world projects such as the
      page to organize the inventory of a bookstore, a web app for check to do list, a web application that provides
      countries data of all countries in the world, or a full stack app to reserve a glamping.</p>
      <a href="https://drive.google.com/file/d/1WTxYyfArMSWxEiEiEDGcSFBt1X3urU97/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className='buttons'>GET MY RESUME</button>
      </a>
      <p className='resume marked skills'>SOME OF MY EXPERTISES:</p>
      <div className='skills-icon'>
        <div className="tooltip-container">
          <i class="fa-brands fa-git fa-2xl"></i>
          <span className="tooltip">Git</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-github fa-2xl"></i>
          <span className="tooltip">Github</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-figma fa-2xl"></i>
          <span className="tooltip">Figma</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-sass fa-2xl"></i>
          <span className="tooltip">SASS</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-css3-alt fa-2xl"></i>
          <span className="tooltip">CSS3</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-html5 fa-2xl"></i>
          <span className="tooltip">HTML5</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-bootstrap fa-2xl"></i>
          <span className="tooltip">Bootstrap</span>
        </div> 
        <div className="tooltip-container">
          <i class="fa-brands fa-python fa-2xl"></i>
          <span className="tooltip">Python</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-js fa-2xl"></i>
          <span className="tooltip">Javascript</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-node fa-2xl"></i>
          <span className="tooltip">NodeJS</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-react fa-2xl"></i>
          <span className="tooltip">React</span>
        </div>
        <div className="tooltip-container">
          <img src={TailwindCSSLogo} alt="TailwindCSSLogo" style={logoStyle}/>
          <span className="tooltip">TailwindCSS</span>
        </div>
        <div className="tooltip-container">
          <img src={JestLogo} alt="JestLogo" style={logoStyle} />
          <span className="tooltip">Jest</span>
        </div>
        <div className="tooltip-container">
          <img src={PostgreSQLLogo} alt="PostgreSQLLogo" style={logoStyle}/>
          <span className="tooltip">PostgreSQL</span>
        </div>
        <div className="tooltip-container">
          <img src={RubyLogo} alt="RubyLogo" style={logoStyle}/>
          <span className="tooltip">Ruby</span>
        </div>
        <div className="tooltip-container">
          <img src={RailsLogo} alt="RailsLogo" style={logoStyle}/>
          <span className="tooltip">Rails</span>
        </div>
        <div className="tooltip-container">
          <img src={ReduxLogo} alt="ReduxLogo" style={logoStyle}/>
          <span className="tooltip">Redux</span>
        </div>
        <div className="tooltip-container">
          <img src={CplusLogo} alt="CplusLogo" style={logoStyle}/>
          <span className="tooltip">C++</span>
        </div>
        <div className="tooltip-container">
          <i class="fa-brands fa-raspberry-pi fa-2xl"></i>
          <span className="tooltip">RaspberryPi</span>
        </div>
        <div className="tooltip-container">
          <img src={ArduinoLogo} alt="ArduinoLogo" style={logoStyle}/>
          <span className="tooltip">ArduinoIDE</span>
        </div>
      </div>
    </div>
  );
};

export default About;
