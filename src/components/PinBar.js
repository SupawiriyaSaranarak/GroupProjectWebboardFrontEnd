import React from "react";

import PinItems from "./PinItems";
import pinIcon from "../img/office-pin.png";
import pinedIcon from "../img/office-pin-red.png";

function PinBar() {
  return (
    <div class="container mx-auto min-w-max">
      {/* <div class="container mx-auto min-w-max text-center">
        <h1 class="text-gray-400">PIN</h1>
      </div> */}
      <div className="dashboad-header">
        <div class="flex flex-col w-2/5 h-auto">
          <div class="h-3/6 border-b border-gray-400"></div>
          <div></div>
        </div>
        <div class="w-1"></div>
        <h1 class="text-gray-400">PIN</h1>
        <div class="w-1"></div>
        <div class="flex flex-col w-2/5 h-auto">
          <div class="h-3/6 border-b border-gray-400"></div>
          <div></div>
        </div>
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
