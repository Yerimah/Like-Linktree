import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind</p>
      </div>
      <form>
        <label for="firstName">First name</label>
        <input 
            id='first_name' 
            type="text" 
            name="firstName" 
            placeholder='Enter your first name' 
            tabIndex="1" 
        />

        <label for="lastName">Last name</label>
        <input 
            id='last_name' 
            type="text" 
            name="lastName" 
            placeholder='Enter your last name' 
            tabIndex="2" 
        />

        <label for="email">Email</label>
        <input 
            id='email' 
            type="email" 
            placeholder='yourname@email.com' 
            tabIndex="3" 
        />

        <label for="message">Message</label>
        <textarea
            name="message"
            placeholder='Start typing...'
        
        />

      </form>
    </>
  )
}

export default Contact