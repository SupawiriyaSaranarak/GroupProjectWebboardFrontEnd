import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

import ModalReportDetail from "./modals-admin/ModalReportDetail";

import { KeyIcon } from "@heroicons/react/outline";

import Swal from "sweetalert2";

function ReportManage() {
  //Modal ReportDetail
  const [modalReportDetailIsOpen, setModalReportDetailIsOpen] = useState(false);

  const openModalReportDetail = (e, item) => {
    setModalReportDetailIsOpen(true);
    setReportDetail(item);
    setAdminDesInput({ adminDescription: item.adminDescription });
  };

  const closeModalReportDetail = () => {
    setModalReportDetailIsOpen(false);
    setReportDetail();
    setAdminDesInput({
      adminDescription: "",
    });
  };

  // get All Report
  const [allReport, setAllReport] = useState();
  const [reportDetail, setReportDetail] = useState();

  useEffect(async () => {
    await getReport();
  }, []);

  const getReport = async () => {
    try {
      const resReports = await axios.get("/admin/report/");
      // console.log(resReports);
      const {
        data: { reports },
      } = resReports;
      setAllReport(reports);
    } catch (err) {
      console.dir(err);
    }
  };
  console.log(allReport);

  // Admin Description Change
  const [adminDesInput, setAdminDesInput] = useState({
    adminDescription: "",
  });

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allReport?.map((item, index) => {
              return (
                <tr className="admin-table-reportList-tr-tbody" key={item.id}>
                  <td>{index + 1}</td>
                  <td
                    onClick={(e) => openModalReportDetail(e, item)}
                    className="admin-table-reportList-tr-tbody-td-pointer"
                  >
                    {item.id}
                  </td>
                  <td
                    onClick={(e) => openModalReportDetail(e, item)}
                    className="admin-table-reportList-tr-tbody-td-pointer"
                  >
                    {item.User.id}
                  </td>
                  <td
                    onClick={(e) => openModalReportDetail(e, item)}
                    className="admin-table-reportList-tr-tbody-td-pointer"
                  >
                    {item.topicId}
                  </td>
                  <td>{item.reportStatus}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="admin-content-content-footer"></div>
      </div>

      <ModalReportDetail
        modalReportDetailIsOpen={modalReportDetailIsOpen}
        closeModalReportDetail={closeModalReportDetail}
        reportDetail={reportDetail}
        getReport={getReport}
        setAdminDesInput={setAdminDesInput}
        adminDesInput={adminDesInput}
      />
    </>
  );
}

export default ReportManage;
