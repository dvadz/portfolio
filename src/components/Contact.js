import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact' className='contact container'>
      <h2 className='p-4 text-center'>Contact Me</h2>
      <p>
        <span>Email: </span> <span>dtvadil@gmail.com</span>
      </p>
      <p className='my-4'>
        <span>Phone: </span> <span>(647) 641-3234</span>
      </p>

      <div className='email'>
        <form>
          <div class='form-group'>
            <label for='exampleFormControlInput1'>Your Email address</label>
            <input
              type='email'
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div class='form-group'>
            <label for='exampleFormControlTextarea1'>Message</label>
            <textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
          </div>
          <button className='btn btn-primary' type='submit'>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
