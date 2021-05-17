import React from "react";
import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import calendarIcon from "../public/images/calendarIcon.png";
import pinBlackIcon from "../public/images/pinBlackIcon.png";
import pinRedIcon from "../public/images/pinRedIcon.png";
import userIcon from "../public/images/userIcon.png";

function UserTopicList() {
  const hotTopics = [
    {
      id: 1,
      createdAt: "2021-01-09",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 1,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 50,
      comment: 60,
      pin: "YES",
    },
    {
      id: 2,
      createdAt: "2021-02-14",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 3,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 80,
      comment: 1000,
      pin: "NO",
    },
    {
      id: 3,
      createdAt: "2021-03-14",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 6,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 960,
      comment: 1350,
      pin: "YES",
    },
  ];
  const latestTopics = [
    {
      id: 1,
      createdAt: "2021-01-09",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 1,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 50,
      comment: 60,
      pin: "YES",
    },
    {
      id: 2,
      createdAt: "2021-02-14",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 3,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 80,
      comment: 1000,
      pin: "NO",
    },
    {
      id: 3,
      createdAt: "2021-03-14",
      topicName:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim sint ad praesentium ut rerum incidunt soluta, velit magnam, consectetur dignissimos reprehenderit aliquid officiis adipisci.",
      room: {
        id: 6,
        roomIcon: "http://pngimg.com/uploads/light/light_PNG14440.png",
      },
      user: {
        username: "Lorem, ipsum.",
        email: "aa@gmail.com",
      },
      like: 960,
      comment: 1350,
      pin: "YES",
    },
  ];
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
        <div className="topic-list-box"></div>

        <div style={{ height: "20px" }}> </div>

        <div className="topic-list-box">
          <div
            style={{
              width: "100%",
              borderBottom: "solid black 1px",
            }}
          >
            <h2>
              <b>Latest Topics</b>
            </h2>
          </div>
          {/* dashboard topic item */}
          {latestTopics.map((item) => (
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
                  src={item.room.roomIcon}
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
                      src={userIcon}
                    />{" "}
                    &nbsp;&nbsp;
                    <a href="#" style={{ textDecoration: "none" }}>
                      {item.user.username}
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
                    {item.createdAt}
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
                    {item.like}
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
                    {item.comment}
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
