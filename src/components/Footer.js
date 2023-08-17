import React from 'react';
import '../assets/style/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p>© Nestor Oro. All rights reserved.</p>
        <div className="social-icons">
            <a href="https://github.com/blueberry1312/">
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

export default Footer;