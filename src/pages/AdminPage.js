import React, { useRef, useState } from "react";

import Navbar from "../component/navbar";

import roomIcon from "../img/restaurant.png";

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

function AdminPage() {
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

  return (
    <>
      <div className="admin-all-body">
        <div className="admin-header">
          <Navbar Icon={HomeIcon} Icon2={PencilIcon} />
        </div>
        <div className="admin-content-body">
          <div className="admin-content-margin-right"></div>
          <div className="admin-content-navBar">
            <div className="admin-content-navBar-header">
              {
                <>
                  <div className="admin-content-navBar-header-dashLine">
                    <div className="admin-content-navBar-header-dashLine-inside"></div>
                    <div></div>
                  </div>
                  <div className="admin-content-navBar-header-dashLine-text-padding"></div>
                  <p className="admin-content-navBar-header-dashLine-text">
                    {"ADMIN NAVBAR"}
                  </p>
                  <div className="admin-content-navBar-header-dashLine-text-padding"></div>
                  <div className="admin-content-navBar-header-dashLine">
                    <div className="admin-content-navBar-header-dashLine-inside"></div>
                    <div></div>
                  </div>
                </>
              }
            </div>
            <div className="admin-content-navBar-body">
              {
                <ul className="admin-content-navBar-body-menu">
                  <li onClick={() => console.log("click")}>USER</li>
                  <li onClick={() => console.log("click")}>TOPIC</li>
                  <li onClick={() => console.log("click")}>REPORT</li>
                  <li onClick={() => console.log("click")}>ROOM</li>
                </ul>
              }
            </div>
          </div>
          <div className="admin-content-content">
            <div className="admin-content-navBar-header">
              {
                <>
                  <div className="admin-content-navBar-header-dashLine">
                    <div className="admin-content-navBar-header-dashLine-inside"></div>
                    <div></div>
                  </div>
                  <div className="admin-content-navBar-header-dashLine-text-padding"></div>
                  <p className="admin-content-navBar-header-dashLine-text">
                    {"CONTENT"}
                  </p>
                  <div className="admin-content-navBar-header-dashLine-text-padding"></div>
                  <div className="admin-content-navBar-header-dashLine">
                    <div className="admin-content-navBar-header-dashLine-inside"></div>
                    <div></div>
                  </div>
                </>
              }
            </div>
            <div className="admin-content-content-body">
              <div className="admin-content-content-body-headText">
                {"Room List"}
              </div>
              <table className="admin-table-roomList">
                <thead>
                  <tr className="admin-table-roomList-tr-thead">
                    <th>ลำดับ</th>
                    <th>Room Id</th>
                    <th>Room Name</th>
                    <th>Room Icon</th>
                    <th>Room Status</th>
                    <th>Management</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="admin-table-roomList-tr-tbody">
                    <td>{"1"}</td>
                    <td>{"1"}</td>
                    <td>{"Food/Drink"}</td>
                    <td>
                      <img
                        src={roomIcon}
                        className="admin-table-roomList-tr-tbody-img"
                      />
                    </td>
                    <td>{"ACTIVE"}</td>
                    <td>{"Management"}</td>
                  </tr>
                  <tr className="admin-table-roomList-tr-tbody">
                    <td>{"1"}</td>
                    <td>{"1"}</td>
                    <td>{"Food/Drink"}</td>
                    <td>
                      <img
                        src={roomIcon}
                        className="admin-table-roomList-tr-tbody-img"
                      />
                    </td>
                    <td>{"ACTIVE"}</td>
                    <td>{"Management"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="admin-content-content-footer">
                <button
                  className="admin-content-content-footer-btn-roomAdd"
                  onClick={openModalRoomAdd}
                >
                  + RoomADD
                </button>
              </div>
            </div>
          </div>
          <div className="admin-content-margin-left"></div>
        </div>
        <div className="admin-footer"></div>
      </div>

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
    </>
  );
}

export default AdminPage;
