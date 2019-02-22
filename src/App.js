import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";
import Error from "./components/Error404";

import './App.css';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route path="/" component={Login} exact />
                            <Route path="/users" component={Users} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;
