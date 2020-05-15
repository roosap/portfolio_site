import React from 'react';
import Canvas from '../components/Canvas';
import {Link} from 'react-router-dom';

const HomeContainer = () => {


    return (  
        <div>
            <h4>
                Nice to meet you!
            </h4>
            <h6>
                If you're here to read more about me, head to my <span className="white"><Link to='/about'>About Me</Link></span> section.<br /><br />
                If you're here to have a sneak peek at my recent projects, please see <span className="white"><Link to='/projects'>My Projects</Link></span>.<br /><br />
                Or, if you're here because you're bored, why don't you draw something below:
            </h6>

            <Canvas />
        </div>
    );
}
 
export default HomeContainer;