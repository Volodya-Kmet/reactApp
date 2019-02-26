export default (state = {modalOpen: false}, action) => {
    switch (action.type) {
        case "SHOW_MESSAGE":
            state = {
                ...state,
                message: action.payload,
                modalOpen: true
            };
            break;
        case "HIDE_MESSAGE":
            state = {
                ...state,
                message: '',
                modalOpen: false
            };
            break;
        default:
            state = {
                ...state,
            }
    }
    return state
};