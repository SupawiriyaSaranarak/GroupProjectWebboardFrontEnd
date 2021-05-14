import React from "react";

import RoomItems from "./RoomItems";
import roomIcon from "../img/restaurant.png";

function RoomBar() {
  return (
    <div className="roomBar-container">
      <div className="dashboad-header">
        <div className="roomBar-container-header-dashLine">
          <div className="roomBar-container-header-dashLine-inside"></div>
          <div></div>
        </div>
        <div className="roomBar-container-header-dashLine-text-padding"></div>
        <p className="roomBar-container-header-dashLine-text">ROOM</p>
        <div className="roomBar-container-header-dashLine-text-padding"></div>
        <div className="roomBar-container-header-dashLine">
          <div className="roomBar-container-header-dashLine-inside"></div>
          <div></div>
        </div>
      </div>
      <div className="roomBar-container-contentList">
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
        <RoomItems roomIcon={roomIcon} />
      </div>
    </div>
  );
}

export default RoomBar;
