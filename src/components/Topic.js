import React from "react";
import axios from "../config/axios";
import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import emtyHeartIcon from "../public/images/emtyHeartIcon.png";

import editIcon from "../public/images/editIcon.png";
import deleteIcon from "../public/images/deleteIcon.png";
import reportRedIcon from "../public/images/reportRedIcon.png";
import reportBlackIcon from "../public/images/reportBlackIcon.png";
import ReactHtmlParser from "react-html-parser";
import { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

import ModalReportTopic from "./modals/ModalReportTopic";

function Topic() {
  //modal Report
  const [topicDetail, setTopicDetail] = useState();
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

  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [topic, setTopic] = useState();
  const [report, setReport] = useState(topic?.Reports?.length ? true : false);
  const [commentContent, setCommentContent] = useState("");
  const [editComment, setEditComment] = useState(false);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const res = await axios.get(`/topics/active/${id}`);
        setTopic(res.data.topic);
      } catch (err) {
        console.log(err);
        console.dir(err);
      }
    };
    getTopic();
  }, [id]);
  console.log(topic);
  console.log(report);

  const handleReport = () => {
    console.log("report");
    setReport(true);
  };

  const [like, setLike] = useState(false);
  const handleLike = () => {
    console.log(like);
    setLike((prev) => !prev);
  };
  console.log(like);
  const handleEditTopic = () => {};
  const handleDeleteTopic = () => {};

  const handleAddComment = async (e) => {
    try {
      e.preventDefault();
      console.log(commentContent, topic.id);
      const res = await axios.post("/user/comments", {
        commentContent,
        topicId: topic.id,
      });
      console.log(res);
      setTopic((prev) =>
        prev.Comments.push({ commentContent, topicId: topic.id })
      );
      setCommentContent("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditComment = async (e, id) => {
    try {
      e.preventDefault();
      console.log(commentContent, topic.id);
      const res = await axios.patch(`/user/comments/${id}`, {
        commentContent,
        topicId: topic.id,
      });
      setTopic((prev) =>
        prev.Comments.push({ commentContent, topicId: topic.id })
      );
      setCommentContent("");
    } catch (err) {
      console.log(err);
    }
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
                src={topic?.Room?.roomIcon}
                alt="room-icon"
                style={{ width: "50px", height: "50px" }}
              />

              <a
                style={{
                  fontSize: "10px",
                  // color: "gray",
                  textDecoration: "none",
                }}
                onClick={() => history.push(`/room/${topic.Room.id}`)}
              >
                {topic?.Room?.roomName}
              </a>
            </div>
            <div
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "25px",
              }}
            >
              <div>
                <strong>{topic?.topicName}</strong>
              </div>
            </div>
            <div
              className="topic-control-button"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "10%",
              }}
            >
              {user?.id === topic?.User?.id ? (
                <>
                  <div>
                    <button
                      style={{
                        backgroundColor: "#edd1b0",
                        border: "none",
                      }}
                      onClick={handleEditTopic}
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
                      onClick={handleDeleteTopic}
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
                    onClick={handleReport}
                  >
                    <img
                      src={report ? reportRedIcon : reportBlackIcon}
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
              onClick={() => history.push(`/user/${topic.User.id}`)}
            >
              {topic?.User?.username}
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <strong>Date : </strong> &nbsp;
            <span>{new Date(topic?.createdAt).toLocaleDateString()}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <img src={topic?.topicImg} />
          </div>
          <div
            align="justify"
            style={{
              paddingBottom: "20px",
              borderBottom: "solid rgb(167, 167, 167) 1px",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {ReactHtmlParser(topic?.topicContent)}
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
                {topic?.Likes?.length}
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
                {topic?.Comments?.length}
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
            {topic?.Comments?.map((item) => (
              <div
                key={item.id}
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
                    src={item.User.userImg}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50px",
                      margin: "0 15px",
                    }}
                  />
                </div>
                <div>
                  <a
                    onClick={() => history.push(`/user/${item.User.id}`)}
                    style={{}}
                  >
                    <strong>{item.User.username}</strong>
                  </a>
                  {item.User.id === user.id && editComment ? (
                    <form onSubmit={(e) => handleEditComment(e, item.User.id)}>
                      <textarea
                        value={item.commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        style={{ width: "30vw" }}
                      />

                      <button
                        style={{
                          backgroundColor: "#edd1b0",
                          border: "none",
                        }}
                      >
                        Edit Comment
                      </button>
                    </form>
                  ) : (
                    <div>{item.commentContent}</div>
                  )}
                </div>
                {item.User.id === user.id && !editComment ? (
                  <div>
                    <button
                      style={{
                        backgroundColor: "#edd1b0",
                        border: "none",
                      }}
                      onClick={() => setEditComment(true)}
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
              key={user?.id}
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
                  src={user?.userImg}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    margin: "0 15px",
                  }}
                />
              </div>
              <div>
                <form onSubmit={(e) => handleAddComment(e)}>
                  <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
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
