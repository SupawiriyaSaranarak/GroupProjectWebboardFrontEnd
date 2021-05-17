import React from "react";

import PinItems from "./PinItems";
import pinIcon from "../img/office-pin.png";
import pinedIcon from "../img/office-pin-red.png";

function PinBar() {
  return (
    <div className="roomBar-container">
      <div className="dashboad-header">
        <div className="roomBar-container-header-dashLine">
          <div className="roomBar-container-header-dashLine-inside"></div>
          <div></div>
        </div>
        <div className="roomBar-container-header-dashLine-text-padding"></div>
        <p className="roomBar-container-header-dashLine-text">PIN</p>
        <div className="roomBar-container-header-dashLine-text-padding"></div>
        <div className="roomBar-container-header-dashLine">
          <div className="roomBar-container-header-dashLine-inside"></div>
          <div></div>
        </div>
      </div>
      <div className="roomBar-container-contentList">
        <PinItems pinIcon={pinIcon} />
        <PinItems pinIcon={pinedIcon} />
        <PinItems pinIcon={pinIcon} />
        <PinItems pinIcon={pinedIcon} />
      </div>
    </div>
  );
}

export default PinBar;
