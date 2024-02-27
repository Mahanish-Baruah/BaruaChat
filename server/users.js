const users = [];

export const addUser = (id, name, room) => {
    name = name.trim();
    room = room.trim();

    const userExists = users.find(
        (user) => user.name === name && user.room === room
    );

    if (userExists) return { error: "user already exists" };

    const user = { id, name, room };
    users.push(user);
    console.log("users array: ", users);
    return { user };
};

export const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) return user;
    else return { error: "You can't send any messages" };
};

export const getOnline = (room) => {
    const usersOnline = users.filter((user) => user.room === room);
    return usersOnline.length;
};

export const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        const disconUser = users.splice(index, 1)[0];
        return disconUser;
    }
};
