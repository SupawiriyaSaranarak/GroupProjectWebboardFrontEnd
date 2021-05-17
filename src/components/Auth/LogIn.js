import React from "react";

function LogIn() {
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
      <div>LOG IN</div>
      <br />
      <form>
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
