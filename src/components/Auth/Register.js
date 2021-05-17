import React from "react";

function Register() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
        backgroundColor: "#edd1b0",
        borderRadius: "10px",
        width: "30%",
      }}
    >
      <div>REGISTER</div>
      <br />
      <form>
        <div
          className="form-div"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input
              className="form-div"
              type="text"
              name="username"
              placeholder="Username"
              // value={}
              // onChange={handleInputChange}
            />
          </div>
        </div>
        <br />
        <div className=" form-div">
          <label htmlFor="email">Email</label>

          <input
            className="form-div"
            type="text"
            name="email"
            placeholder="Email"
            // value={input.clientEmail}
            // onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="form-div">
          <label htmlFor="password">Password</label>

          <input
            className="form-div"
            type="password"
            name="password"
            placeholder="Password"
            // value={}
            // onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="form-div">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <div>
            <input
              className="form-div"
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              // value={}
              // onChange={handleInputChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group form-div">
          <form
          // onSubmit={handleUpload}
          >
            <div>
              <label htmlFor="userImg">User Image</label>
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
        <div className="form-div">
          <label htmlFor="checkinDate">Birth Date</label>
          <input
            type="date"
            name="checkinDate"
            //   value={input.checkinDate}
            //   onChange={handleInputChange}
          />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
