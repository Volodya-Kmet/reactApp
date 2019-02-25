export function showMessage (message) {
    return {
        type: "SHOW_MESSAGE",
        payload: message
    }
}

export function hideMessage () {
    return {
        type: "HIDE_MESSAGE",
    }
}