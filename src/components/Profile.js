import React from 'react'
import Photo from '../assets/profilepic.png'

const Profile = () => {
  return (
    <>
      <div id="profile_img">
        <img src={Photo} alt="photo" />
      </div>
      <h1>Daniel Yerimah</h1>
      <div id="slack"></div>
    </>
  )
}

export default Profile