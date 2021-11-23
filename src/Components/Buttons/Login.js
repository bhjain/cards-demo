import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LOGGED_IN_USER } from "../../Redux/ACTION";
import "./Login.css";

function Login({ back, color }) {
  // console.log(globalState, "<<<<<<<<<<<<<<<<<<");
  const dispatch = useDispatch();
  return (
    <div>
      <div
        // onClick={() => {
        //   dispatch({ type: LOGGED_IN_USER, payload: true });
        // }}
        className="login w-40 h-10 flex items-center justify-center lg:w-28 lg:h-8"
        style={{ backgroundColor: `${back}`, color: `${color}` }}
      >
        <button
          className="font-bold"
          onClick={() => dispatch({ type: LOGGED_IN_USER, payload: true })}
          // onClick={() => localStorage.setItem("login", "true")}
        >
          Log In{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
