import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Capture from "../Buttons/Capture";
import Card from "../Cards/Card";
import ProfileCard from "../Cards/ProfileCard";
// import Profile_card from "../Cards/ProfileCard";
// import profile_data from "../Profile/Profile_Data"
import { creator } from "../Creator/Creator_data";
import { user_card } from "./Profile_Data";
import { useParams } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ProfileData, setProfileData] = useState({});
  const [collection, setcollection] = useState(true);

  useEffect(() => {
    const data = creator.filter((data) => data.id == id);
    console.log(data);
    setProfileData(data[0]);
  }, []);
  return (
    <div className="w-11/12 mx-auto my-10 flex md:flex-col">
      <div className="prof_pic w-1/3 md:w-full">
        <div>
          <div className="flex justify-center">
            <img
              src="/prof_background.png"
              alt=""
              className="back"
              style={{ borderRadius: "80px" }}
            />
          </div>
          <div className="relative -top-32">
            <img
              className="mx-auto"
              src={`/${ProfileData?.img}`}
              //   src="prof_user.png"
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="relative -top-24">
          <div className="flex gap-8 justify-center pl-14">
            <h2 className="font-bold text-3xl md:text-2xl">
              {ProfileData?.name}
            </h2>
            <div onClick={() => navigate("/setting")}>
              <img src="/setting.png" alt="" />
            </div>
          </div>
          <p className="text-center font-bold md:text-sm">
            {ProfileData?.user_id}
          </p>
          <div className="prof_des text-center mt-8">
            Yes, so please your Majesty. I did go between them, as I said; but
            more than that, he loved her-for indeed he was mad for her, and
            talk'd of Satan, and of Limbo, and of Furies, and I know not what.
            No, fair Princess; he is the general challenger. I thank it.
          </div>
          <div className="prof_link text-center my-8">www.johndoe.com</div>
          <div className="prof_card">
            <div className="social_media_logo flex gap-4 justify-center mt-2">
              <img src="/facebook_logo.png" alt="facebook" />
              <img src="/insta_logo.png" alt="instagram" />
              <img src="/tweet_logo.png" alt="tweeter" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 md:w-full px-20 lg:px-4 sm:w-full">
        <div className="flex justify-center md:w-full">
          <div
            className=" flex w-2/4 justify-center items-center sm:w-full"
            style={{ backgroundColor: "#C2C2C2", borderRadius: "30px" }}
          >
            <div
              className="w-full text-center"
              // style={{ borderRight: "1px solid #000000" }}
              style={{
                backgroundColor: collection ? "black" : "#C2C2C2",
                borderRadius: "30px",
                color: collection ? "white" : "black",
              }}
            >
              <button
                style={{ fontSize: "18px" }}
                onClick={() => setcollection(true)}
              >
                Collection
              </button>
            </div>
            <div
              className="w-full text-center"
              style={{
                backgroundColor: collection ? "#C2C2C2" : "black",
                borderRadius: "30px",
                color: collection ? "black" : "white",
              }}
            >
              <button
                style={{ fontSize: "18px" }}
                onClick={() => setcollection(false)}
              >
                Creations
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24 my-8 mx-8 md:gap-10 md:mx-4 lg:gap-14 lg:mx-6 sm:grid-cols-1">
          {(() => {
            if (collection) {
              return user_card.map((element) => (
                <ProfileCard props={element} />
              ));
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
