import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImgFile from "../img/unnamed.png";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  small: {
    // width:"10px",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // marginTop:"10px",
    // padding: theme.spacing(1, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));



function Navbar({ Icon, Icon2 }) {
    const [search, setSearch] = useState("");

    const classes = useStyles();


  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div>
            <Link on to="/">
              <img style={{ height: "80px" }} src={ImgFile} layout="fixed" />
            </Link>
          </div>
          <div
            style={{
              width: "200px",
              marginBottom: "20px",
              height: "30px",
              marginTop: "20px",
            }}
            className={classes.search}
          >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </div>

        <div
          style={{ display: "flex", position:"relative", right:"40px" }}
          className="flex  mt-3"
        >
          <div className="group  sm:w-20 flex flex-col cursor-pointer  hover:text-yellow-500 items-center">
            <Icon className="h-10 transform group-hover:transition delay-150 duration-150 " />
            <p className="opacity-0 group-hover:opacity-100 group-hover:transition delay-150 duration-150 font-bold tracking-widest">
              Home
            </p>
          </div>
          <div className="group flex flex-col cursor-pointer hover:text-yellow-500  items-center">
            <Icon2 className="h-10 group-hover:transition delay-150 duration-150 ease-in-out ..." />
            <p className="opacity-0 group-hover:opacity-100 font-bold group-hover:transition delay-150 duration-150 tracking-widest">
              Post
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "#EDD1B0",
            borderRadius: "1.5rem",
            height: "45px",
            width: "200px",
            marginTop: "20px",
            marginRight: "60px",
          }}
        >
          <Avatar className={classes.small}
            style={{
              marginTop: "2px",
              marginLeft: "6px",
            }}
          >
            H
          </Avatar>
          <p className="mt-1 ml-3" style={{ paddingTop: "5px" }}>
            TomAndJerry
          </p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
