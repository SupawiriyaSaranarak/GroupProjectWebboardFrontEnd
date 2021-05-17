import React from "react";
import CreateTopic from "../components/CreateTopic";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import LOGO from "../img/LOGO.png";

function CreateTopicPage() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">
          <RoomBar />
        </div>
        <CreateTopic className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default CreateTopicPage;
