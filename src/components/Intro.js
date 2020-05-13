import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {

    return ( 
        <div>
            <section id="about-me">
                    <h6>
                        Hey, I'm <span className="white">Roosa</span>!<br /><br /> I'm an Edinburgh-based software developer with a background in sociology and communications.<br /><br />
                        I am passionate about social inclusion and using technology to promote accessible solutions for all.<br /><br />
                        I am a curious and creative personality, always eager to learn more.<br /><br />
                        View some of my recent projects <span className="white"><Link to='/projects'>here.</Link></span><br /><br />
                        Get in touch!
                    </h6>
                        {/* <a href="https://github.com/roosap" target="_blank"><i className="fab fa-github"></i></a> <a href = "mailto: roosa.paivansalo@gmail.com"><i className="far fa-envelope"></i></a> */}
            </section>
        </div>
    );
}
 
export default Intro;