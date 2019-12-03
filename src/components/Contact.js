import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submitted Message");
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(event.target);
  };

  render() {
    return (
      <div id='contact' className='contact'>
        <h2 className='p-4 text-center'>Contact Me</h2>

        <div className='container'>
          <div className='row'>
            {/* Contact */}
            <div className='col-md-4 mb-4'>
              <p className='mx-2 mt-4 '>
                <a href='mailto:dtvadil@gmail.com'>
                  <i className='fas fa-envelope mr-3'></i> dtvadil@gmail.com
                </a>
              </p>
              <p className='mx-2 mt-4'>
                <a href='tel:(647) 641-3234'>
                  <i className='fas fa-phone mr-3'></i> (647) 641-3234
                </a>
              </p>
            </div>

            {/* Email */}
            <div className='col-md-8 mb-4'>
              <form>
                {/* Name */}
                <div className='form-group'>
                  {/* <label for='name'></label> */}
                  <input
                    type='text'
                    className='form-control'
                    name='name'
                    value={this.state.name}
                    onChange={event => {
                      this.handleInputChange(event);
                    }}
                    placeholder='Your name'
                    required
                  />
                </div>
                {/* Email Address */}
                <div className='form-group'>
                  {/* <label for='email'></label> */}
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={this.state.email}
                    onChange={event => {
                      this.handleInputChange(event);
                    }}
                    placeholder='Your email address'
                    required
                  />
                </div>
                {/* Subject */}
                <div className='form-group'>
                  {/* <label for='subject'></label> */}
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    value={this.state.subject}
                    onChange={event => {
                      this.handleInputChange(event);
                    }}
                    placeholder='Subject'
                    required
                  />
                </div>
                {/* Message */}
                <div className='form-group'>
                  {/* <label for='message'>Message</label> */}
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    value={this.state.message}
                    onChange={event => {
                      this.handleInputChange(event);
                    }}
                    placeholder='Your message'
                    required></textarea>
                </div>
                <button
                  className='btn btn-primary'
                  type='submit'
                  onClick={event => {
                    this.handleSubmit(event);
                  }}>
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
