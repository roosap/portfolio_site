import React, {Component} from 'react';
import Project_1 from '../components/Project_1';
import Project_2 from '../components/Project_2';

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h4>Projects</h4>
                <Project_2 />
                <Project_1 />
            </div>
         );
    }
}
 
export default ProjectContainer;