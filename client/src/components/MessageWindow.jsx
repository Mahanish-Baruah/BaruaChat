import PropTypes from "prop-types";
import MessageBox from "./MessageBox";
import ScrollToBottom from "react-scroll-to-bottom";

function MessageWindow({ msgsArr, name }) {
    return (
        <>
            <ScrollToBottom className="h-full px-4 pb-4 overflow-scroll">
                {msgsArr.map((msgObj, i) => {
                    return <MessageBox key={i} msgObj={msgObj} name={name} />;
                })}
            </ScrollToBottom>
        </>
    );
}

MessageWindow.propTypes = {
    name: PropTypes.string.isRequired,
    msgsArr: PropTypes.array.isRequired,
};

export default MessageWindow;
