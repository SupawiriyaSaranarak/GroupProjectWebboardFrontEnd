import React from "react";

import RoomItems from "./RoomItems";
import roomIcon from "../img/restaurant.png";

function RoomBar() {
  return (
    <div class="container mx-auto min-w-max">
      <div class="container mx-auto min-w-max text-center">
        <h1 class="text-gray-400">Room</h1>
      </div>
      <div class="container mx-auto p-4 space-y-3 flex flex-col items-center">
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
