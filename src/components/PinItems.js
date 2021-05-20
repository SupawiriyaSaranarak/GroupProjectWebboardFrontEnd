import React from "react";

import pinIcon from "../img/office-pin.png";
import pinedIcon from "../img/office-pin-red.png";

function PinItems(props) {
  const showTopicText = props.item.Topic.topicName.substr(0, 13);

  const handlerDeletePin = (e, pinned) => {
    console.log("handlerDeletePin", pinned);
  };

  const handlerGoToPinTopic = (e, topic) => {
    console.log("handlerGoToPinTopic", topic);
  };

  return (
    <div className="roomBar-container-contentBox">
      <div className="pinBar-container-contentBox-inside-iconImg-Bg">
        <img
          src={pinedIcon}
          alt={"pinIcon"}
          className="roomBar-container-contentBox-inside-iconImg"
          onClick={(e) => handlerDeletePin(e, props.item)}
        />
      </div>
      <div
        className="roomBar-container-contentBox-inside-textBox"
        onClick={(e) => handlerGoToPinTopic(e, props.item.Topic)}
      >
        {showTopicText + "..."}
      </div>
    </div>
  );
}

export default PinItems;
