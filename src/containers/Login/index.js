import React, {Component} from 'react';

import store from "../../store";
import authService from '../../services/authService';
import {authorized, login} from "../../actions/authActions";

import './index.css';

class Login extends Component {
    state = {
        name: '',
        password: ''
    };

    localStorage = window.localStorage;

    componentWillMount() {
        const token = this.localStorage.getItem('App_token');
        const userName = this.localStorage.getItem('App_userName');
        if (token && userName) {
            store.dispatch(authorized(userName, token));
            this.props.history.push('/empls')
        }
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    handlePassChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (event) => {
        store.dispatch(login(this.state));
        // authService.signIn(this.state)
        //     .then(response => {
        //         if (response.status === 'success') {
        //             this.props.history.push('/empls')
        //         }
        //     });
        event.preventDefault();
    };

    render() {
        const {password, name} = this.state;
        return (
            <div className="main">
                <form name="login" onSubmit={this.handleSubmit}>
                    <label className="input">
                        Name:
                        <input type="text" value={name} onChange={this.handleNameChange}/>
                    </label>
                    <label className="input">
                        Password:
                        <input type="password" value={password} onChange={this.handlePassChange}/>
                    </label>
                    <button className="input" type="submit" disabled={!name || !password}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;