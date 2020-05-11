import React from 'react';
import Picture from '../assets/images/roosapp_circle.png';

const ProfilePicture = () => {
    return ( 
        <img id="profile-pic" src={Picture} alt="Profile picture" width="100%"></img>
     );
}
 
export default ProfilePicture;