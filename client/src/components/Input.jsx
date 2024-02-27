import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function Input({ msg, setMsg, handleSend }) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter is pressed");
            if (msg) {
                console.log("Message should be sent now...");
                handleSend();
            }
        }
    };

    return (
        <>
            <div className="grid grid-cols-5 p-2 gap-2 bg-blue-600">
                <input
                    ref={inputRef}
                    id="message"
                    type="text"
                    value={msg}
                    placeholder="Type something..."
                    onChange={(e) => setMsg(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="px-4 py-3 col-span-4 rounded-md focus:outline focus:outline-slate-800"
                />
                <button
                    onClick={handleSend}
                    className="py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-md active:ring disabled:cursor-not-allowed"
                    disabled={!msg ? true : false}
                >
                    Send
                </button>
            </div>
        </>
    );
}

Input.propTypes = {
    msg: PropTypes.string.isRequired,
    setMsg: PropTypes.func.isRequired,
    handleSend: PropTypes.func.isRequired,
};

export default Input;
