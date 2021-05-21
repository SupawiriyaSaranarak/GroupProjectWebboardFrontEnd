import React, { useState, useContext, useEffect } from "react";

import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import calendarIcon from "../public/images/calendarIcon.png";

import pinBlackIcon from "../public/images/pinBlackIcon.png";
import pinRedIcon from "../public/images/pinRedIcon.png";

import userIcon from "../public/images/userIcon.png";

import { AuthContext } from "../contexts/AuthContextProvider";

import moment from "moment";
import axios from "../config/axios";

function UserTopicList() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [myLastTopic, setMyLastTopic] = useState([]);

  useEffect(() => {
    getUserLastTopic();
  }, []);

  const getUserLastTopic = async () => {
    try {
      const resUserTopic = await axios.get("/topics//mytopic");
      // console.log(resUserTopic.data.topics);
      const {
        data: { topics },
      } = resUserTopic;
      setMyLastTopic(topics);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(myLastTopic);

  return (
    <>
      <div style={{ width: "5%", height: "auto" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "auto",
        }}
      >
        {/* dashboard header */}
        <div className="dashboad-header">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              height: "auto",
            }}
          >
            <div
              style={{
                height: "50%",
                borderBottom: "solid rgb(167, 167, 167) 1px",
              }}
            ></div>
            <div></div>
          </div>
          <div
            style={{
              width: "2%",
            }}
          ></div>
          <div
            style={{
              color: "rgb(167, 167, 167)",
              height: "auto",
            }}
          >
            DASHBOARD
          </div>
          <div
            style={{
              width: "2%",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              height: "auto",
            }}
          >
            <div
              style={{
                height: "50%",
                borderBottom: "solid rgb(167, 167, 167) 1px",
              }}
            ></div>
            <div></div>
          </div>
        </div>
        {/* dashboard header */}
        {/* <div className="topic-list-box">
          <div
            key={user.id}
            style={{
              width: "90%",
              borderBottom: "solid grey 1px",
              marginBottom: "10px",
              paddingBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={user.userImg}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50px",
                  margin: "0 15px",
                }}
              />
            </div>
            <div>
              <a onClick={() => console.log(user.id)} style={{}}>
                <strong>{user.username}</strong>
              </a>
              <div style={{ marginTop: "5px", fontSize: "12px" }}>
                <span>
                  <b>Role:</b>&nbsp;&nbsp; {user.userRole}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Status:</b>&nbsp;&nbsp;
                  <span
                    style={{
                      color: user.userStatus === "ACTIVE" ? "green" : "grey",
                    }}
                  >
                    {user.userStatus}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <button
                style={{
                  backgroundColor: "#edd1b0",
                  border: "none",
                }}
              >
                <img
                  src={editIcon}
                  alt="edit-icon"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </button>
            </div>
          </div>
        </div> */}
        <div
          className="topic-list-box"
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            key={user.id}
            style={{
              width: "90%",

              marginBottom: "10px",
              paddingBottom: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={user.userImg}
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "100px",
                margin: "0 15px",
                objectFit: "cover",
                overflow: "hidden",
                objectPosition: "50% 50%",
              }}
            />
            <a onClick={() => console.log(user.id)}>
              <h1>{user.username}</h1>{" "}
            </a>
          </div>
        </div>

        <div className="topic-list-box">
          <div
            style={{
              width: "100%",
              borderBottom: "solid black 1px",
            }}
          >
            <h2>
              <b>{user.username}'s Topics</b>
            </h2>
          </div>
          {/* dashboard topic item */}
          {myLastTopic?.map((item) => (
            <div className="topic-item">
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={item.Room.roomIcon}
                />
              </div>
              <div
                style={{
                  width: "55%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <strong>{item.topicName.slice(0, 35) + "..."}</strong>
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={item.User.userImg}
                    />{" "}
                    &nbsp;&nbsp;
                    <a href="#" style={{ textDecoration: "none" }}>
                      {item.User.username}
                    </a>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={calendarIcon}
                    />
                    &nbsp;&nbsp;
                    {moment(item.createdAt).format("DD/MM/YYYY ,HH:mm:ss")}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                    }}
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={redHeartIcon}
                    />
                  </div>
                  <div
                    style={{
                      width: "60%",
                    }}
                  >
                    {item.Likes.length}
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                    }}
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={commentIcon}
                    />
                  </div>
                  <div
                    style={{
                      width: "60%",
                    }}
                  >
                    {item.Comments.length}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "15%",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={item.pin === "YES" ? pinRedIcon : pinBlackIcon}
                />
              </div>
            </div>
          ))}
          {/* dashboard topic item */}
        </div>
      </div>

      <div style={{ width: "5%", height: "auto" }}></div>
    </>
  );
}

export default UserTopicList;
