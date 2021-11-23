import React from 'react';
import BidsCard from '../Cards/BidsCard';
// import Yourbids from '../Cards/Yourbids';
import './YourBides.css';
const yourbides_cards = [
    {
      img: "card1.png",
      heading: "Abstract Art",
      price: "RS 200",
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
      img: "card3.png",
      heading: "Indian street vendor",
      price: "RS 200",
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
      heading: "Block Head Punk",
      price: "RS 200",
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
function YourBides() {
    return (
        <div style={{minHeight: "84vh"}}>
            <h2 className="text-center font-bold py-8" style={{fontSize: "3rem"}}>Your Bids</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                className="grid grid-cols-3 md:grid-cols-2 justify-between gap-14  my-2 sm:grid-cols-1 pb-14"
                style={{ width: "80%" }}
                >
                {/* <Card props={card1} />
                        <Card props={card1} />
                        <Card props={card1} />
                        <Card props={card1} />
                        <Card props={card1} />
                        <Card props={card1} />
                        <Card props={card1} /> */}
                {yourbides_cards.map((element) => (
                    <BidsCard props={element} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default YourBides
