import React from 'react'
import CreateNft from '../Buttons/CreateNft'
import './Creator.css'
import { Discover_Data } from '../Discover/Discover_data'
import Card from '../Cards/Card'
import Collection from '../Cards/Collection'
import { Link } from 'react-router-dom'

function CreateNew(){
    return(
        <div className="create_new_card flex items-center justify-center text-center" style={{minHeight: "70vh"}}>
            <div>
                <h2 className="text-center text-5xl">+</h2>
                <h2 className="text-2xl">CREATE NEW</h2>
            </div>
        </div>
    )
}

const card_data = Discover_Data;
const collection_card = [{
    img: "card3.png",
    heading: "People of Indian Streets",
    subHeading: "Items 5",
    text: "Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her."
}]

function CreatorSpace() {
    return (
        <div className="w-full my-14">
            <div className="flex sm:flex-col">
                <div className="dashboard_sidebar w-1/5 py-8 text-left pl-14 lg:pl-8 md:pl-2 md:w-2/6 sm:hidden" style={{borderRight: "1px solid #C4C4C4", maxHeight: "100vh"}}>
                    <div className="py-6">
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </div>
                    <div className="py-6">
                        <Link to="/">
                            Analytics
                        </Link>
                    </div>
                    <div className="py-6">
                        <Link to="/">
                            Collaborate
                        </Link>
                    </div>
                    <div className="py-6">
                        <Link to="/">
                            Plans
                        </Link>
                    </div>
                    <div className="flex py-8" >
                        <CreateNft back={"#FFFF0A"} color={"#000000"} />
                    </div>
                </div>
                <div className="dashboard_sidebar hidden sm:block text-center sm:w-full">
                    <div className="py-6">Dashboard</div>
                    <div className="py-6">Analytics</div>
                    <div className="py-6">Collaborate</div>
                    <div className="py-6">Plans</div>
                    <div className="flex py-8 sm:justify-center" >
                        <CreateNft back={"#FFFF0A"} color={"#000000"} />
                    </div>
                </div>
                <div className="creator_space w-3/5 sm:w-full">
                    <h2 className="mx-14 text-4xl font-bold pb-14">Creators Space</h2>
                    <p className="mx-14 my-4">Your Collections</p>
                    <div className="1st_card_div grid grid-cols-2 gap-24 mx-14 lg:grid-cols-1">
                        <CreateNew />
                        {
                            <Collection props={collection_card[0]} />
                        }
                    </div>
                    <p className="mx-14 my-14">Unatached Creation</p>
                    <div className="1st_card_div grid grid-cols-2 gap-24 mx-14 lg:grid-cols-1">
                        <CreateNew />
                        {
                            <Card props={card_data[0]} />
                        }
                    </div>
                    <div className="1st_card_div grid grid-cols-2 gap-24 mx-14 lg:grid-cols-1 my-10">
                        {
                            // card_data.map((singleCard) => (
                                <Card props={card_data[0]} />
                            // ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatorSpace
