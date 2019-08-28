import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className='nav-bar container text-center border'>
      <a className='btn'>Home</a>
      <a className='btn'>About</a>
      <a className='btn'>Portfolio</a>
      <a className='btn'>Contact</a>
    </div>
  );
};

export default Navbar;
