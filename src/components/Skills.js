import React from 'react';

const Skills = ({skills, principles}) => {

    const skillsListItems = skills.map((value, index) => {
        if (index < skills.length - 1) {
            return (
            <li key={index}>{value} //</li>
            )
        } else {
            return (
            <li key={index}>{value}.</li>
            )
        }
        })
    
    const principlesListItems = principles.map((value, index) => {
        if (index < principles.length -1) {
            return <li key={index}>{value} //</li>
        } else {
            return <li key={index}>{value}.</li>
        }
    })
        
        return ( 
            <div id="skills">
                <section id="skills-wrapper">
                    <ul>
                        {skillsListItems}
                    </ul>
                    <ul>
                        {principlesListItems}
                    </ul>
            </section>
            </div>
            );  
}
 
export default Skills;