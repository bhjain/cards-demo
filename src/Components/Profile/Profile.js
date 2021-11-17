import React from 'react';
import Card from '../Cards/Card';
import ProfileCard from '../Cards/ProfileCard';
const user_card = [
    {
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
    },
    {
      img: "card2.png",
      heading: "Abstract Art",
      price: 100,
      owner: {
        ownerimg: "owner.png",
        name: "John Doe",
      },
      creator: {
        creatorimg: "owner.png",
        name: "John Doe",
      },
    }
]
function Profile() {
    return (
        <div className="w-11/12 mx-auto my-10 flex md:flex-col">
            <div className="prof_pic w-1/3 md:w-full">
                <div>
                    <div className="flex justify-center">
                        <img src="prof_background.png" alt="" className="back" style={{borderRadius: "80px"}}/>

                    </div>
                    <div className="relative -top-32">
                        <img className="mx-auto" src="prof_user.png" alt="" style={{borderRadius: "50%"}} />
                    </div>
                </div>
                <div className="relative -top-24">
                    <div className="flex gap-8 justify-center pl-14">
                        <h2 className="font-bold text-3xl md:text-2xl">John Doe</h2>
                        <img src="setting.png" alt="" />
                    </div>
                    <p className="text-center font-bold md:text-sm">@johndoe</p>
                    <div className="prof_des text-center mt-8">
                    Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her, and talk'd of Satan, and of Limbo, and of Furies, and I know not what.  No, fair Princess; he is the general challenger.  I thank it. 
                    </div>
                    <div className="prof_link text-center my-8">
                    www.johndoe.com
                    </div>
                    <div className="prof_card">
                        <div className="social_media_logo flex gap-4 justify-center mt-2">
                            <img src="facebook_logo.png" alt="facebook" />
                            <img src="insta_logo.png" alt="instagram" />
                            <img src="tweet_logo.png" alt="tweeter" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 md:w-full px-20 md:px-4">
                <div className="flex justify-center md:w-full">
                    <div className="prof_btn flex w-2/4 py-4 justify-center items-center px-2" style={{backgroundColor: "#C2C2C2", borderRadius: "30px"}}>
                        <div className="w-full text-center" style={{borderRight: "1px solid #000000"}}>
                            <button>Collection</button>
                        </div>
                        <div className="w-full text-center">
                            <button>Creations</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-20 mx-8 md:gap-10 md:mx-4 lg:gap-14 lg:mx-6 sm:grid-cols-1">
                    {user_card.map((element) => (
                        <ProfileCard props={element} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
