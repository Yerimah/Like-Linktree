import React from 'react'
import slack from '../assets/slack.png'
import icon from '../assets/Icon.png'

const Footer = () => {
  return (
    <>
     <div className='social-links'>
       <div>
        <img src={slack} alt='slack' className='foot' />
       </div> 
       
       <div>
        <img src={icon} alt='github' className='foot'/>
        </div> 
     </div>
    </>
  )
}

export default Footer