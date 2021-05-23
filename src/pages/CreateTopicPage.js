import React from "react";
import CreateTopic from "../components/CreateTopic";
import Navbar from "../components/navbar";
import { HomeIcon, PencilIcon } from "@heroicons/react/outline";

function CreateTopicPage() {
  return (
    <div>
      <div className="header">
        <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
      </div>
      <div className="content-body">
        <div className="margin-right"></div>

        <CreateTopic className="content-body-topic" />

        <div className="margin-left"></div>
      </div>
    </div>
  );
}

export default CreateTopicPage;
