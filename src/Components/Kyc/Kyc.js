import React, { useState } from 'react'
import Capture from '../Buttons/Capture'
import './Kyc.css'

function Kyc() {
    const[showList, setShowList] = useState(false);
    const[doc, setDoc] = useState("John Doe");
    return (
        <div className="py-10 w-10/12 mx-auto" style={{minHeight: "90vh"}}>
            <h2 className="text-xl" style={{fontWeight: "900"}}>KYC</h2>
            <p className="text-center pt-24 pb-8">Select a document you wish to upload</p>
            <div className="select_drop flex justify-center">
                <div className="dropdown flex w-10/12 justify-between py-4 px-4 items-center" style={{border: "1px solid #C4C4C4", boxSizing: "border-box", borderRadius: "20px"}} onClick={() => {
                  setShowList(!showList);
                }}>
                    <p>{doc}</p>
                    <img className="w-8 h-6" src="rot_tri.png" alt="" />
                </div>
            </div>
            <div className="list mx-auto w-10/12" style={{display: showList ? "block" : "none", left: "10%"}}>
                <div className="list_item mx-auto" onClick={() => {
                    setDoc("Adhar");
                    setShowList(false)
                    }}>Adhar</div>
                <div className="list_item mx-auto" onClick={() => {
                    setDoc("Votar")
                    setShowList(false)
                    }}>Votar</div>
                <div className="list_item mx-auto" onClick={() => {
                    setDoc("Pan Card")
                    setShowList(false)
                    }}>Pan Card</div>
                <div className="list_item mx-auto" style={{border: "none"}} onClick={() => {
                    setDoc("Driving Lisence")
                    setShowList(false)
                    }}>Driving Lisence</div>
            </div>
            <div className="pt-8 flex justify-center">
                <Capture back={"#FFFF0A"} color={"#000000"} />
            </div>
        </div>
    )
}

export default Kyc
