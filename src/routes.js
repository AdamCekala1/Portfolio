
import React from 'react';
import {Route, IndexRoute} from 'react-router'
import {Router, hashHistory } from 'react-router';
import App from './components/App.js';
import About from './components/about/About.js';
import Contact from './components/contact/Contact.js';
import LandingPage from './components/home/LandingPage.js';
import Skills from './components/skills/Skills.js';

const Routes =()=>{
    return(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={LandingPage} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/skills' component={Skills} />
            </Route>
        </Router>
    );
};

export default Routes;
