import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind</p>
      </div>
      <form>
        <label for='first-name'>First name</label>
        <input id='first_name' placeholder='Enter your first name'/>

        <label for='last-name'>Last name</label>
        <input id='last_name' placeholder='Enter your last name'/>

        <label>Email</label>
        <input id='email' placeholder='Enter your email' />

        <textarea>

        </textarea>
      </form>
    </>
  )
}

export default Contact