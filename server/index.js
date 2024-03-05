import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { addUser, getUser, getOnline, removeUser } from "./users.js";
import router from './router.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());
app.use(router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

io.on("connection", (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on("join", ({ name, room }, callback) => {
        try {
            const { error, user } = addUser(socket.id, name, room);

            if (error) return callback(error);
            else {
                socket.join(user.room);

                const online = getOnline(user.room);
                const welcomeMsg = {
                    user: "admin",
                    text: `${user.name}, Welcome to room ${user.room}`,
                };
                const joinedMsg = {
                    user: "admin",
                    text: `${user.name}, has joined the room`,
                };

                socket.emit("msg", welcomeMsg);
                socket.broadcast.to(user.room).emit("msg", joinedMsg);

                io.to(user.room).emit("onlineData", online);
            }
        } catch (err) {
            console.log(err);
        }
    });

    socket.on("msg", (msg) => {
        try {
            const user = getUser(socket.id);
            const userMsg = { user: user.name, text: msg };
            console.log(userMsg)
            io.to(user.room).emit("msg", userMsg);
        } catch (err) {
            console.log(err);
        }
    });

    socket.on("disconnect", () => {
        console.log(`Disconnected: ${socket.id}`);
        try {
            const user = removeUser(socket.id);
            
            if (user) {
                const online = getOnline(user.room);
                const leftMsg = {
                    user: "admin",
                    text: `${user.name} has left the room`,
                };

                console.log("Disconnected: ", user.name);
                io.to(user.room).emit("msg", leftMsg);
                io.to(user.room).emit("onlineData", online);
            }
        } catch (err) {
            console.log(err);
        }
    });

    socket.on("reconnect", () => {
        console.log("user reconnected");
    });
});

server.listen(3500, () => console.log("server running"));
