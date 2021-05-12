import React from "react";
import TopicList from "../component/TopicList";

function HomePage() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">Room</div>
        <TopicList className="content-body-topic" />
        <div className="content-body-pin">Pin</div>
        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default HomePage;
