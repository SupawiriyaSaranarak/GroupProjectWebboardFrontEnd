import React, { useState } from "react";

import ModalReportDetail from "./modals-admin/ModalReportDetail";

function ReportManage() {
  //Modal ReportDetail
  const [modalReportDetailIsOpen, setModalReportDetailIsOpen] = useState(false);

  const openModalReportDetail = () => {
    setModalReportDetailIsOpen(true);
  };

  const closeModalReportDetail = () => {
    setModalReportDetailIsOpen(false);
  };

  return (
    <>
      <div className="admin-content-content-body">
        <div className="admin-content-content-body-headText">
          {"Report List"}
        </div>
        <table className="admin-table-reportList">
          <thead>
            <tr className="admin-table-reportList-tr-thead">
              <th>ลำดับ</th>
              <th>Report Id</th>
              <th>User Id</th>
              <th>Topic Id</th>
              <th>Report Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="admin-table-reportList-tr-tbody"
              onClick={openModalReportDetail}
            >
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"REJECTED"}</td>
            </tr>
            <tr className="admin-table-reportList-tr-tbody">
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"REPORTED"}</td>
            </tr>
          </tbody>
        </table>
        <div className="admin-content-content-footer"></div>
      </div>

      <ModalReportDetail
        modalReportDetailIsOpen={modalReportDetailIsOpen}
        closeModalReportDetail={closeModalReportDetail}
      />
    </>
  );
}

export default ReportManage;
