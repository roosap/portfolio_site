import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import ProjectContainer from './ProjectContainer';
import ErrorPage from '../components/ErrorPage';
import Logo from '../assets/images/logo.png';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: [
                'JavaScript',
                'React + React Native',
                'Vue.js',
                'Node.js',
                'Express.js',
                'Java + Spring',
                'Ruby + Sinatra',
                'PostgreSQL',
                'NoSQL',
                'HTML5',
                'CSS'
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
            <Router>
                <React.Fragment>
                <Header />
                    <main>
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route path='/about' render={() => <AboutContainer skills={this.state.skills} principles={this.state.principles} /> } />
                        <Route path='/projects' component={ProjectContainer} />
                        <Route component={ErrorPage} />
                    </Switch>
                    </main>
                </React.Fragment>
            </Router>
            <footer>
                <img id="logo" src={Logo} alt="logo"/>
                <div id="social"><a href="https://github.com/roosap" target="_blank"><i className="fab fa-github"></i></a> <a href = "mailto: roosa.paivansalo@gmail.com"><i className="far fa-envelope"></i></a></div>
            </footer>
        </div>
         );
    }
}
 
export default MainContainer;