import React from "react";
import "./Home.css";

import Navbar from "./Navbar";

const Home = props => {
  return (
    <div id='home' className='home'>
      <Navbar></Navbar>
      <div>
        <h1 className='daniel sm-'>{props.name}</h1>
        <p className='about-daniel'>{props.description}</p>
      </div>
      <div className='social'>
        <a href='http://linkedin.com/in/danielvadil' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/dvadz' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github-square'></i>
        </a>
        <a href='mailto:dvadz@yahoo.com' rel='noopener noreferrer'>
          <i className='fas fa-envelope-square'></i>
        </a>
      </div>
      <div className='arrow'>
        <a href='#portfolio'>
          <i className='fas fa-chevron-circle-down'></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
