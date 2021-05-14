import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImgFile from "../img/unnamed.png";



function Navbar({Icon,Icon2}) {

  // const classes = useStyles();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <div>
            <Link on to="/">
              <img style={{ height: "80px" }} src={ImgFile} />
            </Link>
          </div>
          <div style={{ padding: "20px 20px 20px 0" }}>
            <input
              placeholder="Search"
              class="border-2  border-blue-100"
            ></input>
          </div>
        </div>

        <div className="flex mr-40" >
          <div className="group w-12 sm:w-20 flex flex-col cursor-pointer mr-5 hover:text-yellow-500 items-center">
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
            height: "55px",
            width: "200px",
            borderRadius: "30px",
            // marginTop:"13px"
          }}
        >
          <Avatar
            style={{
              height: "50px",
              width: "50px",
              marginTop: "2px",
              marginLeft: "6px",
            }}
          >
            H
          </Avatar>
          <p className="mt-1 ml-3" style={{ paddingTop: "10px" }}>
            TomAndJerry
          </p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
