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

function ModalReportDetail(props) {
  return (
    <Modal
      isOpen={props.modalReportDetailIsOpen}
      onRequestClose={props.closeModalReportDetail}
      style={customStyles}
      contentLabel="ReportDetail Modal"
      ariaHideApp={false}
    >
      <div className="modal-reportDetail-box">
        <div className="modal-reportDetail-box-header">
          <div className="modal-reportDetail-box-header-text">
            Report Detail
          </div>
          <div onClick={props.closeModalReportDetail} className="modal-X">
            X
          </div>
        </div>
        <div className="modal-reportDetail-box-content">
          <div className="modal-reportDetail-box-content-1">
            <p>Report Id: {"1"}</p>
            <p>Report By User Id: {"1"}</p>
            <p>Report Topic Id: {"1"}</p>
            <p>Report Context: </p>
            <div className="modal-reportDetail-box-content-1-reportContext">
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis sint ex quisquam maxime nihil amet et inventore debitis, necessitatibus culpa cumque fugiat odio! Ea."
              }
            </div>
          </div>
          <div className="modal-reportDetail-box-content-2">
            <p>Admin Description :</p>
            <textarea className="modal-reportDetail-box-content-2-adminDescription" />
          </div>
        </div>
        <div className="modal-reportDetail-box-footer">
          <button className="modal-reportDetail-box-footer-btnSubmit">
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalReportDetail;
