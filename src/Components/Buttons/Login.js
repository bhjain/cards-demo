import React from 'react';
import './Login.css';

function Login({back, color}) {
    return (
        <div>
            <div className="login w-40 h-10 flex items-center justify-center md:w-28 md:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
                <button className="font-bold" onClick={() => localStorage.setItem("login", 'true')}>Log In</button>
            </div>
        </div>
    )
}

export default Login
