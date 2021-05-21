import React, { useState, useEffect } from "react";
import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import calendarIcon from "../public/images/calendarIcon.png";
import pinBlackIcon from "../public/images/pinBlackIcon.png";
import pinRedIcon from "../public/images/pinRedIcon.png";
import userIcon from "../public/images/userIcon.png";
import axios from "../config/axios";

function TopicList() {
  const [lastedTopic, setLastedTopi] = useState([]);
  const [hotTopic, setHotTopic] = useState([]);

  const fetchLastedTopic = async () => {
    try {
      const res = await axios.get("topics/latest-topics");
      setLastedTopi(res.data.lastestTopics);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHotTopic = async () => {
    try {
      const res = await axios.get("topics/hot-topics");
      setHotTopic(res.data.topicss);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(hotTopic);

  useEffect(() => {
    fetchLastedTopic();
    fetchHotTopic();
  }, []);

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
        <div style={{ height: "20px" }}> </div>
        {/* dashboard header */}
        <div className="topic-list-box">
          <div
            style={{
              width: "100%",
              borderBottom: "solid black 1px",
            }}
          >
            <h2>
              <b>Hot Topics</b>
            </h2>
          </div>
          {/* dashboard topic item */}
          {hotTopic?.map((item) => {
            // console.log(item);
            return (
              <div className="topic-item" key={item.id}>
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
                    src={item?.Room?.roomIcon}
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
                      <strong>{item.topicName.slice(0, 40) + "..."}</strong>
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
                      />
                      &nbsp;&nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
                        {item?.User?.username}
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
                      &nbsp;&nbsp;{item.createdAt.slice(0, -14)}
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
                      {item?.Likes?.length}
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
                      {item?.Comments?.length}
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
            );
          })}
          {/* dashboard topic item */}
        </div>
        <div style={{ height: "50px" }}> </div>

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
          {lastedTopic?.map((item) => {
            // console.log(item);
            return (
              <div className="topic-item" key={item.id}>
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
                    src={item?.Room?.roomIcon}
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
                      <strong>{item?.topicName?.slice(0, 35) + "..."}</strong>
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
                        src={item?.User?.userImg}
                      />{" "}
                      &nbsp;&nbsp;
                      <a href="#" style={{ textDecoration: "none" }}>
                        {item?.User?.username}
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
                      {item?.createdAt?.slice(0, -14)}
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
                      {item?.Likes?.length}
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
                      {item?.Comments?.length}
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
                    src={item?.pin === "YES" ? pinRedIcon : pinBlackIcon}
                  />
                </div>
              </div>
            );
          })}
          {/* dashboard topic item */}
        </div>
      </div>

      <div style={{ width: "5%", height: "auto" }}></div>
    </>
  );
}

export default TopicList;
