import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [input, setInput] = useState();

  return (
    <main>
      <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind</p>
      </div>

      <form>
        <label>
        First name
        <input
          id="first_name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        /></label>

        <label>Last name
        <input
          id="last_name"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
        /></label>

        <label>Email
        <input
          id="email"
          type="email"
          placeholder="yourname@email.com"
        /></label>

        <label>Message
        <textarea
          name="message"
          placeholder="Send me a message and I will reply you as soon as posible"
          maxLength="50"
        /></label>
      </form>

      <div>
        <p>You agree to providing your data to {name} who may contact you</p>
      </div>

      <input type="submit" value="submit" className="send_message">Send message</input>
    </main>
  );
};

export default Contact;
