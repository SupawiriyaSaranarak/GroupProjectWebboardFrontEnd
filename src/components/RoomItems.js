import React from "react";

function RoomItems({ roomName, roomIcon }) {
  return (
    <div className="roomBar-container-contentBox">
      <div className="roomBar-container-contentBox-inside-iconImg-Bg">
        <img
          src={roomIcon}
          alt={"roomIcon"}
          className="roomBar-container-contentBox-inside-iconImg"
        />
      </div>
      <div className="roomBar-container-contentBox-inside-textBox">
        {roomName}
      </div>
    </div>
  );
}

export default RoomItems;
