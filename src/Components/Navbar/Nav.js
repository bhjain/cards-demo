import React, { useEffect, useState } from "react";
import "./Nav.css";
import Login from "../Buttons/Login";
import Register from "../Buttons/Register";
import { Link } from "react-router-dom";
import Create from "../Buttons/Create";

function Nav() {
  const [sidNav, setSideNav] = useState(false);
  const [logStatus, setLogStatus] = useState();

  useEffect(() => {
    setLogStatus(localStorage.getItem("login"));
  }, [])

  // console.log(logStatus);

  return (
    // Navbar
    <div className="navigation">
      {/* Large screen view */}
      <div className="largeScreen flex lg:hidden">
        <div className="navLeft flex items-center justify-between w-8/12">
          <div className="logo">
            <Link to="/">
              <img src="nft-logo.png" alt="" />
            </Link>
          </div>
          <div className="search_box flex items-center">
            <img src="search.png" alt="" />
            <form action="/" style={{ height: "1rem" }}>
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="discover px-4">Discover</div>
          <div className="creator px-4">Creators</div>
        </div>
        <div className="navRight w-4/12 pr-4 flex items-center justify-end">
          <div className="mt-8" style={{display: logStatus === "true" ? "none" : "block"}}>
            <Link to="/login">
              <Login back={"#000000"} color={"#FFF"} />
            </Link>
            <Link to="/register">
              <Register />
            </Link>
          </div>
          <div className="mt-8 items-center gap-8" style={{display: logStatus === "true" ? "flex" : "none"}}>
            <Create back={"#FFFF00"} color={"#000000"} place={"/"} />
            <div>
              <img src="user.png" alt="" />
              <div className="userprice text-center mt-4">
              $$: Rs 200
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small screen view */}
      <div className="smallScreen hidden lg:block">
        <div className="flex items-center">
          <div className="small-left w-3/12">
            <div className="logo">
              <img className="w-40" src="nft-logo.png" alt="" />
            </div>
          </div>
          <div className="small-mid w-8/12 flex justify-center mt-4">
            <div className="search_box flex items-center">
              <img src="search.png" alt="" />
              <form action="/">
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </div>
          <div
            className="small-right w-1/12 flex justify-center mt-4"
            onClick={() => setSideNav(!sidNav)}
          >
            <i className="fas fa-bars" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
      </div>

      {/* Sidebar view */}
      <div className="hidden lg:block relative" style={{ zIndex: "999" }}>
        <div
          className="sidbar fixed"
          style={{
            display: sidNav ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            minWidth: "100vw",
            minHeight: "100vh",
            top: "0",
          }}
        >
          <div
            className="semiSide w-2/5 bg-white"
            style={{ minHeight: "100vh" }}
          >
            <div className="logo flex justify-between px-4 items-center">
              <img className="w-4/5" src="nft-logo.png" alt="" />
              <div className="w-1/5">
                <i
                  className="fas fa-times"
                  style={{ fontSize: "15px",border:"1px solid grey",borderRadius:"2px" }}
                  onClick={() => setSideNav(!sidNav)}
                ></i>
              </div>
            </div>
            <div className="pt-20 pb-20">
              <div className="discover px-4 py-4 text-center">Discover</div>
              <div className="creator px-4 py-4 text-center">Creators</div>
            </div>
            <div style={{display: logStatus === "true" ? "none" : "block"}}>
              <div className="flex justify-center">
                <Login back={"#000000"} color={"#FFF"} />
              </div>
              <div className="flex justify-center">
                <Register />
              </div>
            </div>
            <div className="mt-8 items-center gap-8 mx-auto relative" style={{display: logStatus === "true" ? "block" : "none"}}>
              <div className="flex justify-center">
                <Create back={"#FFFF00"} color={"#000000"} place={"/"} />
              </div>
              <div>
                <div className="flex justify-center my-4">
                  <img src="user.png" alt="" />
                </div>
                <div className="userprice text-center mt-4 w-1/2 mx-auto">
                $$: Rs 200
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5"></div>
        </div>
      </div>
      <div
        className="mx-auto w-10/12 py-4"
        style={{ borderBottom: "1px solid #C2C2C2" }}
      ></div>
    </div>
  );
}

export default Nav;
