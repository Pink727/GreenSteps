import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login.tsx';
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/Errorpage" component={ErrorPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;