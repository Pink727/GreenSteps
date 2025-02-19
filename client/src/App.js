import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;