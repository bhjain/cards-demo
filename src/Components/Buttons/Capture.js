import React from 'react'

function Capture({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  

    return (
      <div>
        <div
          className="login w-48 h-10 flex items-center justify-center lg:w-28 lg:h-8"
          style={{ backgroundColor: `${back}`, color: `${color}` }}
        >
          <button
            className="font-bold"
            onClick={() => localStorage.setItem("login", "true")}
          >
            Capture
          </button>
        </div>
      </div>
    );
  }
export default Capture
