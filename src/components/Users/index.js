import React, {Component} from 'react';

import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Table from "../Table";
import Info from "../Info";

class Users extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/users" component={Table} exact />
                            <Route path="/users/:id" component={Info} exact />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Users