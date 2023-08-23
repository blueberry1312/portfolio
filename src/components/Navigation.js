import React from 'react';
import { Link } from 'react-scroll';
import '../assets/style/navbar.css';

const Navigation = () => {
  return (
    <nav className='navbar'>
      <Link to="home" className='nav-logo'>N</Link>
      <ul className='nav-links'>
        <li>
          <Link to="about" className='nav-link'>About</Link>
        </li>
        <li>
          <Link to="projects" className='nav-link'>Projects</Link>
        </li>
        <li>
          <Link to="contact" className='nav-link'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;