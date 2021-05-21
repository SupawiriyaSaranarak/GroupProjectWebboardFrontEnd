import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import localStorageService from "../services/localStorageService"
import { AuthContext } from "../contexts/AuthContextProvider";
import { useContext } from "react";



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const token = localStorageService.getToken();
  const { user } = useContext(AuthContext);

  const history = useHistory();

  console.log(user);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorageService.clearToken();
    history.push("/");
  };

  return (
    <div>
      <IconButton
        style={{
          border: "none",
          outline: "none",
        }}
        onClick={handleClick}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        {user.userRole === "ADMIN" &&<MenuItem onClick={handleLogOut}>Admin Page</MenuItem>}
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
