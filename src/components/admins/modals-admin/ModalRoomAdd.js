import React from "react";

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

function ModalRoomAdd(props) {
  return (
    <Modal
      isOpen={props.modalRoomAddIsOpen}
      onRequestClose={props.closeModalRoomAdd}
      style={customStyles}
      contentLabel="RoomAdd Modal"
      ariaHideApp={false}
    >
      <div className="modal-roomAdd-box">
        <div className="modal-roomAdd-box-header">
          <div className="modal-roomAdd-box-header-text">เพิ่ม Room ใหม่</div>
          <div onClick={props.closeModalRoomAdd} className="modal-X">
            X
          </div>
        </div>
        <div className="modal-roomAdd-box-content">
          <div className="modal-roomAdd-box-content-image">
            <div className="modal-roomAdd-box-content-image-box">
              {props.uploadImage === null ? (
                <img
                  className="modal-roomAdd-box-content-image-box-Pre-img"
                  onClick={props.handleClickUploadRoomAddImg}
                />
              ) : (
                <img
                  src={URL.createObjectURL(props.uploadImage)}
                  className="modal-roomAdd-box-content-image-box-Pre-img"
                  onClick={props.handleClickUploadRoomAddImg}
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
              className="modal-roomAdd-box-content-image-input-uploadImg"
              ref={props.hiddenFileInput}
              onChange={props.handlerUploadImage}
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
  );
}

export default ModalRoomAdd;
