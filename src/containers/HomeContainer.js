import React from 'react';

import Intro from '../components/Intro';
import ProjectContainer from './ProjectContainer';

const HomeContainer = ({skills, principles}) => {
    return (  
        <div>
            <section>
                <Intro skills={skills} principles={principles} />
            </section>
        </div>
    );
}
 
export default HomeContainer;