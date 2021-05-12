import React from "react";

function PinItems(props) {
  return (
    <div class="box-border h-12 items-center flex flex-row justify-center w-48 border border-black rounded-3xl bg-primary">
      <div
        class="p-1 mx-1.5 bg-transparent"
        style={{ backgroundColor: "white" }}
      >
        <img
          src={props.pinIcon}
          alt={"PinIcon"}
          class=""
          style={{ width: "25px", height: "25px" }}
        />
      </div>
      <div class="mx-1.5">PIN CONTENT</div>
    </div>
  );
}

export default PinItems;
