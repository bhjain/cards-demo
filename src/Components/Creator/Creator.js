import React from 'react';
import './Creator.css';

const creator = [
    {
        img: "creator-1.png",
        name: "John Doe",
        user_id: "@johndoe"
    },
    {
        img: "creator-2.png",
        name: "John Doe",
        user_id: "@johndoe"
    },
    {
        img: "creator-3.png",
        name: "John Doe",
        user_id: "@johndoe"
    },
    {
        img: "creator-4.png",
        name: "John Doe",
        user_id: "@johndoe"
    },
    {
        img: "creator-5.png",
        name: "John Doe",
        user_id: "@johndoe"
    },
    {
        img: "creator-6.png",
        name: "John Doe",
        user_id: "@johndoe"
    }
]

function Creator() {
    return (
        <div className="creator py-4">
            <h2 className="text-center pt-10 pb-14 font-bold text-3xl md:pt-4">Top Trending Creators</h2>
            <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center mx-32 md:mx-20">
                {
                    creator.map((ind_creator) => (
                        <div className="creator_card mx-auto py-8">
                            <img src={ind_creator.img} alt="" />
                            <div className="text-center">
                                <div className="name">
                                    <h2 className="font-bold pt-4 pb-2" style={{fontSize: "2rem"}}>{ind_creator.name}</h2>
                                </div>
                                <div className="id">
                                    <p className="font-bold" style={{fontSize: "1.3rem"}}>{ind_creator.user_id}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Creator
