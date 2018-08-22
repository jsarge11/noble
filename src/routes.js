import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact/Contact';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        {/* <Route to="/whynoble" component={Home}/>
        <Route to="/services" component={Home}/> */}
    </Switch>
)