import React, { useEffect, useRef, useState } from "react";
import axios from "../../config/axios";

import ModalRoomAdd from "./modals-admin/ModalRoomAdd";

import { BanIcon, KeyIcon, PencilIcon } from "@heroicons/react/outline";

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

  // get Room List
  const [roomList, setRoomList] = useState();

  useEffect(async () => {
    await getRoom();
  }, []);

  const getRoom = async () => {
    try {
      const resRooms = await axios.get("/admin/rooms/");
      // console.log(resRooms);
      const {
        data: { rooms },
      } = resRooms;
      setRoomList(rooms);
    } catch (err) {
      console.dir(err);
    }
  };
  // console.log(roomList);

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
            {roomList?.map((item, index) => {
              return (
                <tr className="admin-table-roomList-tr-tbody" key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.roomName}</td>
                  <td>
                    <img
                      src={item.roomIcon}
                      className="admin-table-roomList-tr-tbody-img"
                    />
                  </td>
                  <td>{item.roomStatus}</td>
                  <td>
                    <div className="admin-table-roomList-tr-tbody-management-iconGrp">
                      <div className="admin-table-roomList-tr-tbody-management-iconGrp-inside">
                        <PencilIcon
                          id="icon-name"
                          onClick={(e) => console.log(e)}
                          className="admin-table-roomList-tr-tbody-management-iconGrp-inside-icon"
                        />
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-1">
                          EDIT
                        </p>
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-2">
                          NAME
                        </p>
                      </div>
                      <div className="admin-table-roomList-tr-tbody-management-iconGrp-inside">
                        <PencilIcon
                          id="icon-img"
                          onClick={(e) => console.log(e)}
                          className="admin-table-roomList-tr-tbody-management-iconGrp-inside-icon"
                        />
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-1">
                          EDIT
                        </p>
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-2">
                          ICON
                        </p>
                      </div>
                      <div className="admin-table-roomList-tr-tbody-management-iconGrp-inside">
                        <BanIcon
                          id="icon-status"
                          onClick={(e) => console.log(e)}
                          className="admin-table-roomList-tr-tbody-management-iconGrp-inside-icon"
                        />
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-1">
                          CHANGE
                        </p>
                        <p className="admin-table-roomList-tr-tbody-management-iconGrp-inside-text-2">
                          STATUS
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
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
        getRoom={getRoom}
      />
    </>
  );
}

export default RoomManage;
