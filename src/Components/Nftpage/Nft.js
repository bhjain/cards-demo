import React from 'react'
import Authentic from '../Buttons/Authentic'
import Bid from '../Buttons/Bid'
import Create from '../Buttons/Create'
import './Nft.css'

function Nft() {
    return (
        <div className="pt-14 pb-8">
            <div className="main_img mx-auto w-4/5 bg-black py-4 sm:w-full">
                <img className="mx-auto" src="card1.png" alt="" />
            </div>
            <div className="w-4/5 flex mx-auto my-4 md:flex-col sm:w-full">
                <div className="mx-auto">
                    <p className="text-sm" style={{color: "#C2C2C2", fontWeight: "900"}}>Share this creation</p>
                    <div className="social_media_logo flex gap-4 justify-center mt-2">
                        <img className="w-6 h-6" src="facebook_logo.png" alt="facebook" />
                        <img className="w-6 h-6" src="insta_logo.png" alt="instagram" />
                        <img className="w-6 h-6" src="tweet_logo.png" alt="tweeter" />
                    </div>
                </div>
                <div className="mx-auto text-center pt-14">
                    <h2 className="font-bold" style={{fontSize: "2rem"}}>Abstract Art</h2>
                    <div
                        className="mx-auto w-10/12 py-2"
                        style={{ borderBottom: "1px solid #C2C2C2" }}
                    ></div>
                    <p className="pt-4">Reserve Price</p>
                    <h2 className="font-bold" style={{fontSize: "2rem"}}>Rs 200</h2>
                    <div className="flex justify-center py-4">
                        <Bid back={"#FFFF00"} color={"#000000"} place={"/"} />
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="right w-3/5 mb-6 mx-auto md:flex md:w-full md:items-center md:justify-center">
                        <div className="Owner flex justify-center mx-2 items-center gap-3">
                            <img src="owner.png" alt="" style={{width: "31px", height: "31px"}} />
                            <div>
                                <h4 className="font-bold">Owner</h4>
                                <p className="text-xs" style={{position: "relative", left: "16px"}}>NAME</p>
                            </div>
                        </div>
                        <div className="Creator flex justify-center items-center mt-4 mx-2 gap-3 md:mt-0">
                            <img src="owner.png" alt="" style={{width: "31px", height: "31px"}} />
                            <div>
                                <h4 className="font-bold">Creator</h4>
                                <p className="text-xs" style={{position: "relative", left: "16px"}}>NAME</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Authentic back={"#000000"} color={"#FFF"} />
                    </div>
                </div>
            </div>
            <div
                className="mx-auto w-10/12 py-2"
                style={{ borderBottom: "1px solid #C2C2C2" }}
            ></div>
            <div className="w-10/12 mx-auto my-8 flex justify-between md:flex-col sm:w-full">
                <div className="w-6/12 bg-black mr-10 md:w-10/12 md:mx-auto">
                    <img className="mx-auto" src="card1.png" alt="" />
                </div>
                <div className="w-5/12 md:w-10/12 md:my-4 md:mx-auto">
                    <div className="text-3xl font-bold pb-8">Description</div>
                    <p>Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her, and talk'd of Satan, and of Limbo, and of Furies, and I know not what.  No, fair Princess; he is the general challenger.  I thank it. More, I prithee, more. I can suck melancholy out of a song, as a weasel sucks eggs.
 More, I prithee, more. He saves my labour by his own approach. </p>
                </div>
            </div>
            <div
                className="mx-auto w-10/12 py-2"
                style={{ borderBottom: "1px solid #C2C2C2" }}
            ></div>
            <div className="hist w-10/12 mx-auto py-8 sm:w-full">
                <div className="text-3xl font-bold pb-8 md:text-center">History</div>
                <div className="hist_div" style={{backgroundColor: "#FFF"}}>
                    <div className="flex items-center justify-center py-4">
                        <img src="owner.png" alt="" />
                        <div className="pl-4">
                            <div className="font-bold">Listed by <span className="font-normal">Name</span></div>
                            <div className="text-xs pt-1">14th October 2021, 9:51:30 AM</div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-center font-bold text-2xl">Rs 200</h2>
                        <div>
                            <div className="mx-auto" style={{width: "40px"}}>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "20px", maxHeight: "20px", minWidth: "20px", minHeight: "20px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "2px", maxHeight: "6rem", minWidth: "2px", minHeight: "6rem", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "20px", maxHeight: "20px", minWidth: "20px", minHeight: "20px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center py-4">
                        <img src="owner.png" alt="" />
                        <div className="pl-4">
                            <div className="font-bold">Listed by <span className="font-normal">Name</span></div>
                            <div className="text-xs pt-1">14th October 2021, 9:51:30 AM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nft
