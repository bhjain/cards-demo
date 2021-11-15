import React from "react";
import { useSelector } from "react-redux";
import "./Login.css";

function Login({ back, color }) {
  
  // console.log(globalState, "<<<<<<<<<<<<<<<<<<");


  return (
    <div>
      <div
        className="login w-40 h-10 flex items-center justify-center lg:w-28 lg:h-8"
        style={{ backgroundColor: `${back}`, color: `${color}` }}
      >
        <button
          className="font-bold"
          onClick={() => localStorage.setItem("login", "true")}
        >
          Log In{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
