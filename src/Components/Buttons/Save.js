import React from 'react'

function Save({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  
  
    return (
      <div>
        <div
          className="login w-40 h-10 flex items-center justify-center lg:w-32 lg:h-8"
          style={{ backgroundColor: `${back}`, color: `${color}` }}
        >
          <button>
            Save
          </button>
        </div>
      </div>
    );
  }

export default Save
  