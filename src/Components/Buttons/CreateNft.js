import React from 'react'

function CreateNft({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  

    return (
      <div>
        <div
          className="login w-32 h-8 flex items-center justify-center lg:w-28 lg:h-8 sm:w-20"
          style={{ backgroundColor: `${back}`, color: `${color}` }}
        >
          <button
            className="font-medium text-sm sm:text-xs"
          >
            Create NFT
          </button>
        </div>
      </div>
    );
  }

export default CreateNft
