import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/registration';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Registration} />
                {/* Add other routes here as needed */}
                <Route path="/" exact>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
