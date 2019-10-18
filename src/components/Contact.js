import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h2 className='p-4 text-center'>Contact</h2>

      <div className='email'>
        <form>
          <input placeholder='Your Name' required></input>
          <input placeholder='Your Email Address' required></input>
          <textarea required placeholder='Message'></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
