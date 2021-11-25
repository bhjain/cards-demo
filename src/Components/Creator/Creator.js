import React from "react";
import { Link } from "react-router-dom";
import "./Creator.css";
import { creator } from "./Creator_data";

function Creator() {
  return (
    <div className="creator py-4">
      <h2 className="text-center pt-10 pb-14 font-bold text-4xl md:pt-4" style={{fontSize:"2.5rem"}}>
        Top Trending Creators
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center mx-32 md:mx-20">
        {creator.map((ind_creator) => (
          <div className="creator_card mx-auto py-8 sm:py-4">
            <Link to={`/profile/${ind_creator?.id}`}>
              <img src={ind_creator.img} alt="" />
            </Link>
            <div className="text-center">
              <div className="name">
                <h2
                  className="font-bold pt-4 pb-1"
                  style={{ fontSize: "1.6rem" }}
                >
                  {ind_creator.name}
                </h2>
              </div>
              <div className="id">
                <p className="font-bold" style={{ fontSize: "0.9rem" }}>
                  {ind_creator.user_id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creator;
