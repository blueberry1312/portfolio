import React, { useState } from 'react';
import '../assets/style/projects.css';
import JestLogo from '../assets/images/jestlogo.svg';
import TailwindCSSLogo from '../assets/images/tailwindcsslogo.svg';
import PostgreSQLLogo from '../assets/images/postgresqllogo.svg';
import RubyLogo from '../assets/images/rubylogo.svg';
import RailsLogo from '../assets/images/railslogo.svg';
import ReduxLogo from '../assets/images/reduxlogo.svg';
import CplusLogo from '../assets/images/cpluslogo.svg';

const mapFrameworkToIcon = (framework) => {
  const logoStyle = {
    height: '2em',
    color: '#595380'
  };
  switch (framework) {
    case 'React':
      return <div className="tooltip-container">
      <i class="fa-brands fa-react fa-2xl"></i>
      <span className="tooltip">React</span>
    </div>;
    case 'Javascript':
      return <div className="tooltip-container">
      <i class="fa-brands fa-js fa-2xl"></i>
      <span className="tooltip">Javascript</span>
    </div>;
    case 'HTML5':
      return <div className="tooltip-container">
      <i class="fa-brands fa-html5 fa-2xl"></i>
      <span className="tooltip">HTML5</span>
    </div>;
    case 'CSS3':
      return <div className="tooltip-container">
      <i class="fa-brands fa-css3-alt fa-2xl"></i>
      <span className="tooltip">CSS3</span>
    </div>;
    case 'Jest':
      return <div className="tooltip-container">
      <img src={JestLogo} alt="JestLogo" style={logoStyle} />
      <span className="tooltip">Jest</span>
    </div>;
    case 'TailwindCSS':
      return <div className="tooltip-container">
      <img src={TailwindCSSLogo} alt="TailwindCSSLogo" style={logoStyle}/>
      <span className="tooltip">TailwindCSS</span>
    </div>;
    case 'PostgreSQL':
      return <div className="tooltip-container">
      <img src={PostgreSQLLogo} alt="PostgreSQLLogo" style={logoStyle}/>
      <span className="tooltip">PostgreSQL</span>
    </div>;
    case 'Ruby':
      return <div className="tooltip-container">
      <img src={RubyLogo} alt="RubyLogo" style={logoStyle}/>
      <span className="tooltip">Ruby</span>
    </div>;
    case 'Rails':
      return <div className="tooltip-container">
      <img src={RailsLogo} alt="RailsLogo" style={logoStyle}/>
      <span className="tooltip">Rails</span>
    </div>;
    case 'Redux':
      return <div className="tooltip-container">
      <img src={ReduxLogo} alt="ReduxLogo" style={logoStyle}/>
      <span className="tooltip">Redux</span>
    </div>;
    case 'Cplus':
      return <div className="tooltip-container">
      <img src={CplusLogo} alt="CplusLogo" style={logoStyle}/>
      <span className="tooltip">C++</span>
    </div>;
    default:
      return framework;
  }
};

const projectsData = [
  {
    title: 'Reserve a Glamping',
    screenshot: '/glampingproject.png',
    description: 'It is a full-stack web application that lets the user see and reserve glampings, add and remove glamping items, and list all reservations for a given user. You can login as nestor',
    githubLink: 'https://github.com/jaimevillegas/book-a-reservation-backend',
    liveDemoLink: 'https://g-reservations.netlify.app/',
    frameworksUsed: ['React', 'Redux', 'Ruby', 'Rails', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL'],
  },
  {
    title: 'Where am I?',
    screenshot: '/whereami.png',
    description: 'It is a Single Page App (SPA) building with React and Redux that allows users to: Displays a home page with all regions. Displays information about countries via a RESTful API & Weather API.',
    githubLink: 'https://github.com/blueberry1312/react-capstone-project',
    liveDemoLink: 'https://react-capstone-project-lmyd.onrender.com/',
    frameworksUsed: ['React', 'Redux', 'Javascript', 'HTML5', 'CSS3'],
  },
  {
    title: 'React ToDo',
    screenshot: '/todolist.png',
    description: 'It is a SPA that allows users to: Add & Remove tasks, also clear completed tasks.',
    githubLink: 'https://github.com/blueberry1312/react-todo',
    liveDemoLink: 'https://blueberry1312.github.io/react-todo/',
    frameworksUsed: ['React', 'CSS3'],
  },
  {
    title: 'Space Travelers Hub',
    screenshot: '/spaceproject.png',
    description: 'Space Travelers Hub is a website that shows Rockets and missions using SpaceX API, and let you display a list of Rockets and Missions, reserve Rockets and Join Missions.',
    githubLink: 'https://github.com/blueberry1312/react-group-project',
    liveDemoLink: 'https://react-group-project.onrender.com/',
    frameworksUsed: ['React', 'Redux', 'Javascript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Math Magicians',
    screenshot: '/mathproject.png',
    description: 'It is a Single Page App (SPA) deployed with Render that allows users to: Make simple calculations and read a random quote.',
    githubLink: 'https://github.com/blueberry1312/math-magician',
    liveDemoLink: 'https://math-magician-8qmw.onrender.com/',
    frameworksUsed: ['React', 'Redux', 'Javascript', 'CSS3'],
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <div className='projects-container' id='projects'>
      <h1 className='title subtitle'>PORTFOLIO</h1>
      <h1 className='title'>PROJECTS</h1>
      <p className='resume'>Take a look at my projects:</p>
      <div className='carousel-controls'>
          <button onClick={handlePrevProject} className='prevbtn'>&lt;</button>
          <button onClick={handleNextProject} className='nextbtn'>&gt;</button>
      </div>
      <div className='project-carousel'>
        <div className='project-card'>
          <div className='title'>
            <p>{currentProject.title}</p>
          </div>
          <img
            src={currentProject.screenshot}
            alt={currentProject.title}
            className='project-screenshot'
          />
          <div className='project-description'>
            <p>{currentProject.description}</p>
          </div>
          <div className='project-buttons1'>
            <div className='project-buttons'>
              <a
                href={currentProject.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </div>
            <div className='project-buttons'>
              <a
                href={currentProject.liveDemoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className='skills-icon'>
            <p className='frameworks-used'>
              {currentProject.frameworksUsed.map((framework, index) => (
                <React.Fragment key={framework}>
                  {index !== 0 && ' '}
                  {mapFrameworkToIcon(framework)}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

