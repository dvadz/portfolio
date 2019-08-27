import React from "react";

const Navbar = props => {
  return (
    <div className='container text-center border'>
      <a className='btn'>Home</a>
      <a className='btn'>About</a>
      <a className='btn'>Portfolio</a>
      <a className='btn'>Contact</a>
    </div>
  );
};

export default Navbar;
