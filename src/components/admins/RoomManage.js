import React, { useRef, useState } from "react";

import ModalRoomAdd from "./modals-admin/ModalRoomAdd";

// DUMMY
import roomIcon from "../../img/restaurant.png";

function RoomManage() {
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

  const handlerUploadImage = (e) => {
    // console.log(e);
    if (e.target.files[0]) {
      setUploadImage(e.target.files[0]);
    } else {
      setUploadImage(null);
    }
  };

  // Hide Upload Input
  const hiddenFileInput = useRef(null);
  const handleClickUploadRoomAddImg = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className="admin-content-content-body">
        <div className="admin-content-content-body-headText">{"Room List"}</div>
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
            {
              <>
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
              </>
            }
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

      <ModalRoomAdd
        modalRoomAddIsOpen={modalRoomAddIsOpen}
        closeModalRoomAdd={closeModalRoomAdd}
        uploadImage={uploadImage}
        handleClickUploadRoomAddImg={handleClickUploadRoomAddImg}
        hiddenFileInput={hiddenFileInput}
        handlerUploadImage={handlerUploadImage}
      />
    </>
  );
}

export default RoomManage;
