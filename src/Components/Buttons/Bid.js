import React from 'react'

function Bid({back, color}) {
    return (
        <div>
            <div className="login w-40 h-12 flex items-center justify-center lg:w-28 lg:h-12" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button className="">BID NOW</button>
            </div>
        </div>
    )
}

export default Bid
