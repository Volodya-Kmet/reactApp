export default (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case "AUTH_SUCCESS":
            return {
                ...state,
                token: action.payload.token,
                userName: action.payload.userName
            };
        case "AUTH_FAIL" :
            return {
                ...state,
                token: '',
                userName: ''
            };
        default:
            return {
                ...state,
            }
    }
};