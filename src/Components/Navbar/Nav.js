import React, { useEffect, useState } from "react";
import "./Nav.css";
import Login from "../Buttons/Login";
import Register from "../Buttons/Register";
import { Link, useNavigate } from "react-router-dom";
import Create from "../Buttons/Create";
// import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import CreateNft from "../Buttons/CreateNft";
import { LOGGED_IN_USER } from "../../Redux/ACTION";
// import { SHOW_SEARCH_INPUT } from "../../Redux/ACTION";

function Nav() {
  const [sidNav, setSideNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [smallSearch, setSmallSearch] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [logStatus, setLogStatus] = useState();
  const [search_Data, setSearch_Data] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setLogStatus(localStorage.getItem("login"));
  }, []);
  // const loginStatus = useSelector(state => state.LOGGED_IN_USER)
  const checkLoggedIn = useSelector((state) => state.LOGGED_IN_USER);
  // const checkLoggedIn = localStorage.getItem("login");

  // console.log(logStatus);
  // setTimeout(function() { your_func(); }, 5000);

  return (
    // Navbar
    <div
      className="navigation "
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        overflow: "none",
        backgroundColor: "#FFFEFE",
      }}
    >
      {/* Large screen view */}
      <div className="largeScreen flex lg:hidden  justify-between px-4">
        <div className="navLeft flex items-center justify-between w-4/12">
          <div className="logo">
            <Link to="/">
              <img src="/nft-logo.png" alt="" />
            </Link>
          </div>
          <Link to="/discover">
            <div className="discover px-3">Discover</div>
          </Link>
          <Link to="/creator">
            <div className="creator px-3">Creators</div>
          </Link>
        </div>

        <div className="navRight w-8/12 flex items-center justify-end">
          <div
            className="p-3 mr-8 roundSearch"
            style={{ borderRadius: "50%", display: search ? "none" : "block" }}
            onClick={() => {
              setSearch(true);
              setTimeout(() => {
                // alert("ok");
                if (search_Data.trim() === "") {
                  setSearch(false);
                }
              }, 5000);
            }}
          >
            <img src="/search.png" alt="" />
          </div>

          <div
            className="search_box flex items-center mr-8"
            style={{ display: search ? "flex" : "none" }}
          >
            <img src="/search.png" alt="" />
            <input
              value={search_Data}
              onChange={(e) => setSearch_Data(e.target.value)}
              type="text"
              placeholder="Search"
            />
          </div>
          <div
            className="mt-4 w-1/4 mx-4 px-4"
            style={{ display: checkLoggedIn ? "none" : "block" }}
          >
            <Link to="/login">
              <Login back={"#000000"} color={"#FFF"} />
            </Link>
            <Link to="/register">
              <Register />
            </Link>
          </div>
          <div
            className="user_prof items-center gap-8 flex justify-between mr-4"
            style={{ display: checkLoggedIn ? "flex" : "none" }}
          >
            <div className="1/3">
              <Create
                back={"#FFFF00"}
                color={"#000000"}
                place={"/creatorspace"}
              />
            </div>
            <div className="w-2/3 mx-auto mt-3 " style={{display:"flex",alignItems: "center",flexDirection:"column"}}>
              <div  onClick={() => setDropDown(!dropdown)}>
                {(() => {
                  if (checkLoggedIn) {
                    return <img className="mx-auto" src="/user.png" alt="" style={{width:"55px",height:"55px"}}/>;
                  } else {
                    return (
                      <div>
                        <div
                          className="text-center bg-black text-white my-1 px-4 py-1"
                          style={{
                            border: "1px solid black",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          Sign Up
                        </div>
                        <div
                          className="text-center bg-white text-black my-1 px-4 py-1"
                          style={{
                            border: "1px solid white",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          Login
                        </div>
                      </div>
                    );
                  }
                })()}
                {/* <img className="mx-auto" src="user.png" alt="" /> */}
              </div>
              <div className="userprice text-center mt-1 text-sm">
                $$: Rs 200
              </div>
              <div
                className="absolute bg-white top-24 right-0"
                style={{ display: dropdown ? "block" : "none" }}
              >
                <Link to="/dashboard">
                  <div className="list_1 py-2 text-center px-8">Dashboard</div>
                </Link>
                <div className="list_1 py-2 text-center">Analytics</div>
                <div className="list_1 py-2 text-center">Collaborate</div>
                <div className="list_1 py-2 text-center">Plans</div>
                <div
                  className="list_1 py-2 text-center"
                  onClick={() => {
                    setLogStatus(false);
                    // localStorage.setItem("login", false);
                    dispatch({ type: LOGGED_IN_USER, payload: false });
                  }}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small screen view */}
      <div className="smallScreen hidden lg:block ">
        {/* <div className="smallScreen "> */}
        <div className="flex items-center justify-between">
          <div
            className="10/12 flex items-center "
            // style={{ display: smallSearch ? "none" : "flex" }}
            style={{ display: smallSearch ? "none" : "flex" }}
          >
            <div className="small-left">
              <div className="logo">
                <Link to="/">
                  <img className="w-40 sm:w-32" src="/nft-logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div
              className="discover px-4 py-4 text-center md:px-1"
              style={{ fontSize: "4vw", fontFamily: "grat" }}
            >
              <Link to="discover">Discover</Link>
            </div>
            <div
              className="creator px-4 py-4 text-center md:px-1"
              style={{ fontSize: "4vw" }}
            >
              <Link to="/creator">Creator</Link>
            </div>
          </div>
          {/* <div className="small-mid w-full justify-between items-center top-0 py-4 px-4 flex" style={{display: smallSearch ? "flex" : "none"}}> */}
          {/*  Big Search Bar for mobile screen */}
          <div
            className="small-mid w-full justify-between items-center absolute top-0 py-4 px-1 flex"
            style={{ display: smallSearch ? "flex" : "none" }}
          >
            <div className="logo w-3/120">
              <Link to="/">
                <img className="w-40 sm:w-32" src="/nft-logo.png" alt="" />
              </Link>
            </div>
            <div className="sm_search_box flex items-center pl-2 w-8/12">
              <img src="/search.png" alt="" />
              <input type="text" placeholder="Search" className="h-10" />
            </div>
            <div className="w-1/12 pl-2">
              {/* Cross Icon */}
              <i
                className="fas fa-times"
                style={{ fontSize: "20px", color: "grey" }}
                onClick={() => {
                  setSmallSearch(false);
                  dispatch({ type: "SHOW_SEARCH_INPUT", payload: false });
                  // setSmallSearch(false);
                }}
              ></i>
            </div>
          </div>
          {/* >>>>>>>>>>>>>>>>>>>>> */}
          <div
            className="small-right flex justify-end items-center h-full py-4 pr-2"
            style={{ display: smallSearch ? "none" : "flex" }}
          >
            <div
              className="p-2 mr-8 ml-8 sm:mx-4 roundSearch sm:hidden"
              style={{
                borderRadius: "50%",
                display: smallSearch ? "none" : "block",
              }}
              onClick={() => {
                setSmallSearch(true);
                dispatch({ type: "SHOW_SEARCH_INPUT", payload: true });
              }}
            >
              <img src="/search.png" alt="" />
            </div>
            <i
              className="fas fa-bars"
              style={{ fontSize: "20px" }}
              onClick={() => {
                setSideNav(!sidNav);
              }}
            ></i>
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
          <div className="w-3/5"></div>
          <div
            className="semiSide w-2/5 bg-white"
            style={{ minHeight: "100vh" }}
          >
            <div className="logo flex justify-between px-4 items-center">
              <img className="w-5/5" src="/nft-logo.png" alt="" />

            </div>
            {/* <div>
              <Link to="/dashboard">
                <div className="py-2 text-center">Dashboard</div>
              </Link>
              <div className="py-2 text-center">Analytics</div>
              <div className="py-2 text-center">Collaborate</div>
              <div className="py-2 text-center">Plans</div>
            </div> */}

            <div
              className="mt-14"
              style={{ display: logStatus === "true" ? "none" : "block" }}
            >
              <div className="flex justify-center">
                <Login back={"#000000"} color={"#FFF"} />
              </div>
              <div className="flex justify-center">
                <Register />
              </div>
            </div>
            <div
              className="mt-8 items-center gap-8 mx-auto relative"
              style={{ display: logStatus === "true" ? "block" : "none" }}
            >
              <div className="flex justify-center">
                <Link to="/creatorspace">
                  <Create back={"#FFFF00"} color={"#000000"} place={"/"} />
                </Link>
              </div>
              <div>
                <div className="flex justify-center my-8 px-1">
                  <div className="w-2/6">
                    <Link to="/profile">
                      <img className="w-14" src="/user.png" alt="" />
                    </Link>
                  </div>
                  <div className="w-4/6">
                    <h4 className="font-extrabold pl-2">John Doe</h4>
                    <p className="text-sm pl-2">@johndoe</p>
                    <div className="userprice text-center mt-4 text-sm w-10/12 px-1 py-1">
                      $$: <span className="font-extrabold">Rs 200</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="pl-4">
                <div className="my-4" style={{fontSize: "16px"}}>Profile</div>
                <div className="my-4" style={{fontSize: "16px"}}>Wallet</div>
                <div className="my-4" style={{fontSize: "16px"}}>Become a creator</div>
                <div className="my-4" style={{fontSize: "16px"}}>Your Bids</div>
                <div className="my-4 font-extrabold" style={{fontSize: "16px"}}>Logout</div>
              </div>
              <div className="flex justify-center items-center md:mt-4">
                <i
                  className="fas fa-times text-center"
                  style={{
                    fontSize: "15px",
                    border: "1px solid grey",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                  }}
                  onClick={() => setSideNav(!sidNav)}
                ></i>
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
          style={{
            borderBottom: "1px solid #C2C2C2",
            display: smallSearch ? "none" : "block",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Nav;
