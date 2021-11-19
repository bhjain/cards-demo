import React from 'react'
import CreateNew from '../Buttons/CreateNew'
import CreateNft from '../Buttons/CreateNft'
import ProfileCard from '../Cards/ProfileCard'
import './Dashboard.css'
// import Chart from 'react-apexcharts'
import ChartGraph from './ChartGraph'

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


function Dashboard() {
    return (
        <div className="w-full">
            <div className="w-11/12 my-14 flex lg:w-full sm:block">
                <div className="dashboard_sidebar w-1/5 py-8 text-left pl-14 lg:pl-8 md:pl-2 md:w-2/6 sm:hidden" style={{borderRight: "1px solid #C4C4C4", maxHeight: "100vh"}}>
                    <div className="py-6">Dashboard</div>
                    <div className="py-6">Analytics</div>
                    <div className="py-6">Collaborate</div>
                    <div className="py-6">Plans</div>
                    <div className="flex py-8" >
                        <CreateNft back={"#FFFF0A"} color={"#000000"} />
                    </div>
                </div>
                <div className="dashboard_sidebar hidden sm:block text-center">
                    <div className="py-6">Dashboard</div>
                    <div className="py-6">Analytics</div>
                    <div className="py-6">Collaborate</div>
                    <div className="py-6">Plans</div>
                    <div className="flex py-8 sm:justify-center" >
                        <CreateNft back={"#FFFF0A"} color={"#000000"} />
                    </div>
                </div>
                <div className="w-4/5 px-8 lg:px-2 lg:w-full md:px-0 lg:mx-2 sm:mx-0">
                    <h2 className="text-2xl font-bold sm:text-center">Dashboard</h2>
                    <p className="text-sm my-10 sm:my-4">Sales Overview</p>
                    <div className="flex lg:flex-col">
                        <div className="w-1/2 lg:w-2/3 lg:my-10 bg-white md:w-full mx-auto sm:my-4" >
                            {/* <img src="image_chart.png" alt="" /> */}
                            <ChartGraph />
                        </div>
                        <div className="sche w-1/2 ml-14 text-center lg:w-2/3 md:w-full lg:mx-auto" style={{paddingTop: "5%"}}>
                            <h2 className="text-xl font-bold">Scheduled Launches</h2>
                            <h2 className="text-2xl pt-6">Friday</h2>
                            <p className="text-sm pt-2">15th October 2021</p>
                            <p className="text-lg pt-8">No Scheduled NFT <br />Launch</p>
                        </div>
                    </div>
                    <div className="mr-28 md:mx-0">
                        <p className="mt-10">Your Creations</p>
                        <div className="grid grid-cols-2 gap-24 my-10 mx-8 md:gap-10 md:mx-4 lg:gap-14 lg:mx-6 sm:grid-cols-1">
                            {user_card.map((element) => (
                                <ProfileCard props={element} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-8">
                <CreateNew back={"#FFFF0A"} color={"#000000"} />
            </div>
        </div>
    )
}

export default Dashboard
