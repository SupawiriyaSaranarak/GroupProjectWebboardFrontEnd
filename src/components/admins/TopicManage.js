import React, { useState } from "react";

import ModalTopicDetail from "./modals-admin/ModalTopicDetail";

function TopicManage() {
  //Modal ReportDetail
  const [modalTopicDetailIsOpen, setModalTopicDetailIsOpen] = useState(false);

  const openModalTopicDetail = () => {
    setModalTopicDetailIsOpen(true);
  };

  const closeModalTopicDetail = () => {
    setModalTopicDetailIsOpen(false);
  };

  return (
    <>
      <div className="admin-content-content-body">
        <div className="admin-content-content-body-headText">
          {"Topic List"}
        </div>
        <table className="admin-table-reportList">
          <thead>
            <tr className="admin-table-reportList-tr-thead">
              <th>ลำดับ</th>
              <th>Topic Id</th>
              <th>By User Id</th>
              <th>Topic Status</th>
              <th>Management</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="admin-table-reportList-tr-tbody"
              onClick={openModalTopicDetail}
            >
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"INACTIVE"}</td>
              <td>{"Management"}</td>
            </tr>
            <tr className="admin-table-reportList-tr-tbody">
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"ACTIVE"}</td>
              <td>{"Management"}</td>
            </tr>
          </tbody>
        </table>
        <div className="admin-content-content-footer"></div>
      </div>

      <ModalTopicDetail
        modalTopicDetailIsOpen={modalTopicDetailIsOpen}
        closeModalTopicDetail={closeModalTopicDetail}
      />
    </>
  );
}

export default TopicManage;
