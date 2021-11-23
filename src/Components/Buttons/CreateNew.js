import React from 'react'
import { Link } from 'react-router-dom';

function CreateNew({ back, color }) {
  
    // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  

    return (
      <div>
        <div
          className="login w-40 h-8 flex items-center justify-center lg:w-28 lg:h-8"
          style={{ backgroundColor: `${back}`, color: `${color}` }}
        >
          <Link to="/creatorspace">
            <button
              className="font-medium text-sm"
            >
              Create New
            </button>
          </Link>
        </div>
      </div>
    );
  }

export default CreateNew
