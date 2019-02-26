export default (state = {}, action) => {
    switch (action.type) {
        case "AUTH_SUCCESS":
            state = {
                ...state,
                token: action.payload.token,
                userName: action.payload.userName
            };
            break;
        case "AUTH_FAIL" :
            state = {
                ...state,
                token: '',
                userName: ''
            };
            break;
        default:
            state = {
                ...state,
            }
    }
    return state
};