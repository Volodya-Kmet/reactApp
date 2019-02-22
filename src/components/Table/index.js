import React, {Component} from 'react';

import userService from '../../services/userService';

import './index.css';

const users = userService.getUsers();

class Table extends Component {
    state = {
        users
    };


    render() {
        const {users} = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`${this.props.location.pathname}/${user._id}`}>Edit</a>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Table