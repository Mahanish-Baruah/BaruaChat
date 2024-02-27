import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "./Input.jsx";
import MessageWindow from "./MessageWindow.jsx";
import RoomInfo from "./RoomInfo.jsx";
import ErrorPage from "./ErrorPage.jsx";

let socket;

export default function Chat() {
    const location = useLocation();

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [online, setOnline] = useState(0);
    const [userMsg, setUserMsg] = useState("");
    const [msgsArr, setMsgsArr] = useState([]);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const name = urlParams.get("name");
        const room = urlParams.get("room");
        setName(name);
        setRoom(room);

        socket = io("https://baruachat.onrender.com");

        socket.emit("join", { name, room }, (error) => {
            if (error) setUserExists(true);
        });

        socket.on("onlineData", (online) => {
            setOnline(online);
        });

        socket.on("msg", (msgObj) => {
            console.log(msgObj);
            setMsgsArr((msgsArr) => [...msgsArr, msgObj]);
        });

        return () => {
            socket.disconnect();
        };
    }, [location.search]);

    const handleSend = () => {
        if (userMsg) {
            console.log(userMsg);
            socket.emit("msg", userMsg);
            setUserMsg("");
        }
    };

    return (
        <>
            <div className="h-dvh w-screen bg-indigo-900">
                <div className="xl:w-1/2 h-full mx-auto bg-blue-100">
                    {!userExists ? (
                        <>
                            <div className="h-full flex flex-col justify-between">
                                <RoomInfo room={room} online={online} />
                                {msgsArr && msgsArr.length && (
                                    <MessageWindow
                                        msgsArr={msgsArr}
                                        name={name}
                                    />
                                )}
                                <Input
                                    msg={userMsg}
                                    setMsg={setUserMsg}
                                    handleSend={handleSend}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <ErrorPage />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
