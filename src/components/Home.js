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
        <i className='fab fa-linkedin-in'></i>
        <i className='fab fa-github-square'></i>
      </div>
      <i className='fas fa-chevron-circle-down'></i>
    </div>
  );
};

export default Home;
