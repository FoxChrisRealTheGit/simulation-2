import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/wizard" component={Wizard} />
    </Switch>
)