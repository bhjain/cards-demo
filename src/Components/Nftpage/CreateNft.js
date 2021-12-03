import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import Mint from "../Buttons/Mint";
import Dnd from "./Dnd";
import "./Nft.css";


const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2%",
  paddingBottom: "10%",
  borderWidth: 2,
  borderRadius: 30,
  borderColor: "#000000",
  borderStyle: "dashed",
  backgroundColor: "#C2C2C2",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2874f0",
};

const acceptStyle = {
  borderColor: "#2874f0",
  backgroundColor: "#FFF",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function CreateNft(props) {


  const[action, setAction] = useState("Buy Now")

  // const {
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   isDragAccept,
  //   isDragReject,
  // } = useDropzone();

  // const style = useMemo(
  //   () => ({
  //     ...baseStyle,
  //     ...(isDragActive ? activeStyle : {}),
  //     ...(isDragAccept ? acceptStyle : {}),
  //     ...(isDragReject ? rejectStyle : {}),
  //   }),
  //   [isDragActive, isDragReject, isDragAccept]
  // );

  return (
    <div className="mt-10 mb-4">
      {/* <div className="w-4/5 mx-auto p-2" style={{ backgroundColor: "#C2C2C2" }}>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <img style={{ width: "20%" }} src="" alt="" />
          <p
            className="w-1/3 md:w-full text-center"
            style={{ color: "#000000", fontSize: "2rem" }}
          >
            Drag & Drop Your Creation
          </p>
        </div>
      </div> */}
      <Dnd />
      <div className="data w-4/5 mx-auto mt-10 sm:mt-6">
        <form className="flex-col" action="">
          <p className="mb-2" style={{fontWeight: "900"}}>Enter the title for your NFT</p>
          <input
            className="img_input w-full mb-4 py-2 px-4"
            type="text"
            placeholder="Title"
          />
          <p className="mb-2" style={{fontWeight: "900"}}>Write a description about your NFT, what is the story behind it and what does it signify?</p>
          <textarea
            className="w-full mt-2 px-4 py-2"
            id="w3review"
            name="w3review"
            rows="5"
            cols="50"
            placeholder="Description"
          ></textarea>
        </form>
      </div>
      <div className="flex justify-center sm:hidden mt-10">
        <div className="flex justify-between items-center px-8 py-4 relative cursor-pointer" style={{backgroundColor: "#E1E1E1", width: "24vw", borderRadius: "30px"}}>
          <div onClick={() => setAction("On Auction")}>On Auction</div>
          <div className="flex justify-center items-center" style={{backgroundColor: "#000000", minWidth: "11vw", position: "absolute", minHeight: "100%", borderRadius: "30px", left: action === "On Auction" ? "0" : "", right: action === "Buy Now" ? "0" : "", color: "#FFF"}}>{action}</div>
          <div onClick={() => setAction("Buy Now")}>Buy Now</div>
        </div>
      </div>
      <div className="justify-center sm:text-sm hidden sm:flex" style={{fontSize: "13px"}}>
        <div className="flex justify-between items-center px-8 sm:px-6 py-4 sm:py-2 relative cursor-pointer w-4/6" style={{backgroundColor: "#E1E1E1", borderRadius: "30px"}}>
          <div onClick={() => setAction("On Auction")}>On Auction</div>
          <div className="flex justify-center items-center min-w-2/6 px-4" style={{minWidth: "34%", backgroundColor: "#000000", position: "absolute", minHeight: "100%", borderRadius: "30px", left: action === "On Auction" ? "0" : "", right: action === "Buy Now" ? "0" : "", color: "#FFF"}}>{action}</div>
          <div onClick={() => setAction("Buy Now")}>Buy Now</div>
        </div>
      </div>
      <p className="text-center mt-3 mb-10 text-xs">Place your NFT ‘On Auction’ or let the community ‘Buy Now’</p>
      <div className="flex justify-center mt-4 md:flex-col">
        <div className="text-center mr-4 md:mx-auto md:m-0">
          <div className="price_btn flex w-56 justify-center items-center bg-white p-4 mb-2 md:p-3">
            <h4
              className="w-3/6 text-center font-bold"
              style={{ borderRight: "1px solid #C2C2C2" }}
            >
              Price
            </h4>
            <input className="w-3/6 pl-4" type="text" placeholder="Rs 0" />
          </div>
          <p style={{ fontSize: "8px" }}>
            Price you would like your NFT to be listed at.
          </p>
        </div>
        <div className="text-center mr-4 md:mx-auto md:mt-4">
          <div className="price_btn flex w-56 justify-center items-center bg-white p-4 mb-2 md:p-3">
            <h4
              className="w-4/6 text-center font-bold"
              style={{ borderRight: "1px solid #C2C2C2" }}
            >
              Royalty %
            </h4>
            <input className="w-2/6 pl-4" type="text" placeholder="0%" />
          </div>
          <p style={{ fontSize: "8px" }}>
            Royalty % is the amount you receive on each<br /> successful sale of your NFT.
          </p>
        </div>
      </div>



      <div className="category w-5/6 mx-auto mt-14">
        <h1 className="text-xl" style={{fontWeight: "900"}}>Categories</h1>
        <h4 className="text-xs my-4">Select all the appropriate categories that describe your NFT</h4>
        <div>
          <div className="gap-4 py-4 px-2" style={{border: "0.2px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}}>
          <button className="filter_btn py-1 px-6 my-2 mx-2">Art</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Music</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Sport/Games</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Utility</button><button className="filter_btn py-1 px-6 my-2 mx-2">Buy Now</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Brand</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Influencers</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Photography</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Collectables</button>
            <button className="filter_btn py-1 px-6 my-2 mx-2">Memes</button>
          </div>
        </div>
      </div>


      <div className="mt-10 mb-1 pb-8">
        <h4 className="text-2xl w-2/6 mx-auto md:w-5/6 md:text-center md:text-xl">
          Service fee{" "}
          <span className="font-bold">
            0% <br></br>
          </span>
          You will receive{" "}
          <span className="font-bold">
            0.0 NFC <span className="text-sm">0 Rs </span>
          </span>
        </h4>
        <div className="flex justify-center mt-10">
          <Mint back={"#FFFF0A"} color={"#000000"} />
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
