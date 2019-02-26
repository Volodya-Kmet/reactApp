import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {authorized, unAuthorized} from '../../actions/authActions';
import Table from "../Table";
import Info from "../Info";
import Header from "../../components/Header";

import './index.css';

class Users extends Component {
    state = {
        userName: ''
    };

    localStorage = window.localStorage;

    componentWillMount() {
        const token = this.localStorage.getItem('App_token');
        const userName = this.localStorage.getItem('App_userName');
        if (token && userName) {
            this.props.authorize(userName, token);
        }
    };


    render() {
        return (
            <Fragment>
                <header>
                    <Header userName={this.props.emplsObj.userName} logOut={this.props.logOut}></Header>
                </header>
                <main className='main'>
                    <BrowserRouter>
                        <div>
                            <Switch>
                                <Route path="/empls" component={Table} exact/>
                                <Route path="/empls/:id" component={Info} exact/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emplsObj: state.authReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(unAuthorized())
        },
        authorize: (userName, token) => {
            dispatch(authorized(userName, token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
