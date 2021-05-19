import React, { useState } from "react";
import axios from "../../../config/axios";

import { KeyIcon } from "@heroicons/react/outline";

import Swal from "sweetalert2";

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
  const handlerAdminDesInputChange = (e) => {
    props.setAdminDesInput({ adminDescription: e.target.value });
  };
  console.log(props.adminDesInput);

  const handlerAdminDesUpdate = async (e) => {
    e.preventDefault();
    try {
      // validate
      if (!props.adminDesInput.adminDescription) {
        throw Error("กรุณา กรอก Admin Description");
      }
      if (
        props.adminDesInput.adminDescription === "" ||
        !props.adminDesInput.adminDescription.trim()
      ) {
        throw Error("กรุณา กรอก Admin Description");
      }

      const adminDesUpdate = await axios.patch(
        "/admin/report/" + props.reportDetail?.id,
        { adminDescription: props.adminDesInput.adminDescription }
      );

      Swal.fire({
        title: "อัพเดต Admin Description สำเร็จ",
        icon: "success",
      });

      props.closeModalReportDetail();
      props.setAdminDesInput({
        adminDescription: "",
      });
      props.getReport();
    } catch (err) {
      console.dir(err);
    }
  };

  const handlerChangeReportStatus = async (e, reportId, reportStatus) => {
    try {
      // console.log(reportId);
      // console.log(reportStatus);

      let reportReqBody;

      if (reportStatus === "REPORT") {
        reportReqBody = "REJECT";
      }
      if (reportStatus === "REJECT") {
        reportReqBody = "REPORT";
      }

      Swal.fire({
        text: `คุณต้องการ ${reportReqBody} ReportId: ${reportId} ใช่ไหม?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่ใช่",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const reportStatusUpdate = await axios.patch(
            "/admin/report/" + reportId,
            { reportStatus: reportReqBody }
          );

          props.closeModalReportDetail();
          props.setAdminDesInput({
            adminDescription: "",
          });
          props.getReport();
        }
      });
    } catch (err) {
      console.dir(err);
    }
  };

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
            <p>Report Id: {props.reportDetail?.id}</p>
            <p>Report By User Id: {props.reportDetail?.userId}</p>
            <p>Report Topic Id: {props.reportDetail?.topicId}</p>
            <p>Report Status: {props.reportDetail?.reportStatus}</p>
            <p>Report Context: </p>
            <div className="modal-reportDetail-box-content-1-reportContext">
              {props.reportDetail?.reportContent}
            </div>
          </div>
          <div className="modal-reportDetail-box-content-2">
            <p>Admin Description :</p>
            <textarea
              className="modal-reportDetail-box-content-2-adminDescription"
              name="adminDescription"
              defaultValue={props.reportDetail?.adminDescription}
              onChange={handlerAdminDesInputChange}
            />
          </div>
        </div>
        <div className="modal-reportDetail-box-footer">
          <div className="modal-reportDetail-box-footer-content">
            <div className="admin-table-userList-tr-tbody-management-iconGrp">
              <div
                className="admin-table-roomList-tr-tbody-management-iconGrp-inside"
                onClick={(e) =>
                  handlerChangeReportStatus(
                    e,
                    props.reportDetail?.id,
                    props.reportDetail?.reportStatus
                  )
                }
              >
                <KeyIcon
                  id="icon-active"
                  className="admin-table-userList-tr-tbody-management-iconGrp-inside-icon"
                />
                <p className="admin-table-userList-tr-tbody-management-iconGrp-inside-text-1">
                  CHANGE STATUS
                </p>
              </div>
            </div>
            <button
              className="modal-reportDetail-box-footer-btnSubmit"
              onClick={handlerAdminDesUpdate}
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalReportDetail;
