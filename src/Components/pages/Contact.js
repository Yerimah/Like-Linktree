import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [submit, setSubmit] = useState(false)

  const handleFirstInput = (event) => {
    setInput({ ...input, firstname: event.target.value });
  };

  const handleLastInput = (event) => {
    setInput({ ...input, lastname: event.target.value });
  };

  const handleEmail = (event) => {
    setInput({ ...input, email: event.target.value });
  };

  const handleMessage = (event) => {
    setInput({ ...input, message: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
  };

  return (
    <>
      <div className='contact-form'>
        <div>
          <h1 className="contact_head">Contact Me</h1>
          <p className="ama">Hi there, contact me to ask about anything you have in mind</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="first_last">
            <div className="block">
            <label>First name</label>
              <input
                onChange={handleFirstInput}
                value={input.firstname}
                id="first_name"
                className="styl_name"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>
              {submit && !input.firstname ? <span>Please enter a first name</span> : null }
            
            <div className="block">
            <label>Last name</label>
              <input
                onChange={handleLastInput}
                value={input.lastname}
                id="last_name"
                className="styl_name"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
             </div> 
            {submit && !input.lastname ? <span>Please enter a last name</span> : null}
          </div>

          <label>Email</label>
            <input
              onChange={handleEmail}
              value={input.email}
              id="email"
              type="email"
              placeholder="yourname@email.com"
            />
          {submit && !input.email ? <span>Please enter your email</span> : null }
          
          <label>Message</label>
            <textarea
              onChange={handleMessage}
              value={input.message}
              id="message"
              name="message"
              placeholder="Send me a message and I will reply you as soon as posible"
              maxLength="50"
            />
          {submit && !input.message ? <span>Please enter a message</span> : null }
          
          <div>
            <p>
              You agree to providing your data to
              {' '}
              who may contact you
            </p>
          </div>

          <input type="submit" value="Send message" id="btn_submit" />
          {submit ? <div>Success! Thank you for reaching out</div> : null}
        </form>
      </div>
    </>
  );
};

export default Contact;
