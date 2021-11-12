import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({back, color, place}) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="login w-40 h-10 flex items-center justify-center md:w-28 md:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button onClick={() => navigate(place)} className="font-bold">Sign Up</button>
            </div>
        </div>
    )
}

export default Signup
