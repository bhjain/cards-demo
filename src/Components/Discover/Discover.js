import React, { useState } from "react";
import Card from "../Cards/Card";
import {
  // Page,
  // Navbar,
  // NavbarBackLink,
  // BlockTitle,
  // BlockHeader,
  List,
  ListItem,
  Range,
} from "tailwind-mobile/react";
import "./discover.css";
import { Discover_Data, high_to_low, low_to_high } from "./Discover_data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Discover() {
  const globalState = useSelector((state) => state);

  const [ShowDrop, setShowDrop] = useState(false);
  const [volume, setVolume] = useState(50);
  const [price, setPrice] = useState(150);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(75);

  // const [ShowDrop, setShowDrop] = useState(false);
  const [ShowDrop_Sort_By, setShowDrop_Sort_By] = useState(false);
  const [DATA, setDATA] = useState({
    ALL: Discover_Data,
    CURRENT: Discover_Data,
  });
  const [sort_value, setsort_value] = useState("");
  const sort_price = (val) => {
    let temp = [];
    // alert(val);
    if (val == "low_to_high") {
      // alert("low");
      temp = DATA.CURRENT.sort(low_to_high);
    } else {
      // alert("high");
      temp = DATA.CURRENT.sort(high_to_low);
    }
    setDATA({ ...DATA, CURRENT: temp });
  };
  const recent = () => {
    const temp = DATA.CURRENT.reverse().slice(0, 2);
    setDATA({ ...DATA, CURRENT: temp });
  };
  const filter_by_price = (value) => {
    let temp = [];
    temp = DATA.CURRENT.filter((data) => data.price <= value);
    setDATA({ ...DATA, CURRENT: temp });
  };
  if (!globalState.SHOW_SEARCH_INPUT) {
    return (
      <>
        <div className="mt-10">
          <div className="flex justify-between mx-10 sm:mx-4">
            <div className="filter w-28 text-center py-2 sm:w-32 sm:mb-8">
              {/* <button className="font-light">FILTER</button> */}
              <div className="relative inline-block text-left">
                <div className="flex">
                  <button
                    type="button"
                    className="sm:w-20  inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-white-700 hover:bg-white-50  focus:ring-offset-gray-100 focus:ring-indigo-500 sm:py-0"
                    onClick={() => setShowDrop(!ShowDrop)}
                    // class=""
                    // class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Filter
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  style={{ display: ShowDrop ? "block" : "none", color: "#000000", width: "50vw"}}
                  className="origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mx-auto"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  {/* <div className="px-4 bg-black text-center "> */}
                    {/* <List
                    className="drop_option "
                    style={{ backgroundColor: "black !important" }}
                  > */}
                    {/* {volume}
                    <ListItem
                   
                      innerClassName="flex space-x-4"
                      innerChildren={
                        // <div className="flex-column">
                        <>
                          <span className="text-black text-sm font-bold drop_option">
                            0
                          </span>
                          <Range
                            colors={{
                              valueBg: "bg-white",
                              thumbBgMaterial: "range-thumb:bg-primary",
                            }}
                            value={volume}
                            max={1000}
                            step={10}
                            onChange={(e) => {
                              setVolume(e.target.value);
                              filter_by_price(e.target.value);
                            }}
                          />
                          <span className="text-black text-sm font-bold drop_option">
                            1000
                          </span>
                        </>

                        // </div>
                      }
                    /> */}
                    {/* </List> */}
                  {/* </div> */}



                  <div className="p-4 z-888">
                    <div className="my-4">
                      <h2 className="pb-2 text-xl" style={{fontWeight: "900"}}>Status</h2>
                      <div className="gap-4">
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Buy Now</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">On Auction</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Sold</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Has Offers</button>
                      </div>
                    </div>
                    <div className="my-4">
                      <h2 className="pb-2 text-xl" style={{fontWeight: "900"}}>Price <span className="text-sm font-extrabold">(In INR)</span></h2>
                      <div className="gap-4">
                         {/* <div className="px-4 bg-black text-center "> */}
                    {/* <List
                    className="drop_option "
                    style={{ backgroundColor: "black !important" }}
                  > */}
                    {/* {volume}
                    <ListItem
                   
                      innerClassName="flex space-x-4"
                      innerChildren={
                        // <div className="flex-column">
                        <>
                          <span className="text-black text-sm font-bold drop_option">
                            0
                          </span>
                          <Range
                            colors={{
                              valueBg: "bg-white",
                              thumbBgMaterial: "range-thumb:bg-primary",
                            }}
                            value={volume}
                            max={1000}
                            step={10}
                            onChange={(e) => {
                              setVolume(e.target.value);
                              filter_by_price(e.target.value);
                            }}
                          />
                          <span className="text-black text-sm font-bold drop_option">
                            1000
                          </span>
                        </>

                        // </div>
                      }
                    /> */}
                    {/* </List> */}
                  {/* </div> */}
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Min</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Max</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Apply</button>
                      </div>
                    </div>
                    <div className="my-4">
                      <h2 className="pb-2 text-xl" style={{fontWeight: "900"}}>Market</h2>
                      <div className="gap-4">
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Primary</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Secondary</button>
                      </div>
                    </div>
                    <div className="my-4">
                      <h2 className="pb-2 text-xl" style={{fontWeight: "900"}}>Categories</h2>
                      <div className="gap-4">
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Art</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Music</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Music</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Utility</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Brands</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Influencers</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Photography</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Collectables</button>
                        <button className="filter_btn py-1 px-6 my-2 mx-2">Memes</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute bg-red-500" style={{width: "50vw"}}>
            </div> */}
              </div>
            </div>
            {/* <div className="sortBy w-48 py-2 px-2 text-center sm:w-30">
            <button className="font-light">
              Sort By <span className="font-bold">Recently Aded</span>
            </button>
          </div> */}
            <div className="filter w-44 sm:mb-8 py-2">
              <div
                className="flex justify-center text-sm items-center h-full"
                onClick={() => setShowDrop_Sort_By(!ShowDrop_Sort_By)}
              >
                {/* <button
                type="button"
                className="font-light sm:w-20  "
                // onClick={() => setShowDrop_Sort_By(!ShowDrop_Sort_By)}
                class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50  focus:ring-offset-gray-100 focus:ring-indigo-500"
                // class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              > */}
                Sort By {sort_value}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                {/* </button> */}
              </div>

              <div
                style={{
                  display: ShowDrop_Sort_By ? "block" : "none",
                  width: "11rem",
                  borderRadius: "15px",
                  border:"1px solid white"
                }}
                // className="origin-top-right mt-3 absolute right-0 w-56 rounded-md shadow-lg bg-black text-white ring-1 ring-black ring-opacity-5 focus:ring-2"
                className="origin-top-right absolute mt-3 py-2 bg-white shadow-2xl rounded-md  ring-1 ring-black ring-opacity-5 focus:outline-none mx-auto sm:right-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="" role="none">
                  <div
                    className="drop_option  text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={() => {
                      setShowDrop_Sort_By(!ShowDrop_Sort_By);
                      // sort_price("l")
                      setsort_value("Recent");
                      recent();
                    }}
                  >
                    Recently Added
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm  hover:bg-black hover:text-white"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    onClick={() => {
                      setShowDrop_Sort_By(!ShowDrop_Sort_By);
                      sort_price("low_to_high");
                      setsort_value("Low-High");
                    }}
                  >
                    Price: Low to High
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm  hover:bg-black hover:text-white"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    // style={{fontFamily:"Garet"}}
                    onClick={() => {
                      setShowDrop_Sort_By(!ShowDrop_Sort_By);
                      sort_price("high_to_low");
                      setsort_value("High-Low");
                    }}
                  >
                    Price: High to Low
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Most Viewed
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Recently Sold
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Ending Soon
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Oldest
                  </div>
                  <div
                    className="drop_option text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Highest Last Sale
                  </div>
                  <div
                    style={{
                      display: sort_value != "" ? "block" : "none",
                      backgroundColor: "gray",
                    }}
                    // href=""
                    className="drop_option  text-gray-700 block px-4 py-2 text-sm hover:bg-black hover:text-white "
                    // className="text-white block px-4 py-2 text-sm  hover:bg-gray-500  "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    onClick={() => {
                      setShowDrop_Sort_By(!ShowDrop_Sort_By);
                      // sort_price("high_to_low");
                      setDATA({ ...DATA, CURRENT: DATA.ALL });
                      setsort_value("");
                    }}
                  >
                    Clear All
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="grid grid-cols-3 md:grid-cols-2 justify-between gap-14  my-8 sm:grid-cols-1 w-4/5 sm:w-11/12"
              // style={{ width: "80%" }}
            >
              {/* <Card props={card1} />
                  <Card props={card1} />
                  <Card props={card1} />
                  <Card props={card1} />
                  <Card props={card1} />
                  <Card props={card1} />
                  <Card props={card1} /> */}
              {DATA.CURRENT.map((element) => (
                <Link to={`/nftpage/${element.id}`}>
                  <Card props={element} />
                </Link>
              ))}
            </div>
          </div>
          {(() => {
            if (DATA.CURRENT.length == 0) {
              return (
                <div
                  className="text-center "
                  style={{
                    fontSize: "3rem",
                    height: "40vh",
                  }}
                >
                  !!Oops No Data Found
                </div>
              );
            }
          })()}
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{ height: "70vh" }}
        className="flex justify-center items-center"
      >
        {" "}
        search here
      </div>
    );
  }
}

export default Discover;
