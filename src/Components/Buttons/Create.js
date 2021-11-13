import React from 'react'
import { useNavigate } from 'react-router'

function Create({back, color, place}) {

    const navigate = useNavigate()
    return (
        <div>
            <div className="login w-28 h-10 flex items-center justify-center md:w-28 md:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button onClick={() => navigate(place)} className="font-bold">Create</button>
            </div>
        </div>
    )
}

export default Create
