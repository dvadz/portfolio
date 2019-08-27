import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div className='home text-center border'>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Home;
