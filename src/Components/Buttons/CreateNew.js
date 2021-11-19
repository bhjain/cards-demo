import React from 'react'

function CreateNew({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  

    return (
      <div>
        <div
          className="login w-32 h-8 flex items-center justify-center lg:w-28 lg:h-8"
          style={{ backgroundColor: `${back}`, color: `${color}` }}
        >
          <button
            className="font-medium text-sm"
          >
            Create New
          </button>
        </div>
      </div>
    );
  }

export default CreateNew
