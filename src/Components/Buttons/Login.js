import React from 'react';
import './Login.css';

function Login({back, color}) {
    return (
        <div>
            <div className="login h-10 flex items-center justify-center lg:w-28 lg:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button className="font-bold" onClick={() => localStorage.setItem("login", 'true')}>Log In</button>
            </div>
        </div>
    )
}

export default Login
