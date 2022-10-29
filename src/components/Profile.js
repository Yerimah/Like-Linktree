import React from 'react';
import Photo from '../assets/profilepic.png';

const Profile = () => (
  <>
    <div id="profile_img">
      <img src={Photo} alt="myBio" />
    </div>
    <h1>Daniel Yerimah</h1>
    <div id="slack" />
  </>
);

export default Profile;
