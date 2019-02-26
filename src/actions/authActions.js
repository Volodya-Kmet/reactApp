const localSorage = window.localStorage;


export function login (user) {
    return {
        type: "AUTH_LOGIN",
        payload: user
    }
}

export function authorized (userName, token) {
    localSorage.setItem('App_token', token);
    localSorage.setItem('App_userName', userName);
    return {
        type: "AUTH_SUCCESS",
        payload: {
            token: token,
            userName: userName
        }
    }
}

export function unAuthorized () {
    localStorage.removeItem('App_token');
    localStorage.removeItem('App_userName');
    return {
        type: "AUTH_FAIL",
    }
}