import { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [error, setError] = useState("");

    const handleJoin = (e) => {
        if (!name || !room) {
            e.preventDefault();
            setError("Please enter Name and Room");
            setTimeout(() => {
                setError("");
            }, 1000);
        }
    };

    return (
        <>
            <div className="h-dvh md:h-screen bg-gradient-to-r from-fuchsia-600 to-cyan-600 flex flex-col justify-center items-center">
                <div className="size-full md:w-1/2 lg:w-1/4 md:h-2/3 p-6 rounded-none md:rounded-lg lg:rounded-2xl flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500 md:bg-gradient-to-l md:from-indigo-400 md:to-cyan-400 text-white ">
                    <h1 className="text-3xl text-center mb-6 font-semibold">
                        BaruaChat 🦜
                    </h1>
                    <form className="flex flex-col justify-center align-baseline">
                        {!error ? (
                            <label htmlFor="name" className="mb-3">
                                Name
                            </label>
                        ) : (
                            <label
                                htmlFor="name"
                                className="mb-3 underline decoration-red-500 decoration-wavy"
                            >
                                Enter your name
                            </label>
                        )}
                        <input
                            id="name"
                            type="text"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            className="mb-3 px-3 h-10 rounded text-black"
                        />
                        {!error ? (
                            <label htmlFor="room" className="mb-3">
                                Room
                            </label>
                        ) : (
                            <label
                                htmlFor="room"
                                className="mb-3 underline decoration-red-500 decoration-wavy"
                            >
                                Enter room name
                            </label>
                        )}
                        <input
                            id="room"
                            type="text"
                            value={room}
                            placeholder="Room"
                            onChange={(e) => setRoom(e.target.value)}
                            className="mb-3 px-3 h-10 rounded text-black"
                        />
                        <Link
                            onClick={handleJoin}
                            to={`/chat?name=${name}&room=${room}`}
                            className="mt-3 h-10"
                        >
                            <button
                                type="submit"
                                className="bg-black hover:bg-slate-800 rounded-md size-full active:ring"
                            >
                                Join
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
