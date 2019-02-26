// export default (state = '', action) => {
//     switch (action.type) {
//         case "GET_EMPLOYEES":
//             state = {
//                 ...state,
//                 rows: action.payload.rows,
//                 count: action.payload.countOfRows
//             };
//         default:
//             state = {
//                 ...state
//             };
//     }
//     return state
// };

const initialState = {
    fetching: false,
    rows: null,
    count: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "EMPL_CALL_REQUEST":
            state = {...state, fetching: true, error: null};
            break;
        case "EMPL_CALL_SUCCESS":
            console.log("reduse 2", action)
            if (action.payload)
                state = {...state, fetching: false, rows: action.payload.rows, count: action.payload.countOfRows, error:null};
            break;
        case "EMPL_CALL_FAILURE":
            state = {...state, fetching: false, rows: null, count: null, error: action.error};
            break;
        default:
            state = {...state};
    }
    return state
}