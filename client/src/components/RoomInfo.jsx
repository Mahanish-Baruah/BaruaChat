import PropTypes from "prop-types";

function RoomInfo({ room, online }) {
    return (
        <>
            <div className="grid grid-cols-2 text-white text-xl bg-blue-600">
                <div className="p-4">
                    #{room}
                </div>
                <p className="p-4 text-right">
                    online: {online}
                </p>
            </div>
        </>
    );
}

RoomInfo.propTypes = {
    room: PropTypes.string.isRequired,
    online: PropTypes.number.isRequired,
};

export default RoomInfo;
