const initialState = {
    rows: null,
    count: null,
    page: 0,
    limits: 5
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "EMPL_CALL_REQUEST":
            state = {...state, limit: action.payload.limit, offset: action.payload.offset};
            break;
        case "EMPL_CALL_SUCCESS":
            state = {
                ...state,
                fetching: false,
                rows: action.payload.rows,
                count: action.payload.countOfRows,
                error: null
            };
            break;
        case "EMPL_CALL_FAILURE":
            state = {...state, rows: null, count: null};
            break;


        case "EMPL_CHANGE_PAGE":
            state = {...state, page: action.payload.page, limits: action.payload.limit};
            break;
        default:
            state = {...state};
    }
    return state
}