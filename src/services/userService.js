const users = [{
    _id: 1,
    name: "Vasya",
    password: "654321",
    role: 0,
    status: 1
}, {
    _id: 2,
    name: "Petya",
    password: "123456",
    role: 1,
    status: 1
}];

const Users = {
    getUsers: () => {
        return users
    },

    getUser: (id) => {
        return users.find(user => {
            return user._id === +id
        });
    }
};

export default Users