import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({back, color, place}) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="login w-40 h-10 flex items-center justify-center lg:w-28 lg:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button onClick={() => navigate(place)} className="font-bold">Sign Up</button>
            </div>
        </div>
    )
}

export default Signup
