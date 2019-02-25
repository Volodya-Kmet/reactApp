import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReactDom from "react-dom";
import {connect} from "react-redux";

import {hideMessage} from "../actions/messageActions";

import Login from "./Login";
import Users from "./Users";
import Error from "../components/Error404";
import Modal from "../components/Modal";

class App extends Component {

    render() {
        const {props} = this;
        return (
            <div>
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route path="/" component={Login} exact/>
                            <Route path="/users" component={Users}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                {
                    props.messageObj.modalOpen && ReactDom.createPortal(
                        <Modal onClose={props.closeModal} message={props.messageObj.message}></Modal>,
                        document.getElementById('portal')
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messageObj: state.messageReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch(hideMessage())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
