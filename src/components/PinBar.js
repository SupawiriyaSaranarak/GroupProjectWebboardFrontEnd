import React from "react";

import PinItems from "./PinItems";
import pinIcon from "../img/office-pin.png";
import pinedIcon from "../img/office-pin-red.png";

function PinBar() {
  return (
    <div class="container mx-auto min-w-max">
      <div class="container mx-auto min-w-max text-center">
        <h1 class="text-gray-400">PIN</h1>
      </div>
      <div class="container mx-auto p-4 space-y-3 flex flex-col items-center">
        <PinItems pinIcon={pinIcon} />
        <PinItems pinIcon={pinedIcon} />
        <PinItems pinIcon={pinIcon} />
        <PinItems pinIcon={pinedIcon} />
      </div>
    </div>
  );
}

export default PinBar;
