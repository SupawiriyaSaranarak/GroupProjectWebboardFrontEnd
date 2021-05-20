import React from "react";

import pinIcon from "../img/office-pin.png";
import pinedIcon from "../img/office-pin-red.png";

function PinItems(props) {
  const showTopicText = props.item.Topic.topicName.substr(0, 13);

  return (
    <div className="roomBar-container-contentBox">
      <div className="pinBar-container-contentBox-inside-iconImg-Bg">
        <img
          src={pinedIcon}
          alt={"pinIcon"}
          className="roomBar-container-contentBox-inside-iconImg"
        />
      </div>
      <div className="roomBar-container-contentBox-inside-textBox">
        {showTopicText + "..."}
      </div>
    </div>
  );
}

export default PinItems;
