import React from "react";
// Dummy Image
import dummyImage from "../../../img/dummy-image.jpg";
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

function ModalUserDetail(props) {
  return (
    <Modal
      isOpen={props.modalUserDetailIsOpen}
      onRequestClose={props.closeModalUserDetail}
      style={customStyles}
      contentLabel="UserDetail Modal"
      ariaHideApp={false}
    >
      <div className="modal-reportDetail-box">
        <div className="modal-reportDetail-box-header">
          <div className="modal-reportDetail-box-header-text">User Detail</div>
          <div onClick={props.closeModalUserDetail} className="modal-X">
            X
          </div>
        </div>
        <div className="modal-reportDetail-box-content">
          <div className="modal-reportDetail-box-content-1">
            <p>User Id: {"1"}</p>
            <p>Username: {"INACTIVE"}</p>
            <p>Email: {"INACTIVE"}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>Img:</p>
              <img
                src={dummyImage}
                className="modal-userDetail-box-content-1-userImg"
              />
            </div>
            <p>Birthday: {"INACTIVE"}</p>
            <p>Role: {"INACTIVE"}</p>
            <p>Status: {"1"}</p>
            <p>created At: {"1"}</p>
          </div>
        </div>
        <div className="modal-reportDetail-box-footer"></div>
      </div>
    </Modal>
  );
}

export default ModalUserDetail;
