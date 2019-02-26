export function fetchEmployees (offset, limit) {
    return {type: "EMPL_CALL_REQUEST", payload: {offset, limit}}
}
export function successEmployees (response) {
    return {type: "EMPL_CALL_SUCCESS", payload: response}
}
export function failEmployees () {
    return {type: "EMPL_CALL_FAILURE"}
}
export  function changePage (page, limit) {
    return {
        type: "EMPL_CHANGE_PAGE",
        payload: { page, limit}
    }
}