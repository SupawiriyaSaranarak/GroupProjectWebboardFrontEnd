import React from "react";
import Navbar from "../components/navbar";
import TopicList from "../components/TopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import { HomeIcon, PencilIcon } from "@heroicons/react/outline";

function HomePage() {
  return (
    <div>
      <div>
        <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
      </div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">
          <RoomBar />
        </div>
        <TopicList className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default HomePage;
