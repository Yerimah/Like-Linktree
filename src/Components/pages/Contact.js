import React from 'react';

const Contact = () => (
  <main>
    <div>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind</p>
    </div>

    <form>
      <label htmlFor="first_name">First name</label>
      <input
        id="first_name"
        type="text"
        name="firstName"
        placeholder="Enter your first name"
      />

      <label htmlFor="last_name">Last name</label>
      <input
        id="last_name"
        type="text"
        name="lastName"
        placeholder="Enter your last name"
      />

      <label>Email</label>
      <input
        id="email"
        type="email"
        placeholder="yourname@email.com"
      />

      <label>Message</label>
      <textarea
        name="message"
        placeholder="Send me a message and I will reply you as soon as posible"
        maxLength="50"
      />

    </form>
  </main>
);

export default Contact;
