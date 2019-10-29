import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className='contact container'>
      <h2 className='p-4 text-center'>Contact Me</h2>

      <div className='email'>
        <form>
          {/* Name */}
          <div class='form-group'>
            {/* <label for='name'></label> */}
            <input type='email' class='form-control' id='name' placeholder='Your name' />
          </div>
          {/* Email Address */}
          <div class='form-group'>
            {/* <label for='email'></label> */}
            <input type='email' class='form-control' id='email' placeholder='Your email address' />
          </div>
          {/* Message */}
          <div class='form-group'>
            <label for='message'>Message</label>
            <textarea class='form-control' id='message' rows='5'></textarea>
          </div>
          <button className='btn btn-primary' type='submit'>
            Send Email
          </button>
        </form>
      </div>

      <p className='mx-2 mt-4 '>
        <a href='mailto:dtvadil@gmail.com'>
          <i className='fas fa-envelope mr-3'></i> dtvadil@gmail.com
        </a>
      </p>
      <p className='mx-2 mt-4'>
        <i class='fas fa-phone mr-3'></i> (647) 641-3234
      </p>
    </div>
  );
};

export default Contact;
