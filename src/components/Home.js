import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div className='home border'>
      <div className='border'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className='social'>
        <i class='fab fa-linkedin-in'></i>
        <i class='fab fa-github-square'></i>
      </div>
      <i class='fas fa-chevron-circle-down'></i>
    </div>
  );
};

export default Home;
