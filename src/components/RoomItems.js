import React from "react";

function RoomItems(props) {
  return (
    <div class="box-border h-12 items-center flex flex-row justify-center w-48 border border-black rounded-3xl bg-primary">
      <div
        class="p-1 mx-1.5 border border-black rounded-3xl bg-white"
        style={{ backgroundColor: "white" }}
      >
        <img
          src={props.roomIcon}
          alt={"roomIcon"}
          class=""
          style={{ width: "25px", height: "25px" }}
        />
      </div>
      <div class="mx-1.5">ROOM CONTENT</div>
    </div>
  );
}

export default RoomItems;
