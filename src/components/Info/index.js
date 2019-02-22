import React, {Component} from 'react';

import userService from '../../services/userService';

class Info extends Component {
    state = {
        name: '',
        role: ''
    };

    componentWillMount (){
        const id = this.props.match.params.id;
        const user = userService.getUser(id);
        console.log('user', user)
        this.setState({
            name: user.name,
            role: user.role === 1 ? 'admin' : 'user'
        })
    };

    render() {
        const {name, role} = this.state;
        return (
            <form>
                <input type="text" name="name" value={name} />
                <input type="text" name="role" value={role}/>
            </form>
        )
    }

}
export default Info
