import React, { useState } from "react";

// Dummy Image
import dummyImage from "../../img/dummy-image.jpg";
import ModalUserDetail from "./modals-admin/ModalUserDetail";

function UserManage() {
  //Modal UserList > UserDetail
  const [modalUserDetailIsOpen, setModalUserDetailIsOpen] = useState(false);

  const openModalUserDetail = () => {
    setModalUserDetailIsOpen(true);
  };

  const closeModalUserDetail = () => {
    setModalUserDetailIsOpen(false);
  };

  return (
    <>
      <div className="admin-content-content-body">
        <div className="admin-content-content-body-headText">{"User List"}</div>
        <table className="admin-table-reportList">
          <thead>
            <tr className="admin-table-reportList-tr-thead">
              <th>ลำดับ</th>
              <th>User Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Img</th>
              <th>Birthday</th>
              <th>Role</th>
              <th>Status</th>
              <th>Management</th>
            </tr>
          </thead>
          <tbody>
            <tr className="admin-table-reportList-tr-tbody">
              <td>{"1"}</td>
              <td>{"1"}</td>
              <td>{"user1"}</td>
              <td>{"user1user1@mail.com"}</td>
              <td>
                <img
                  src={dummyImage}
                  className="admin-table-userList-tr-tbody-userImg"
                  onClick={openModalUserDetail}
                />
              </td>
              <td>{"XX/XX/XXXX"}</td>
              <td>{"ADMIN"}</td>
              <td>{"ACTIVE"}</td>
              <td>{"Management"}</td>
            </tr>
            <tr className="admin-table-reportList-tr-tbody">
              <td>{"2"}</td>
              <td>{"2"}</td>
              <td>{"user2"}</td>
              <td>{"user2user2@mail.com"}</td>
              <td>
                <img
                  src={dummyImage}
                  className="admin-table-userList-tr-tbody-userImg"
                />
              </td>
              <td>{"XX/XX/XXXX"}</td>
              <td>{"USER"}</td>
              <td>{"INACTIVE"}</td>
              <td>{"Management"}</td>
            </tr>
          </tbody>
        </table>
        <div className="admin-content-content-footer"></div>
      </div>

      <ModalUserDetail
        modalUserDetailIsOpen={modalUserDetailIsOpen}
        closeModalUserDetail={closeModalUserDetail}
      />
    </>
  );
}

export default UserManage;
