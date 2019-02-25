import React, {Component} from 'react';
import {getUsersList} from '../../actions/usersAction';

import './index.css';
import {connect} from "react-redux";

class Table extends Component {
    state = {
        users: []
    };
    componentWillMount() {
        this.props.getUsers()
    }

    render() {
        const {users} = this.state;

console.log(this.props.userObj)
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

const mapStateToProps = (state) => {
    return {
        authObj: state.authReducer,
        userObj: state.usersReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
           dispatch(getUsersList())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)