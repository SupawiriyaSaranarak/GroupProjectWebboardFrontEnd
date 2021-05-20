import React from "react";
import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import emtyHeartIcon from "../public/images/emtyHeartIcon.png";
import calendarIcon from "../public/images/calendarIcon.png";
import pinBlackIcon from "../public/images/pinBlackIcon.png";
import pinRedIcon from "../public/images/pinRedIcon.png";
import userIcon from "../public/images/userIcon.png";
import RoomBar from "./RoomBar";
import hotFood from "../public/images/hot-food.png";
import editIcon from "../public/images/editIcon.png";
import deleteIcon from "../public/images/deleteIcon.png";
import reportRedIcon from "../public/images/reportRedIcon.png";
import reportBlackIcon from "../public/images/reportBlackIcon.png";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import ModalReportTopic from "./modals/ModalReportTopic";

function Topic() {
  const [topicDetail, setTopicDetail] = useState();

  //modal Report
  const [modalReportIsOpen, setModalReportIsOpen] = useState(false);

  const openModalReport = (e, topic) => {
    // console.log(e);
    // console.log(topic);

    setModalReportIsOpen(true);
    setTopicDetail(topic);
  };
  // console.log(topicDetail);

  const closeModalReport = () => {
    setModalReportIsOpen(false);
    setTopicDetail();
  };

  const [state, setState] = useState();
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  const handleLike = () => {
    console.log(like);
    setLike((prev) => !prev);
  };
  console.log(like);
  const user = {
    id: 2,
    username: "Tom",
    email: "tomtom@gmail.com",
    userImg:
      "https://res.cloudinary.com/dqns1bgvx/image/upload/v1620360479/ewbccattypcirfphx6uz.jpg",
    userRole: "USER",
  };
  const topic = {
    id: 1,
    topicName: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    room: {
      roomImg: hotFood,
      roomName: "FOOD/DRINK",
    },
    createdAt: "2021-04-05",
    user: {
      id: 2,
      username: "สายฟ้าพายุ",
      userImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    report: { reportStatus: "RECONSIDERED" },
    topicImg:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg",
    topicContent: `Lorem ipsum dolor sit amet consectetur  adipisicing elit. Omnis ipsa tempore alias distinctio dolores, dolorem saepe reiciendis, reprehenderit vitae suscipit velit quas possimus deserunt veniam aspernatur repellat ratione! Accusantium, quia similique placeat dolorum in officia possimus praesentium quidem iure eaque quam sint harum aliquid sit, <br/> <div style={{textAlign: "center"}}> <img style= {{display: "block", margin: "10px 0px"}} src="https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg" /> </div> <br/> tempore laborum non earum! Velit nam sed ipsa, at vitae quidem totam adipisci deserunt omnis odit iusto, provident quo nisi reprehenderit non in vero, nesciunt quas laudantium veniam. Cupiditate natus magnam saepe vero eos totam provident tempore, nihil blanditiis suscipit ipsam ipsa, qui harum! Quo voluptas porro accusantium incidunt rem quos molestiae voluptates quasi nostrum?`,
    like: [
      { id: 1, user: { id: 1, username: "กิ้งก่า", userImg: "" } },
      { id: 7, user: { id: 5, username: "ต้น", userImg: "" } },
      { id: 8, user: { id: 2, username: "เอก", userImg: "" } },
    ],
    commentCount: 2,
    comment: [
      {
        user: {
          id: 1,
          username: "Tom",
          userImg:
            "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        },
        commentContent:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, iure?",
      },
      {
        user: {
          id: 3,
          username: "เอก",
          userImg:
            "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        },
        commentContent:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, iure?",
      },
    ],
  };
  return (
    <>
      <div style={{ width: "5%", height: "auto" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "20px",

          borderRadius: "10px",
          width: "90%",
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
              display: "flex",
              flexDirection: "row",
              color: "rgb(167, 167, 167)",
              height: "auto",
            }}
          >
            <div>TOPIC</div>
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
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "20px",
            backgroundColor: "#edd1b0",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <div className="topic-name">
            <div className="room-section">
              <img
                src={topic.room.roomImg}
                alt="room-icon"
                style={{ width: "50px", height: "50px" }}
              />

              <a
                style={{
                  fontSize: "10px",
                  color: "gray",
                  textDecoration: "none",
                }}
                onClick={() => console.log(topic.room.roomName)}
              >
                {topic.room.roomName}
              </a>
            </div>
            <div
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <h3>{topic.topicName}</h3>
            </div>
            <div
              className="topic-control-button"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "10%",
              }}
            >
              {user.id === topic.user.id ? (
                <>
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
                  <div>
                    {" "}
                    <button
                      style={{
                        backgroundColor: "#edd1b0",
                        border: "none",
                      }}
                    >
                      <img
                        src={deleteIcon}
                        alt="edit-icon"
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </button>
                  </div>{" "}
                </>
              ) : (
                <div>
                  <button
                    style={{
                      backgroundColor: "#edd1b0",
                      border: "none",
                    }}
                    onClick={
                      topic.report?.reportStatus === "REPORT"
                        ? null
                        : () => console.log("report")
                    }
                  >
                    <img
                      src={
                        topic.report?.reportStatus === "REPORT"
                          ? reportRedIcon
                          : reportBlackIcon
                      }
                      alt="block-red-icon"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </button>
                </div>
              )}
              <div onClick={(e) => openModalReport(e, topic)}>Report</div>
            </div>
          </div>
          <div style={{ fontSize: "14px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Author : </strong>
            <a
              style={{ color: "brown" }}
              onClick={() => console.log(topic.user.id)}
            >
              {topic.user.username}
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <strong>Date : </strong> &nbsp;
            <span>{topic.createdAt}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <img src={topic.topicImg} />
          </div>
          <div
            align="justify"
            style={{
              paddingBottom: "20px",
              borderBottom: "solid rgb(167, 167, 167) 1px",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {ReactHtmlParser(topic.topicContent)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#edd1b0",
                  border: "none",
                }}
                onClick={handleLike}
              >
                <img
                  src={like ? redHeartIcon : emtyHeartIcon}
                  alt="like-icon"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </button>
              &nbsp;&nbsp;
              <button
                style={{
                  backgroundColor: "#edd1b0",
                  border: "none",
                }}
                // onClick={handleShowlike}
              >
                {topic.like.length}
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#edd1b0",
                  border: "none",
                }}
              >
                <img
                  src={commentIcon}
                  alt="comment-icon"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </button>
              &nbsp;&nbsp;
              <button
                style={{
                  backgroundColor: "#edd1b0",
                  border: "none",
                }}
              >
                {topic.comment.length}
              </button>
            </div>
          </div>

          {/* dashboard header */}
          <div
            className="dashboad-header"
            style={{
              backgroundColor: "#edd1b0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
                height: "auto",
                backgroundColor: "#edd1b0",
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
                display: "flex",
                flexDirection: "row",
                color: "rgb(167, 167, 167)",
                height: "auto",
              }}
            >
              <div>COMMENT</div>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {topic.comment.map((item) => (
              <div
                key={item.user.id}
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
                    src={item.user.userImg}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50px",
                      margin: "0 15px",
                    }}
                  />
                </div>
                <div>
                  <a onClick={() => console.log(item.user.id)} style={{}}>
                    <strong>{item.user.username}</strong>
                  </a>
                  <div>{item.commentContent}</div>
                </div>
                {item.user.id === user.id ? (
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
                ) : null}
              </div>
            ))}

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
                <form onSubmit={() => console.log("send comment")}>
                  <textarea
                    onChange={(e) => console.log(e.target.value)}
                    style={{ width: "30vw" }}
                  />

                  <button
                    style={{
                      backgroundColor: "#edd1b0",
                      border: "none",
                    }}
                  >
                    Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* <div>
            <textarea
              style={{ width: "100%", height: "auto" }}
              value={state}
              onChange={(e) => {
                console.log(e.target.value);
                setState(e.target.value);
              }}
            />
            <div>{ReactHtmlParser(state)}</div>
          </div>
          <div
            id="1"
            contentEditable="true"
            value={text}
            onChange={(e) => console.log(text)}
          >
            {text}
          </div> */}
        </div>
      </div>
      <div style={{ width: "5%", height: "auto" }}></div>

      <ModalReportTopic
        modalReportIsOpen={modalReportIsOpen}
        closeModalReport={closeModalReport}
        topicDetail={topicDetail}
        setTopicDetail={setTopicDetail}
      />
    </>
  );
}

export default Topic;
