import React from "react";
import UserTopicList from "../components/UserTopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import LOGO from "../img/LOGO.png";

function UserPage() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">
          <RoomBar />
        </div>
        <UserTopicList className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default UserPage;
