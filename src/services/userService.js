import axios from 'axios';

const uri = 'http://localhost:8080/users';
const storage = window.localStorage;
const token = storage.getItem('App_token');
const headers = {"authorization": token};

export function getUsers() {
    return axios.get(uri, {headers})
        .then(response => {
            return response.data.data

        }).catch(error => {
            if (error.response) {
                console.log('err', error.response.data.message);
                return error.response
            }
        })
}

//
// getUser: (id) => {
//     return users.find(user => {
//         return user._id === +id
//     });
// }