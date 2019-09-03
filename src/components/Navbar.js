import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className='nav-bar container text-center'>
      <a href='#home' className='btn'>
        Home
      </a>
      <a href='#about' className='btn'>
        About
      </a>
      <a href='#portfolio' className='btn'>
        Portfolio
      </a>
      <a className='btn'>Contact</a>
    </div>
  );
};

export default Navbar;
