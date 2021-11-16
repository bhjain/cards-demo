import React from 'react'

function Mint({back, color}) {
    return (
        <div>
            <div
                className="login w-48 h-14 flex items-center justify-center lg:w-28 lg:h-10"
                style={{ backgroundColor: `${back}`, color: `${color}` }}
            >
                <button
                className="text-xl"
                >
                Mint 
                </button>
            </div>
        </div>
    )
}

export default Mint
