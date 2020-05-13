import React, {Component} from 'react';
import Project1 from '../components/Project_1';
import Project2 from '../components/Project_2';
import Project3 from '../components/Project_3';

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h4>Projects</h4>
                <Project3 />
                <Project2 />
                <Project1 />
            </div>
         );
    }
}
 
export default ProjectContainer;