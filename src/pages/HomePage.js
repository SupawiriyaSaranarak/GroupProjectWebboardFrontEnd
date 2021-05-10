import React from "react";

import LOGO from "../img/LOGO.png";

function HomePage() {
  return (
    // <div className="body">
    //   <div className="header">
    //     <div className="header-left"></div>
    //     <div className="header-center"></div>
    //     <div className="header-right"></div>
    //   </div>

    //   <div className="content">
    //     <div className="content-left"></div>
    //     <div className="content-center"></div>
    //     <div className="content-right"></div>
    //   </div>
    // </div>

    <div>
      <div className="header">Header</div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">Room</div>
        <div className="content-body-topic">Topic</div>
        <div className="content-body-pin">Pin</div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default HomePage;
