import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Forum from '../pages/Forum';
import EcoLinks from '../pages/EcoLinks';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/forum" component={Forum} />
                    <Route path="/eco-links" component={EcoLinks} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;