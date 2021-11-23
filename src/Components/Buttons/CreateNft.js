import React from 'react'
import { Link } from 'react-router-dom';

function CreateNft({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  

    return (
      <div>
        <div className="login w-32 h-10 flex items-center justify-center md:w-28 md:h-8" style={{backgroundColor: `${back}`, color: `${color}`}}>
          <Link to="/createNft">
            <button
              className="font-medium text-sm sm:text-xs"
            >
              Create NFT
            </button>
          </Link>
        </div>
      </div>
    );
  }

export default CreateNft
