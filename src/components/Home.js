import React from 'react';

const Home = () => {
  return (
    <div className='home-container' id="home">
      <h1 className='title subtitle'>HEY THERE!</h1>
      <h1 className='title'>I AM NES</h1>
      <p className='resume'>I am a passionate <span className='marked'>full stack developer</span> with a love for technological innovation. Explore my portfolio and experience, and feel free to reach out if you need assistance in building your desired web app!</p>
      <div className="social-icons social-home">
        <a href="https://github.com/blueberry1312/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github fa-2xl"></i>
          <span className="tooltip">GITHUB</span>
        </a>
        <a href="https://www.linkedin.com/in/nestor-oro" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin fa-2xl"></i>
          <span className="tooltip">LINKEDIN</span>
        </a>
        <a href="https://twitter.com/nestorsitooo" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter fa-2xl"></i>
          <span className="tooltip">TWITTER</span>
        </a>
        <a href="https://wellfound.com/u/nestor-oro" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-angellist fa-2xl"></i>
          <span className="tooltip">WELLFOUND</span>
        </a>
        <a href="https://medium.com/@nestorfabianoroalvarez/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-medium fa-2xl"></i>
          <span className="tooltip">MEDIUM</span>
        </a>
      </div>
    </div>
  );
};

export default Home;