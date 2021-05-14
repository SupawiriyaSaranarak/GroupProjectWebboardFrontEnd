import React from "react";
import Navbar from "../component/navbar";
import TopicList from "../component/TopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import LOGO from "../img/LOGO.png";
import { HomeIcon, PencilIcon } from "@heroicons/react/outline";
import { Modal } from "@material-ui/core";

function HomePage() {
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
        <TopicList className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default HomePage;
