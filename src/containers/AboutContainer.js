import React from 'react';
import Intro from '../components/Intro';
import ProfilePicture from '../components/ProfilePicture';

const AboutContainer = ({skills, principles}) => {
    return ( 
        <div>
            <ProfilePicture />
            <Intro skills={skills} principles={principles}/>
        </div>
     );
}
 
export default AboutContainer;