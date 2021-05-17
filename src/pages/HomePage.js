import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import TopicList from "../components/TopicList";
import PinBar from "../components/PinBar";
import RoomBar from "../components/RoomBar";

import LOGO from "../img/LOGO.png";
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
  //modal RoomAdd
  const [modalRoomAddIsOpen, setModalRoomAddIsOpen] = useState(false);

  const openModalRoomAdd = () => {
    setModalRoomAddIsOpen(true);
  };

  const closeModalRoomAdd = () => {
    setModalRoomAddIsOpen(false);
    setUploadImage(null);
  };

  //Image Upload
  const [uploadImage, setUploadImage] = useState(null);

  // Hide Upload Input
  const hiddenFileInput = useRef(null);
  const handleClickUploadRoomAddImg = (e) => {
    hiddenFileInput.current.click();
  };

  const handlerUploadImage = (e) => {
    // console.log(e);
    if (e.target.files[0]) {
      setUploadImage(e.target.files[0]);
    } else {
      setUploadImage(null);
    }
  };

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

      <div onClick={openModalRoomAdd}>RoomADD</div>
      <Modal
        isOpen={modalRoomAddIsOpen}
        onRequestClose={closeModalRoomAdd}
        style={customStyles}
        contentLabel="RoomAdd Modal"
        ariaHideApp={false}
      >
        <div className="modal-roomAdd-box">
          <div className="modal-roomAdd-box-header">
            <div className="modal-roomAdd-box-header-text">เพิ่ม Room ใหม่</div>
            <div onClick={closeModalRoomAdd}>X</div>
          </div>
          <div className="modal-roomAdd-box-content">
            <div className="modal-roomAdd-box-content-image">
              <div className="modal-roomAdd-box-content-image-box">
                {uploadImage === null ? (
                  <img
                    className="modal-roomAdd-box-content-image-box-Pre-img"
                    onClick={handleClickUploadRoomAddImg}
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(uploadImage)}
                    className="modal-roomAdd-box-content-image-box-Pre-img"
                    onClick={handleClickUploadRoomAddImg}
                  />
                )}
                <label
                  htmlFor="roomAddImg"
                  className="modal-roomAdd-box-content-image-box-insideText"
                >
                  Room Icon
                </label>
              </div>
              <input
                id="roomAddImg"
                type="file"
                ref={hiddenFileInput}
                onChange={handlerUploadImage}
                style={{ display: "none" }}
              />
            </div>
            <div className="modal-roomAdd-box-content-text">
              <input
                id="roomAddName"
                type="text"
                placeholder="Room Name"
                className="modal-roomAdd-box-content-text-inputRoomName"
              />
            </div>
          </div>
          <div className="modal-roomAdd-box-footer">
            <button className="modal-roomAdd-box-footer-btnSubmit">
              Submit Add new Room
            </button>
          </div>
        </div>
      </Modal>

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
