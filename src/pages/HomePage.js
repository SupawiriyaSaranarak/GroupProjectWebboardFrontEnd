import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import TopicList from "../components/TopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import { HomeIcon, PencilIcon } from "@heroicons/react/outline";

// Modal import
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function HomePage() {
  //modal Report
  const [modalReportIsOpen, setModalReportIsOpen] = useState(false);

  const openModalReport = () => {
    setModalReportIsOpen(true);
  };

  const closeModalReport = () => {
    setModalReportIsOpen(false);
  };

  return (
    <div>
      <div style={{ height: "100px", padding: "30px" }} className="header">
        <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
      </div>
      <div className="content-body">
        <div className="margin-right"></div>
        <div className="content-body-room">
          <RoomBar />
        </div>
        <TopicList className="content-body-topic" />
        <div className="content-body-pin">
          <PinBar />
        </div>
        <div className="margin-left"></div>
      </div>

      <div onClick={openModalReport}>Report</div>
      <Modal
        isOpen={modalReportIsOpen}
        onRequestClose={closeModalReport}
        style={customStyles}
        contentLabel="RoomAdd Modal"
        ariaHideApp={false}
      >
        <div className="modal-reportTopic-box">
          <div className="modal-reportTopic-box-header">
            <div className="modal-reportTopic-box-header-text">
              Report Topic
            </div>
            <div onClick={closeModalReport}>X</div>
          </div>
          <div className="modal-reportTopic-box-content">
            <div className="modal-reportTopic-box-content-textDiv1">
              <p>Report Topic Id: {"DUMMY"}</p>
              <p>Post By User Id: {"DUMMY"}</p>
            </div>
            <div className="modal-reportTopic-box-content-textDiv2">
              <p>เหตุผลการ Report</p>
              <textarea
                id="roomAddName"
                type="input"
                className="modal-reportTopic-box-content-text-textArea"
              />
            </div>
          </div>
          <div className="modal-reportTopic-box-footer">
            <button className="modal-roomAdd-box-footer-btnSubmit">
              Submit Report Topic
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
