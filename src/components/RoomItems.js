import React from "react";

function RoomItems(props) {
  return (
    <div className="roomBar-container-contentBox">
      <div className="roomBar-container-contentBox-inside-iconImg-Bg">
        <img
          src={props.roomIcon}
          alt={"roomIcon"}
          className="roomBar-container-contentBox-inside-iconImg"
        />
      </div>
      <div className="roomBar-container-contentBox-inside-textBox">
        ROOM CONTENT
      </div>
    </div>
  );
}

export default RoomItems;
