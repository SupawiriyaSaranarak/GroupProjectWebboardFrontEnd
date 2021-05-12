import React from "react";

import RoomItems from "./RoomItems";
import roomIcon from "../img/restaurant.png";

function RoomBar() {
  return (
    <div class="container mx-auto min-w-max">
      {/* <div class="container mx-auto min-w-max text-center">
        <h1 class="text-gray-400">Room</h1>
      </div> */}
      <div className="dashboad-header">
        <div class="flex flex-col w-2/5 h-auto">
          <div class="h-3/6 border-b border-gray-400"></div>
          <div></div>
        </div>
        <div class="w-1"></div>
        <h1 class="text-gray-400">ROOM</h1>
        <div class="w-1"></div>
        <div class="flex flex-col w-2/5 h-auto">
          <div class="h-3/6 border-b border-gray-400"></div>
          <div></div>
        </div>
      </div>
      <div class="container mx-auto p-4 space-y-6 flex flex-col items-center">
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
