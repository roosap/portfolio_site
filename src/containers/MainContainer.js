import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import ProjectContainer from './ProjectContainer';
import ErrorPage from '../components/ErrorPage';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: [
                'JavaScript',
                'React',
                'React Native',
                'Vue.js',
                'Node.js',
                'Express.js',
                'Java',
                'Ruby',
                'PostgreSQL',
                'NoSQL',
                'HTML5',
                'CSS',
                'Canvas'
            ],
            principles: [
                'Git',
                'GitHub',
                'TDD',
                'Agile',
                'Restful APIs',
                'UX Design'
            ]
         }
    }
    render() { 
        return ( 
            <div>
            <Header />
            <main>
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' render={() => <HomeContainer skills={this.state.skills} principles={this.state.principles} />} />
                        <Route path='/about' component={AboutContainer.render} />
                        <Route path='/projects' component={ProjectContainer.render} />
                        <Route component={ErrorPage.render} />
                    </Switch>
                </React.Fragment>
            </Router>
            </main>
        </div>
         );
    }
}
 
export default MainContainer;