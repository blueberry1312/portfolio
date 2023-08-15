import React from 'react';
import '../assets/style/about.css';

const About = () => {
  return (
    <div className='about-container' id="about">
      <h1 className='title subtitle'>INTRODUCTION</h1>
      <h1 className='title'>ABOUT ME</h1>
      <p className='resume'>My name is Nestor, A highly skilled full stack developer graduated from Microverse and proficient
      in multiple programming languages, frameworks, softwares and technologies. Skilled at quickly adapting and learning new tools efficiently.
      In Microverse, I code every day with other developers worldwide, allowing me to learn important communication
      skills, teamwork, and how to work remotely and collaborately. I have developed real-world projects such as the
      page to organize the inventory of a bookstore, a web app for check to do list, a web application that provides
      countries data of all countries in the world, or a full stack app to reserve a glamping.</p>
      <a href="https://docs.google.com/document/d/e/2PACX-1vRMgtinWVNUcKkDDPtAKn2FsmGQTN4N731lHWDgB6sYWVz5akxPGtaBSoxQDUfJLg0n8qVjlJoy88sF/pub" target="_blank" rel="noopener noreferrer">
        <button className='buttons'>GET MY RESUME</button>
      </a>
      <p className='resume marked skills'>SOME OF MY EXPERTISES:</p>
      <p>git, github, postgresql, python, Nodejs, raspberry pi, eslint, html5, css3, javascript, react, figma, ruby, rails, redux, tailwindcss, bootstrap, sass, c++, axios, jest</p>
    </div>
  );
};

export default About;
