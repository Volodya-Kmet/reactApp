import store from '../store';
import axios from 'axios';
import {authorized} from '../actions/authActions';
import {showMessage} from '../actions/messageActions';

const uri = 'http://localhost:8080/auth';

export default {
    signIn: (user) => {
        return axios.post(uri + '/login', user)
            .then(response => {
                const token = response.data.data.token;
                const userName = response.data.data.userName;
                store.dispatch(authorized(userName, token));

                return {status: "success"};
            }).catch(error => {
                if (error.response) {
                    const message = error.response.data.message;
                    store.dispatch(showMessage(message))
                }
                return {status: "fail"};
            })
    }
}