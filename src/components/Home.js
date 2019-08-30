import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div id='home' className='home border'>
      <div className='border'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className='social'>
        <a href='http://linkedin.com/in/danielvadil' target='_blank'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/dvadz' target='_blank'>
          <i className='fab fa-github-square'></i>
        </a>
        <a href='mailto:dvadz@yahoo.com'>
          <i className='fas fa-envelope-square'></i>
        </a>
      </div>
      <i className='fas fa-chevron-circle-down'></i>
    </div>
  );
};

export default Home;
