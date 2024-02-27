import PropTypes from "prop-types";

function MessageBox({ msgObj: { user, text }, name }) {
    return (
        <>
            <div className="text-white">
                {user === name ? (
                    <div className="flex justify-end">
                        <div className="w-2/3 flex flex-col items-end text-justify">
                            <div className="my-2 text-black">{user}</div>
                            <div className="py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                                {text}
                            </div>
                        </div>
                    </div>
                ) : user === "admin" ? (
                    <div className="flex justify-start">
                        <div className="">
                            <div className="my-2 text-black">{user}:</div>
                            <div className="py-3 px-5 bg-slate-700 rounded-2xl">
                                {text}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-start">
                        <div className="w-2/3 flex flex-col items-start text-justify">
                            <div className="my-2 text-black">{user}</div>
                            <div className="py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                                {text}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

MessageBox.propTypes = {
    name: PropTypes.string.isRequired,
    msgObj: PropTypes.object.isRequired,
};

export default MessageBox;
