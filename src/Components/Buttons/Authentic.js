import React from 'react'

function Authentic({back, color}) {
    return (
        <div>
            <div className="login w-40 h-10 flex items-center justify-center lg:w-32 md:w-28 sm:w-24 lg:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button className="font-bold sm:text-sm flex items-center justify-center">Authenticity</button>
            </div>
        </div>
    )
}

export default Authentic
