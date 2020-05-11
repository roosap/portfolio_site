import React from 'react';
import {Link} from 'react-router-dom';

const Intro = ({skills, principles}) => {

    const skillsListItems = skills.map((value, index) => {
        return <li key={index}>{value}</li>
    })

    const principlesListItems = principles.map((value, index) => {
        return <li key={index}>{value}</li>
    })

    return ( 
        <section>
            <h4>
                Profile
            </h4>
            <br />
                <h6>
                    Hey, I'm <span className="white">Roosa</span>!<br /><br /> I'm an Edinburgh-based software developer with a background in sociology and communications.<br /><br />
                    I am passionate about social inclusion and using technology to promote accessible solutions for all.<br /><br />
                    I am a curious and creative personality, always eager to learn more.<br /><br />
                    View some of my recent projects <span className="white"><Link to='/projects'>here.</Link></span><br /><br />
                    Get in touch!<br /><br />
                </h6>

            <a href="https://github.com/roosap" target="_blank"><i className="fab fa-github"></i></a> <a href = "mailto: roosa.paivansalo@gmail.com"><i className="far fa-envelope"></i></a><br /><br /><br /><br /><br />

            <h4>
                Skills
            </h4>
            <br />
            <ul>
               {skillsListItems}
            </ul>
            <ul>
                {principlesListItems}
            </ul>
        </section>
    );
}
 
export default Intro;