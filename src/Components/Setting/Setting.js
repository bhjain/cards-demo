import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import CompleteKyc from '../Buttons/CompleteKyc';
import Save from '../Buttons/Save';

function Setting() {
    return (
        <div>
            <div className="w-10/12 mx-auto my-10 md:w-11/12">
                <h2 className="text-2xl font-bold">Settings</h2>
                <div className="pb-10" style={{backgroundColor: "#FFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "30px"}}>
                    <div className="prog_bar px-4 pt-24 mt-10 flex justify-center" style={{borderRadius: "30px"}}>
                        <ProgressBar
                            percent={50}
                            filledBackground="#69F0AE"
                            height={4}
                            width="60%"
                        >
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <div className="min-w-2 min-h-2" style={{ backgroundColor: accomplished ? "#69F0AE" : "#e4e4e4", minHeight: "13px", minWidth: "13px", borderRadius: "50%"}}>
                                </div>
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <div className="min-w-4 min-h-4" style={{ backgroundColor: accomplished ? "#69F0AE" : "#e4e4e4", minHeight: "13px", minWidth: "13px", borderRadius: "50%"}}>
                                </div>
                            )}
                            </Step>
                            <Step transition="scale">
                            {({ accomplished }) => (
                                <div className="min-w-4 min-h-4" style={{ backgroundColor: accomplished ? "#69F0AE" : "#e4e4e4", minHeight: "13px", minWidth: "13px", borderRadius: "50%"}}>
                                </div>
                            )}
                            </Step>
                        </ProgressBar>
                    </div>
                    <div className="flex mx-auto justify-between mt-10 pb-4" style={{padding: "0 10%", borderRadius: "30px"}}>
                        <div className="w-3/12 ">
                            <div className="text-center font-bold text-lg md:text-sm">Register <br />Account</div>
                            <p className="text-center mt-8" style={{fontSize: "10px", color: "#69F0AE"}}>Done!</p>
                        </div>
                        <div className="w-3/12 text-center">
                            <h2 className="text-lg font-bold md:text-sm">2FA</h2>
                            <p className="text-left text-xs pt-2 md:hidden">Secure your account with 2 factor authentication.</p>
                            <p className="text-center mt-6" style={{fontSize: "10px", color: "#69F0AE"}}>Verfied</p>
                        </div>
                        <div className="w-3/12 ">
                            <h2 className="text-center text-lg font-bold md:text-sm">Complete KYC </h2>
                            <p className="text-xs pt-2 md:hidden">Complete your KYC and start trading NFTs on Immutly.</p>
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto flex justify-end">
                        <CompleteKyc back={"#FFFF0A"} color={"#000000"} />
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto flex md:flex-col md:w-full">
                <div className="w-1/4 pt-8 md:w-full md:text-center ">
                    <img className="mx-auto" style={{width: "70%"}} src="creator-1.png" alt="" />
                    <div className="text-center my-2" style={{color: "#4200FF"}}>Change Profile Picture</div>
                </div>
                <div className="w-3/4 md:w-full">
                    <form action="/">
                        <div className="flex justify-between md:flex-col w-3/5 md:w-4/5 md:mx-auto gap-2 md:gap-0">
                            <div>
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="sm:hidden">Full Name</label>
                                
                                <br />
                                <input className="py-2 px-4 md:w-full md:mx-auto my-2 sm:my-0" placeholder="Full Name" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>
                            <div>
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="sm:hidden">Username</label>
                                
                                <br />
                                <input className="py-2 px-4 md:w-full md:mx-auto my-2 sm:my-0" placeholder="Username" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>                        
                        </div>
                        <div className="my-8 md:mx-auto md:flex sm:mt-4 sm:mb-0">
                            <label style={{ fontWeight: "900" }} htmlFor="" className="md:hidden">Bio</label>
                            <br />
                            <textarea className="w-4/5 px-2 py-4 md:w-5/6 md:mx-auto my-2 sm:my-0" name="Bio" id="" placeholder="Bio" cols="30" rows="10" style={{border: "1px solid #C2C2C2", borderRadius: "20px"}}></textarea>
                        </div>
                        <div className="flex justify-between w-4/5 gap-8 text-center my-10 md:flex-col md:gap-0 md:w-5/6 md:mx-auto sm:my-0">
                            <div className="w-1/2 md:w-full">
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="hidden-mobile">Website</label>
                                
                                <br />
                                <input className="py-2 px-4 w-full md:mx-auto my-2 sm:my-0" placeholder="Website" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>
                            <div className="w-1/2 mx-auto md:w-full">
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="hidden-mobile">Instagram</label>
                                
                                <br />
                                <input className="py-2 px-4 w-full md:mx-auto md:w-full my-2 sm:my-0" placeholder="Instagram" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>                        
                        </div>
                        <div className="flex justify-between w-4/5 gap-8 text-center my-10 md:flex-col md:gap-0 md:w-5/6 md:mx-auto sm:my-0">
                            <div className="w-1/2 md:w-full">
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="hidden-mobile">Facebook</label>
                                
                                <br />
                                <input className="py-2 px-4 w-full md:mx-auto my-2 sm:my-0" placeholder="Facebook" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>
                            <div className="w-1/2 mx-auto md:w-full">
                                <label style={{ fontWeight: "900" }} htmlFor="rdfg" className="hidden-mobile">Twitter</label>

                                <br />
                                <input className="py-2 px-4 w-full md:mx-auto md:w-full my-2 sm:my-0" placeholder="Twitter" type="text" style={{border: "1px solid #C2C2C2", boxSizing: "border-box", borderRadius: "20px"}} />
                            </div>                        
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center mb-14 mt-4">
                <Save back={"#FFFF0A"} color={"#000000"} />
            </div>
        </div>
    )
}

export default Setting
