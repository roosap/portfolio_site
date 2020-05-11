import React from 'react';
import Intro from '../components/Intro';
import ProfilePicture from '../components/ProfilePicture';
import Skills from '../components/Skills';

const AboutContainer = ({skills, principles}) => {
    return ( 
        <div id="about-wrapper">
            <section>
                <ProfilePicture />
                <Skills skills={skills} principles={principles}/>
            </section>
            <section>
                <Intro />
            </section>
        </div>
     );
}
 
export default AboutContainer;