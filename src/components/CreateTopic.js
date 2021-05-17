import React from "react";
import commentIcon from "../public/images/commentIcon.png";
import redHeartIcon from "../public/images/redHeartIcon.png";
import calendarIcon from "../public/images/calendarIcon.png";
import pinBlackIcon from "../public/images/pinBlackIcon.png";
import pinRedIcon from "../public/images/pinRedIcon.png";
import userIcon from "../public/images/userIcon.png";
import RoomBar from "./RoomBar";

function CreateTopic() {
  const room = [
    {
      id: 1,
      roomName: "FOOD",
    },
    {
      id: 2,
      roomName: "SCIENCE/ENGINEER",
    },
    {
      id: 3,
      roomName: "DIY",
    },
    {
      id: 4,
      roomName: "FICTION",
    },
    {
      id: 5,
      roomName: "IT",
    },
  ];
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
          width: "100%",
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
              width: "auto",
            }}
          >
            <div>CREATE</div>&nbsp;&nbsp;
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
          <form>
            <div
              className="form-div"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label htmlFor="topicName">Topic Name</label>

              <div>
                <input
                  className="form-div"
                  type="text"
                  name="topicName"
                  placeholder="Topic Name"
                  // value={}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <br />
            <br />
            <div className=" form-div">
              <label htmlFor="topicContent">Topic Content</label>

              <textarea
                className="form-div"
                type="text"
                name="topicContent"
                placeholder="Content"
                // value={input.clientEmail}
                // onChange={handleInputChange}
              />
              <form
              // onSubmit={handleUpload}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "none",
                      marginTop: "10px",
                    }}
                  >
                    <input
                      style={{
                        borderBottom: "none",
                      }}
                      type="file"
                      //   onChange={handleFileChange}
                    />
                    <button
                    //   onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                {/* {productImg && (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    src={productImg}
                    alt="product"
                    style={{ width: "40%", height: "40%" }}
                  />
                </>
              )} */}
              </form>
            </div>
            <br />
            <br />
            <div className="form-group form-div">
              <form
              // onSubmit={handleUpload}
              >
                <div>
                  <label htmlFor="userImg">Topic Image</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "none",
                      marginTop: "10px",
                    }}
                  >
                    <input
                      style={{
                        borderBottom: "none",
                      }}
                      type="file"
                      //   onChange={handleFileChange}
                    />
                    <button
                    //   onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                {/* {productImg && (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    src={productImg}
                    alt="product"
                    style={{ width: "40%", height: "40%" }}
                  />
                </>
              )} */}
              </form>
            </div>
            <br />
            <br />
            <div className="form-div">
              <label htmlFor="roomId">Room</label>
              <select
                id="roomId"
                name="roomId"
                // onChange={handleInputChange}
              >
                <option name="roomId" selected>
                  Select Room
                </option>
                {room.map((item) => (
                  <option name="roomId" value={item.id}>
                    {item.roomName}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button>Create Topic</button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ width: "5%", height: "auto" }}></div>
    </>
  );
}

export default CreateTopic;
