import React from "react";
import { Link } from "react-router-dom";
import Login from "../Buttons/Login";
import Next from "../Buttons/Next";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";

function RegisterScreen() {
  return (
    <div>
      {/* <Nav /> */}
      <div
        className="flex justify-center items-center pt-10 pb-20"
        style={{ minHeight: "60vh" }}
      >
        <div className="login_form w-4/5 flex md:flex-col rounded-3xl md:w-11/12">
          <div className="log_form_left w-1/2 md:w-full md:rounded-t-3xl md:rounded-bl-none rounded-l-3xl">
            <div className="imf_cont w-4/5 mx-auto md:hidden">
              <div style={{ zIndex: "1" }}>
                <img
                  className="relative -bottom-20 float-right w-3/5"
                  src="login_1.png"
                  alt="login_1"
                  style={{ zIndex: "8" }}
                />
                <img
                  className="-top-10 relative pl-8 w-6/12"
                  src="login_2.png"
                  alt="login_2"
                />
              </div>
            </div>
            <div className="pb-8 hidden md:block" style={{ zIndex: "1" }}>
              <img
                className="relative float-right w-2/5 -left-10 top-4"
                src="login_1.png"
                alt="login_1"
                style={{ zIndex: "8" }}
              />
              <img
                className="relative pl-8 w-1/3 left-20 top-10 "
                src="login_2.png"
                alt="login_2"
              />
            </div>
            <h4
              className="text-center pb-20 md:hidden"
              style={{ fontWeight: "900", fontSize: "3vw" }}
            >
              Turn Your Ideas <br />
              Into Reality
            </h4>
            <h4 className="text-center py-4 font-bold text-lg hidden md:block">
              Turn Your Ideas Into Reality
            </h4>
          </div>
          <div className="log_form_right w-1/2 md:w-full pl-8 py-8 md:pl-2 md:pt-4">
            <h4
              className="md:hidden"
              style={{ fontSize: "2vw", fontWeight: "900" }}
            >
              Sign Up
            </h4>
            <h4 className="hidden md:block font-bold text-lg text-center">
              Sign Up
            </h4>
            <p className="my-14 text-center md:my-6">Sign In With Google</p>
            <p
              className="text-center md:hidden"
              style={{ color: "#C4C4C4", fontSize: "2vw", fontWeight: "900" }}
            >
              Or
            </p>
            <h4
              className="hidden md:block font-bold text-lg text-center"
              style={{ color: "#C4C4C4" }}
            >
              Or
            </h4>
            <div className="w-11/12 mx-auto my-10 md:w-full md:px-2 md:my-4">
              <form action="/">
                <div className="md:text-center">
                  <label style={{ fontWeight: "900" }} htmlFor="">
                    Name <span>*</span>{" "}
                  </label>
                  <br />
                  <input
                    className="w-4/5 mt-2"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mt-4 md:text-center">
                  <label style={{ fontWeight: "900" }} htmlFor="">
                    Email <span>*</span>{" "}
                  </label>
                  <br />
                  <input
                    className="w-4/5 mt-2"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="mt-4 md:text-center">
                  <label style={{ fontWeight: "900" }} htmlFor="">
                    Username <span>*</span>{" "}
                  </label>
                  <br />
                  <input
                    className="w-4/5 mt-2"
                    type="text"
                    name=""
                    id=""
                    placeholder="Username"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-center w-4/5 md:w-full">
              <Next back={"#FFFF0A"} color={"#000000"} place={"/register2"} />
            </div>
            <p className="w-4/5 text-center pt-4 text-xs md:w-full">
              Already have an account?
              <Link to="/login" className="font-bold">
                {" "}
                Log In{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RegisterScreen;
