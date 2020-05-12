import React from 'react';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <h2>Roosa Päivänsalo</h2>
            <h4>Software Developer</h4>
            <NavBar />
        </header>
     );
}
 
export default Header;