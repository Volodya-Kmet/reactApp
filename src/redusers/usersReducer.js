export default (state = '', action) => {
    switch (action.type) {
        case "GET_USERS":
            state = {
                ...state,
                rows: action.payload.rows,
                count: action.payload.count_of_elements
            };
            break;
    }
    return state
};