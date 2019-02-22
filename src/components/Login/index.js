import React, {Component} from 'react';
import './index.css';

class Login extends Component {
    state = {
        name: '',
        password: '',
        btn: 'disabled'
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    handlePassChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (event) => {
       // alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    };

    render() {
        const { password, name } = this.state;
        return (

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
        )
    }

}

export default Login;