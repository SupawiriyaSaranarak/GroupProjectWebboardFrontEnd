import axios from "../../config/axios";
import React, { useEffect, useState } from "react";

import ModalUserDetail from "./modals-admin/ModalUserDetail";

import { BanIcon, KeyIcon } from "@heroicons/react/outline";
import moment from "moment";

function UserManage() {
  //Modal UserList > UserDetail
  const [modalUserDetailIsOpen, setModalUserDetailIsOpen] = useState(false);

  const openModalUserDetail = (e, item) => {
    setModalUserDetailIsOpen(true);
    // console.log(item);
    setUserDetail(item);
  };

  const closeModalUserDetail = () => {
    setModalUserDetailIsOpen(false);
    setUserDetail();
  };

  //get User List
  const [usersList, setUsersList] = useState();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const resUsers = await axios.get("/admin/user");
      // console.log(resUsers.data.users);
      const {
        data: { users },
      } = resUsers;
      setUsersList(users);
    } catch (err) {
      console.dir(err);
    }
  };
  console.log(usersList);

  return (
    <>
      <div className="admin-content-content-body">
        <div className="admin-content-content-body-headText">{"User List"}</div>
        <table className="admin-table-userList">
          <thead>
            <tr className="admin-table-userList-tr-thead">
              <th>ลำดับ</th>
              <th>
                <div className="admin-table-reportList-tr-thead-longTxt">
                  <div>User </div>
                  <div>Id</div>
                </div>
              </th>
              <th>
                <div className="admin-table-reportList-tr-thead-longTxt">
                  <div>User</div>
                  <div>name</div>
                </div>
              </th>
              <th>Email</th>
              <th>Img</th>
              <th>Birthday</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersList?.map((item, index) => {
              return (
                <tr className="admin-table-reportList-tr-tbody" key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <img
                      src={item.userImg}
                      className="admin-table-userList-tr-tbody-userImg"
                      onClick={(e) => openModalUserDetail(e, item)}
                    />
                  </td>
                  <td>{moment(item.birthDate).format("DD/MM/YYYY")}</td>
                  <td>{item.userRole}</td>
                  <td>{item.userStatus}</td>
                  <td>
                    <div className="admin-table-userList-tr-tbody-management-iconGrp">
                      <div
                        className="admin-table-userList-tr-tbody-management-iconGrp-icon"
                        onClick={(e) => console.log(e.target.id, item)}
                      >
                        <KeyIcon id="icon-active" />
                      </div>
                      <div
                        className="admin-table-userList-tr-tbody-management-iconGrp-icon"
                        onClick={(e) => console.log(e.target.id, item)}
                      >
                        <BanIcon id="icon-ban" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="admin-content-content-footer"></div>
      </div>

      <ModalUserDetail
        modalUserDetailIsOpen={modalUserDetailIsOpen}
        closeModalUserDetail={closeModalUserDetail}
        userDetail={userDetail}
      />
    </>
  );
}

export default UserManage;
