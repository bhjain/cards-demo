import React from 'react'
import Card from '../Cards/Card'

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
  }

function Congracts() {
    return (
        <div className="w-full mt-10 mb-4" style={{minHeight: "80vh"}}>
            <div className="congrats flex justify-center mx-auto w-10/12 md:flex-col">
                <div className="congoCard px-10 w-2/5 md:w-full md:px-6 sm:px-2 mx-auto pb-10 h-4/5" style={{borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                    <h2 className="text-center text-white text-xl font-bold py-6">NFT MINTED !</h2>
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
                <div className="w-3/5 px-14 lg:px-10 md:w-full md:px-4">
                    <h2 className="font-bold text-5xl py-6 md:text-3xl" style={{fontWeight: "900"}}>Congratulations!</h2>
                    <p className="text-sm px-4 pt-4 pb-14" style={{width: "86%"}}>Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her, and talk'd of Satan, and of Limbo, and of Furies, and I know not what.  No, fair Princess; he is the general challenger.  I thank it. More, I prithee, more. I can suck melancholy out of a song, as a weasel sucks eggs.
                       More, I prithee, more. He saves my labour by his own approach.
                    </p>
                    <div className="text-center w-3/5 mx-auto bg-white lg:w-4/5 sm:w-full" style={{borderRadius: "50px"}}>
                        <h2 className="text-2xl font-bold py-4">Next Steps</h2>
                        <p className="font-bold text-lg" style={{color: "#C4C4C4", fontWeight: "900"}}>Share your creation</p>
                        <div className="social_media_logo flex gap-4 justify-center my-4">
                            <img src="facebook_logo.png" alt="facebook" />
                            <img src="insta_logo.png" alt="instagram" />
                            <img src="tweet_logo.png" alt="tweeter" />
                        </div>
                        <div>
                            <div className="mx-auto" style={{width: "40px"}}>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "14px", maxHeight: "14px", minWidth: "14px", minHeight: "14px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "2px", maxHeight: "3rem", minWidth: "2px", minHeight: "3rem", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "14px", maxHeight: "14px", minWidth: "14px", minHeight: "14px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                            </div>
                        </div>
                        <p className="font-bold my-4" style={{color: "#C4C4C4"}}>Get Noticed</p>
                        <div>
                            <div className="mx-auto" style={{width: "40px"}}>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "14px", maxHeight: "14px", minWidth: "14px", minHeight: "14px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "2px", maxHeight: "3rem", minWidth: "2px", minHeight: "3rem", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                                <div className="flex justify-center">
                                    <div style={{maxWidth: "14px", maxHeight: "14px", minWidth: "14px", minHeight: "14px", borderRadius: "50%", backgroundColor: "#C2C2C2"}}></div>

                                </div>
                            </div>
                        </div>
                        <p className="font-bold mt-4 mb-10 pb-4" style={{color: "#C4C4C4"}}>Sell</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Congracts
