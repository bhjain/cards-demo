import React from 'react'

function Collection({props}) {
    return (
        <div className="singleCard">
            <div className="cardimg">
                <img className="w-full" style={{margin: "0"}} src={props.img} alt="" />
            </div>
            <div className="cardheading text-center font-bold text-lg my-6">
                {props.heading}
                <p className="my-2">{props.subHeading}</p>
                <div className="px-3 text-sm">
                    {props.text}
                </div>
                <img className="ml-4 mt-2 w-8" src="setting.png" alt="" />
            </div>
            {/* <div className="cardLower flex justify-between mx-4">
                <div className="price left w-2/5 h-20 mx-2">
                    <h4 className="font-bold">PRICE</h4>
                    <p>{props.price}</p>
                </div>
                <div className="right w-3/5 mb-6">
                    <div className="Owner flex justify-center mx-2 items-center gap-3">
                        <img src={props.owner.ownerimg} alt="" style={{width: "31px", height: "31px"}} />
                        <div>
                            <h4 className="font-bold">Owner</h4>
                            <p className="text-xs" style={{position: "relative", left: "16px", fontSize: "10px"}}>{props.owner.name}</p>
                        </div>
                    </div>
                    <div className="Creator flex justify-center items-center mt-4 mx-2 gap-3">
                        <img src={props.creator.creatorimg} alt="" style={{width: "31px", height: "31px"}} />
                        <div>
                            <h4 className="font-bold">Owner</h4>
                            <p className="text-xs" style={{position: "relative", left: "16px", fontSize: "10px"}}>{props.creator.name}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Collection
