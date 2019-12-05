import React from "react";
import "./Home.css";

import Navbar from "./Navbar";

const Home = props => {
  return (
    <div id='home' className='home'>
      <Navbar></Navbar>
      <div className='header'>
        <div className='text-box'>
          <h1 className='name'>{props.name}</h1>
          <p className='about'>{props.description}</p>
        </div>
        {/* Social media and mailto links */}
        <div className='social'>
          <a href='http://linkedin.com/in/danielvadil' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/dvadz' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github-square'></i>
          </a>
          <a href='mailto:dtvadil@gmail.com' rel='noopener noreferrer'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </div>
        {/* Arrow down */}
        <div className='arrow'>
          <a href='#portfolio'>
            <i className='fas fa-chevron-circle-down'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
