import React from "react";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/Login/LoginForm";
import Nav from "./Components/Navbar/Nav";

function Main() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <LoginForm /> */}
      <div
        className="flex justify-center items-center "
        style={{ minHeight: "70vh", fontSize: "2rem", fontFamily: "'Garet', sans-serif"}}
      >
        Home Screen
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
