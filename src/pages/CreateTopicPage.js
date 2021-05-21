import React from "react";
import CreateTopic from "../components/CreateTopic";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";
import Navbar from "../components/navbar";
import { HomeIcon, PencilIcon } from "@heroicons/react/outline";

import LOGO from "../img/LOGO.png";

function CreateTopicPage() {
  return (
    <div>
      <div className="header">
        <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
      </div>
      <div className="content-body">
        <div className="margin-right"></div>

        <CreateTopic className="content-body-topic" />

        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default CreateTopicPage;
