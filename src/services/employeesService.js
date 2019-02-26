import axios from 'axios';
import store from '../store';
import {unAuthorized} from '../actions/authActions';

const uri = 'http://localhost:8080/users';
const storage = window.localStorage;
const token = storage.getItem('App_token');
const headers = {"authorization": token};

export function getEmployees() {
    return axios.get(uri, {headers})
        .then(response => {
            return response.data.data
        }).catch(error => {
            if (error.response) {
                const message = error.response.data.message;
                if( error.response.data.status === 401)
                    store.dispatch(unAuthorized());
                return message
            }
        })
}

//
// getUser: (id) => {
//     return empls.find(user => {
//         return user._id === +id
//     });
// }