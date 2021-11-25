import React from "react";
import Bid from "../Buttons/Bid";
import Card from "../Cards/Card";

const card_val = {
  img: "card1.png",
  heading: "Abstract Art",
  price: 30,
  owner: {
    ownerimg: "owner.png",
    name: "John Doe",
  },
  creator: {
    creatorimg: "owner.png",
    name: "John Doe",
  },
};

function BidPage() {
  return (
    <div className="w-full mt-10 mb-4 " style={{ minHeight: "80vh" }}>
      <div className="congrats flex mx-auto justify-between  w-10/12 md:flex-col" >
        <div
          className="congoCard px-10 w-2/5 md:w-full md:px-6 sm:px-2 mx-auto pb-10 h-4/5 md:"
          style={{
            borderRadius: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <h2 className="text-center text-white text-xl font-bold py-6">
            REVIEW PURCHASE
          </h2>
          <div className="card_div w-4/5 sm:w-5/5 mx-auto">
            <Card props={card_val} />
          </div>
        </div>
        {/* <div className="congoCard px-10 w-2/5 md:w-full md:px-6 sm:px-2 mx-auto pb-10 h-4/5 hidden sm:block" style={{borderRadius: "10px"}}>
                    <h2 className="text-center text-black text-xl font-bold py-6">NFT MINTED !</h2>
                    <div className="card_div w-4/5 sm:w-5/5 mx-auto">
                        <Card props={card_val} />
                    </div>
                </div> */}
        <div className="w-4/5 px-40 lg:px-10 md:w-full md:px-4 md:text-center" >
          <h2
            className="font-bold text-5xl py-6 md:text-3xl px-4"
            style={{ fontWeight: "900" }}
          >
            Abstract Art
          </h2>
          <div
            className="w-6/12 py-2 md:py-1 mx-14 md:mx-auto"
            style={{
              borderBottom: "1px solid #000000",
            }}
          ></div>
          <p className="px-4 pt-4 pb-4 md:hidden" style={{ width: "86%" }}>
            Reserve Price
          </p>
          <p className="px-4 pt-4 pb-4 hidden md:block">Reserve Price</p>
          <p className="text-3xl px-4" style={{ fontWeight: "900" }}>
            Rs 200
          </p>

          <div className="flex gap-2 my-6 md:justify-between">
            <div className="price_btn md:w-3/6 flex w-64 justify-center items-center bg-white p-4 mb-2 md:p-1">
              <h4
                className="w-3/6 text-center font-bold"
                style={{ borderRight: "1px solid #C2C2C2"}}
              >
                YOUR BID
              </h4>
              <input className="w-3/6 pl-2" type="text" placeholder="Rs 0" style={{fontSize:"0.5rem"}}/>
            </div>
            <div
              className="flex justify-center items-center md:w-3/6 py-1"
              style={{
                color: "#FFF",
                backgroundColor: "#000000",
                borderRadius: "25px",
              }}
            >
              <div className="text-center text-sm" style={{fontSize:"0.8rem"}}>
                YOUR BALANCE
                <br />
                <span className="text-center" style={{ fontWeight: "900" }}>
                  2 RS
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-3/5 md:w-full">
            <Bid back={"#FFFF0A"} color={"#000000"} style={{height:"2rem"}} />
          </div>
        </div>
      </div>
      <div className="hist w-10/12 mx-auto py-8 sm:w-full mt-8">
        <div className="text-3xl font-bold pb-8 md:text-center">History</div>
        <div className="hist_div" style={{ backgroundColor: "#FFF" }}>
          <div className="flex items-center justify-center py-4">
            <img src="/owner.png" alt="" />
            <div className="pl-4">
              <div className="font-bold">
                Listed by <span className="font-normal">Name</span>
              </div>
              <div className="text-xs pt-1">14th October 2021, 9:51:30 AM</div>
            </div>
          </div>

          <div>
            <h2 className="text-center font-bold text-2xl">Rs 200</h2>
            <div>
              <div className="mx-auto" style={{ width: "40px" }}>
                <div className="flex justify-center">
                  <div
                    style={{
                      maxWidth: "20px",
                      maxHeight: "20px",
                      minWidth: "20px",
                      minHeight: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#C2C2C2",
                    }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div
                    style={{
                      maxWidth: "2px",
                      maxHeight: "6rem",
                      minWidth: "2px",
                      minHeight: "6rem",
                      borderRadius: "50%",
                      backgroundColor: "#C2C2C2",
                    }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div
                    style={{
                      maxWidth: "20px",
                      maxHeight: "20px",
                      minWidth: "20px",
                      minHeight: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#C2C2C2",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-4">
            <img src="/owner.png" alt="" />
            <div className="pl-4">
              <div className="font-bold">
                Listed by <span className="font-normal">Name</span>
              </div>
              <div className="text-xs pt-1">14th October 2021, 9:51:30 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidPage;
