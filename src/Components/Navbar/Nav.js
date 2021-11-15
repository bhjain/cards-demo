import React, { useEffect, useState } from "react";
import "./Nav.css";
import Login from "../Buttons/Login";
import Register from "../Buttons/Register";
import { Link} from "react-router-dom";
import Create from "../Buttons/Create";
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router'

function Nav() {
  const [sidNav, setSideNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [smallSearch, setSmallSearch] = useState(false);
  const [logStatus, setLogStatus] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setLogStatus(localStorage.getItem("login"));
  }, [])

  // console.log(logStatus);

  return (
    // Navbar
    <div className="navigation">
      {/* Large screen view */}
      <div className="largeScreen flex lg:hidden py-2 justify-between">
        <div className="navLeft flex items-center justify-between w-4/12">
          <div className="logo">
            <Link to="/">
              <img src="nft-logo.png" alt="" />
            </Link>
          </div>
          <div className="discover px-3">Discover</div>
          <div className="creator px-3" onClick={() => navigate('/creator')}>Creators</div>
        </div>

        
        <div className="navRight w-8/12 flex items-center justify-end">
          <div className="p-3 mr-8 roundSearch" style={{borderRadius: "50%", display: search ? "none" : "block"}} onClick={() => setSearch(true)}>
            <img src="search.png" alt="" />
          </div>
          
          <div className="search_box flex items-center mr-8" style={{display: search ? "flex" : "none"}}>
            <img src="search.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="mt-4 w-1/4 mx-4 px-4" style={{display: logStatus === "true" ? "none" : "block"}}>
            <Link to="/login">
              <Login back={"#000000"} color={"#FFF"} />
            </Link>
            <Link to="/register">
              <Register />
            </Link>
          </div>
          <div className="user_prof items-center gap-8 flex justify-between mr-4" style={{display: logStatus === "true" ? "flex" : "none"}}>
            <div className="1/3">
              <Create back={"#FFFF00"} color={"#000000"} place={"/"} />
            </div>
            <div className="w-2/3 mx-auto">
              <img className="mx-auto" src="user.png" alt="" />
              <div className="userprice text-center mt-4 text-sm">
              $$: Rs 200
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small screen view */}
      <div className="smallScreen hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="9/12 flex items-center" style={{display: smallSearch ? "none" : "flex"}}>
            <div className="small-left">
                <div className="logo">
                  <img className="w-40 sm:w-20" src="nft-logo.png" alt="" />
                </div>
              </div>
              <div className="creator px-4 py-4 text-center md:px-1" style={{fontSize: "4vw"}}>Creators</div>
              <div className="discover px-4 py-4 text-center md:px-1" style={{fontSize: "4vw"}}>Discover</div>


          </div>
          <div className="small-mid w-full justify-between items-center top-0 py-4 px-4 flex" style={{display: smallSearch ? "flex" : "none"}}>
            <div className="sm_search_box flex items-center pl-2 w-11/12">
              <img src="search.png" alt="" />
              <input type="text" placeholder="Search" className="h-10"/>
            </div>
            <div className="w-1/12 pl-4">
              <i
                className="fas fa-times"
                style={{ fontSize: "26px"}}
                onClick={() => setSmallSearch(false)}
              ></i>

            </div>
          </div>
          <div
            className="small-right w-3/12 flex justify-end items-center"

            style={{display: smallSearch ? "none" : "flex"}}
          >
            <i className="fas fa-bars" style={{ fontSize: "20px" }} onClick={() => setSideNav(!sidNav)}></i>
              <div className="p-2 mr-8 ml-8 sm:mx-4 roundSearch sm:hidden" style={{borderRadius: "50%", display: smallSearch ? "none" : "block"}} onClick={() => setSmallSearch(true)}>
                <img src="search.png" alt="" />
              </div>
          </div>
        </div>
      </div>

      {/* Sidebar view */}
      <div className="hidden lg:block relative" style={{ zIndex: "999" }}>
        <div className="sidbar fixed" style={{display: sidNav ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.4)", minWidth: "100vw", minHeight: "100vh", top: "0"}}>
          <div className="w-3/5"></div>
          <div className="semiSide w-2/5 bg-white" style={{ minHeight: "100vh" }}>
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
            <div className="mt-14" style={{display: logStatus === "true" ? "none" : "block"}}>
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
        </div>
      </div>
      <div
        className="mx-auto w-10/12 py-2 lg:hidden"
        style={{ borderBottom: "1px solid #C2C2C2" }}
      ></div>
      <div className="hidden lg:block">
        <div
          className="mx-auto w-10/12 py-2 md:py-1 hidden lg:block"
          style={{ borderBottom: "1px solid #C2C2C2", display: smallSearch ? "none" : "block"}}
        ></div>
      </div>
    </div>
  );
}

export default Nav;