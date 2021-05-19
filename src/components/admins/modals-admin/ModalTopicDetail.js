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

function ModalTopicDetail(props) {
  return (
    <Modal
      isOpen={props.modalTopicDetailIsOpen}
      onRequestClose={props.closeModalTopicDetail}
      style={customStyles}
      contentLabel="TopicDetail Modal"
      ariaHideApp={false}
    >
      <div className="modal-reportDetail-box">
        <div className="modal-reportDetail-box-header">
          <div className="modal-reportDetail-box-header-text">Topic Detail</div>
          <div onClick={props.closeModalTopicDetail} className="modal-X">
            X
          </div>
        </div>
        <div className="modal-reportDetail-box-content">
          <div className="modal-reportDetail-box-content-1">
            <p>Topic Id: {"1"}</p>
            <p>Topic Status: {"INACTIVE"}</p>
            <p>Post By User Id: {"1"}</p>
          </div>
          <div className="modal-topicList-box-content-2">
            <p>Topic Name: {"1"}</p>
            <p>Topic Img:</p>
            <div className="modal-topicList-box-content-2-topicImg">
              <img src={dummyImage} />
            </div>
            <p>Topic Context: </p>
            <div className="modal-topicList-box-content-2-topicContext">
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis sint ex quisquam maxime nihil amet et inventore debitis, necessitatibus culpa cumque fugiat odio! Ea."
              }
            </div>
          </div>
        </div>
        <div className="modal-reportDetail-box-footer"></div>
      </div>
    </Modal>
  );
}

export default ModalTopicDetail;
