import React from 'react'
import Card from '../Cards/Card'
import './Logout.css'

const card1=[{
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
},
{
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
        ownerimg: "owner.png",
        name: "John Doe"
    },
    creator: {
        creatorimg: "owner.png",
        name: "John Doe"
    }
}]

function Logout() {
    return (
        <div className="mt-10">
            <div className="flex justify-between mx-10">
                <div className="filter w-28 text-center py-2 sm:w-20">
                    <button className="font-light">FILTER</button>
                </div>
                <div className="sortBy w-48 py-2 px-2 text-center sm:w-30">
                    <button className="font-light">Sort By <span className="font-bold">Recently Aded</span></button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div
                className="grid grid-cols-3 md:grid-cols-2 justify-between gap-14  my-8 sm:grid-cols-1"
                style={{ width: "80%" }}
                >                
                    {/* <Card props={card1} />
                    <Card props={card1} />
                    <Card props={card1} />
                    <Card props={card1} />
                    <Card props={card1} />
                    <Card props={card1} />
                    <Card props={card1} /> */}
                    {
                        card1.map((element) => (
                            <Card props={element} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Logout
