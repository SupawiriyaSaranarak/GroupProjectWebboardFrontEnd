import React from "react";

import moment from "moment";

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
  const handlerOnClick = (e) => {
    console.log("click");
  };

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
            <p>Topic Id: {props.topicDetail?.id}</p>
            <p>Topic Status: {props.topicDetail?.topicStatus}</p>
            <p>Post By User Id: {props.topicDetail?.User.username}</p>
            <p>
              Post At:{" "}
              {moment(props.topicDetail?.createdAt).format(
                "DD/MM/YYYY ,HH:mm:ss"
              )}
            </p>
            <p>Like: {props.topicDetail?.Likes.length}</p>
            <p>Comment: {props.topicDetail?.Comments.length}</p>
          </div>
          <div className="modal-topicList-box-content-2">
            <p>Topic Name: {props.topicDetail?.topicName}</p>
            <p>Topic Img:</p>
            <div className="modal-topicList-box-content-2-topicImg">
              <img src={props.topicDetail?.topicImg} />
            </div>
          </div>
        </div>
        <div className="modal-reportDetail-box-footer">
          <div onClick={handlerOnClick}></div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalTopicDetail;
