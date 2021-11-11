import React, { useState } from 'react';
import './Nav.css';
import Login from '../Buttons/Login';
import Register from '../Buttons/Register';

function Nav() {
    const[sidNav, setSideNav] = useState(false);
    return (
        <div className="navigation">
            <div className="largeScreen flex lg:hidden">
                <div className="navLeft flex items-center justify-between w-8/12">
                    <div className="logo">
                        <img src="nft-logo.png" alt="" />
                    </div>
                    <div className="search_box flex items-center">
                        <img src="search.png" alt="" />
                        <form action="/">
                            <input type="text" placeholder="Search"/>
                        </form>
                    </div>
                    <div className="discover px-4">
                        Discover
                    </div>
                    <div className="creator px-4">
                        Creators
                    </div>
                </div>
                <div className="navRight w-4/12 pr-4 flex items-center justify-end">
                    <div className="mt-8">
                        <Login />
                        <Register />
                    </div>
                </div>
            </div>

            <div className="smallScreen hidden lg:block">
                <div className="flex items-center">
                    <div className="small-left w-3/12">
                        <div className="logo">
                            <img className="w-40" src="nft-logo.png" alt="" />
                        </div>
                    </div>
                    <div className="small-mid w-8/12 flex justify-center mt-4">
                        <div className="search_box flex items-center">
                            <img src="search.png" alt="" />
                            <form action="/">
                                <input type="text" placeholder="Search"/>
                            </form>
                        </div>
                    </div>
                    <div className="small-right w-1/12 flex justify-center mt-4" onClick={() => setSideNav(!sidNav)}>
                        <i className="fas fa-bars" style={{fontSize: "20px"}}></i>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="sidbar fixed" style={{display: sidNav ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.4)", minWidth: "100vw", minHeight: "100vh", top: "0"}}>
                    <div className="semiSide w-2/5 bg-white" style={{minHeight: "100vh"}}>
                        <div className="logo flex justify-between px-4 items-center">
                            <img className="w-4/5" src="nft-logo.png" alt="" />
                            <div className="w-1/5">
                                <i className="fas fa-times" style={{fontSize: "30px"}} onClick={() => setSideNav(!sidNav)}></i>
                            </div>
                        </div>
                        <div className="pt-20 pb-20">
                            <div className="discover px-4 py-4 text-center">
                                Discover
                            </div>
                            <div className="creator px-4 py-4 text-center">
                                Creators
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Login />
                        </div>
                        <div className="flex justify-center">
                            <Register />
                        </div>
                    </div>
                    <div className="w-3/5">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
