import React from "react";

function PinItems(props) {
  return (
    <div className="roomBar-container-contentBox">
      <div className="pinBar-container-contentBox-inside-iconImg-Bg">
        <img
          src={props.pinIcon}
          alt={"roomIcon"}
          className="roomBar-container-contentBox-inside-iconImg"
        />
      </div>
      <div className="roomBar-container-contentBox-inside-textBox">
        PIN CONTENT
      </div>
    </div>
  );
}

export default PinItems;
