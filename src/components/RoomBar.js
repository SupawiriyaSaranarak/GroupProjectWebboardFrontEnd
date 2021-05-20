import React from "react";
import axios from "../config/axios";
import RoomItems from "./RoomItems";
import roomIcon from "../img/restaurant.png";
import {  useState, useEffect } from "react";


function RoomBar() {
  const [rooms, setRooms] = useState([]);

  const fetchRoom = async () => {
    const res = await axios.get("rooms/active");
    setRooms(res.data.rooms);
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  // console.log(rooms);
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
        {rooms.map((rooms) => (
          <RoomItems key={rooms.id} {...rooms} />
        ))}
      </div>
    </div>
  );
}

export default RoomBar;
