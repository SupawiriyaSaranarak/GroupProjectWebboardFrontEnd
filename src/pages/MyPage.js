import React from "react";
import MyTopicList from "../components/MyTopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";
import Navbar from "../components/navbar";
import { HomeIcon, PencilIcon } from "@heroicons/react/outline";

import LOGO from "../img/LOGO.png";

function MyPage() {
  return (
    <div>
      <div style={{ height: "100px", padding: "30px" }} className="header">
        <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
      </div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">
          <RoomBar />
        </div>
        <MyTopicList className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default MyPage;
