import React from 'react';
import './Card.css';
// import {
//     useParams
//   } from "react-router-dom";
// import Discover_Data from "../Discover/Discover_data"
function BidsCard({props}) {
    console.log()
// useEffect(() => {
//     let { id } = useParams();
//     const Nft=Discover_Data.filter((id)=>{

//     })

// }, [])
    console.log(props);
    return (
        <div className="singleCard">
            <div className="cardimg">
                <img className="w-full" style={{margin: "0"}} src={props.img} alt="" />
            </div>
            <div className="cardheading text-center font-bold text-2xl my-6">
                {props.heading}
            </div>
            <div className="cardLower flex justify-between mx-4 sm:mx-2">
                <div className="price left w-2/5 h-20 mx-2 sm:mx-0">
                    <h4 className="sm:text-sm" style={{fontWeight: "900"}}>CURRENT PRICE</h4>
                    <p>{props.price}</p>
                    {/* <img className="w-8 mt-2" src="setting.png" alt="" /> */}
                </div>
                <div className="right w-3/5 mb-6 pl-4 lg:pl-0 sm:mx-auto">
                    <div className="Owner flex mx-2 items-center gap-3 sm:justify-center">
                        {/* <img src={props.owner.ownerimg} alt="" style={{width: "31px", height: "31px"}} /> */}
                        <div>
                            <h4 className="font-bold text-sm" style={{fontWeight: "900"}}>Your Bid</h4>
                            <p className="text-sm" style={{position: "relative", left: "16px", fontSize: "11px"}}>{props.price}</p>
                        </div>
                    </div>
                    <div className="Creator flex items-center mt-4 mx-2 gap-3 sm:justify-center">
                        <img src={props.creator.creatorimg} alt="" style={{width: "31px", height: "31px"}} />
                        <div>
                            <h4 className="text-sm" style={{fontWeight: "900"}}>CREATOR</h4>
                            <p className="text-sm" style={{position: "relative", left: "16px", fontSize: "11px"}}>@ {props.creator.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidsCard
