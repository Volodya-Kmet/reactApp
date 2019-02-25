import {getUsers} from '../services/userService';
export async function getUsersList() {
        return {
            type: "GET_USERS",
            payload: await users()
        }
}
async function users () {
    const response = await getUsers();
    console.log(response)
    return response
}