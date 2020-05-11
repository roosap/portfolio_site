import React from 'react';
import Intro from '../components/Intro';
import ProfilePicture from '../components/ProfilePicture';
import Skills from '../components/Skills';

const AboutContainer = ({skills, principles}) => {
    return ( 
        <div id="about-wrapper">
            <section>
                <Skills skills={skills} principles={principles}/>
            </section>
            <section>
                <Intro />
            </section>
            <section>
                <ProfilePicture />
                <br /><br />
                <a href="https://github.com/roosap" target="_blank"><i className="fab fa-github"></i></a> <a href = "mailto: roosa.paivansalo@gmail.com"><i className="far fa-envelope"></i></a>
            </section>
        </div>
     );
}
 
export default AboutContainer;