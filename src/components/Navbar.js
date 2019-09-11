import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className='nav-bar'>
      <div className='container text-center'>
        <a href='#home' className='btn'>
          Home
        </a>
        <a href='#portfolio' className='btn'>
          Portfolio
        </a>
        <a href='#contact' className='btn'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
