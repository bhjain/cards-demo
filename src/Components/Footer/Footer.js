import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div className="footer md:hidden">
        <div
          className="mx-auto w-10/12"
          style={{ borderBottom: "1px solid #C2C2C2" }}
        ></div>
        <div className="px-8 flex justify-between items-center py-2">
          <div className="footer_left w-3/12">
            <img className="z-1" src="nft-logo.png" alt="" />
            <p className="pl-4 " style={{ fontSize: "14px" }}>
              Yes, so please your Majesty. I did go between them, as I said; but
              more than that, he loved her-for indeed he was mad for her, and
              talk'd of Satan, and of Limbo, and of Furies, and I know not what.
              No, fair Princess; he is the general challenger.
            </p>
          </div>
          <div className="footer_center w-5/12 text-center pt-28">
            <div className="social_media_logo flex gap-4 justify-center">
              <img src="facebook_logo.png" alt="facebook" />
              <img src="insta_logo.png" alt="instagram" />
              <img src="tweet_logo.png" alt="tweeter" />
            </div>
            <p className="pt-4" style={{ fontSize: "11px" }}>
              2021. Immutly. All Rights Reserved.
            </p>
          </div>
          <div className="footer_right w-4/12 flex justify-between">
            <div className="flex-col">
              <h4 style={{ fontWeight: "900", fontSize: "18px" }}>
                Marketplace
              </h4>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                  Create
                </Link>
              </p>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                  Discover
                </Link>
              </p>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                  Creators
                </Link>
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: "900", fontSize: "18px" }}>Company</h4>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "16px" }}>
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "16px" }}>
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "16px" }}>
                  Community Guidelines
                </Link>
              </p>
              <p>
                <Link to="/" style={{ fontWeight: "400", fontSize: "16px" }}>
                  Help
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer_small_screen my-15 hidden md:block"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <div
          className="footer_left mx-auto w-4/5"
          style={{ borderTop: "1px solid #C2C2C2" }}
        >
          <img className="z-1 mx-auto" src="nft-logo.png" alt="" />
          {/* <p className="pl-4" style={{ fontSize: "14px" }}>
            Yes, so please your Majesty. I did go between them, as I said; but
            more than that, he loved her-for indeed he was mad for her, and
            talk'd of Satan, and of Limbo, and of Furies, and I know not what.
            No, fair Princess; he is the general challenger.
          </p> */}
        </div>
        <div
          className="footer_center w-4/5 text-center py-4 mx-auto my-2"
          style={
            {
              // borderTop: "1px solid #C2C2C2",
              // borderBottom: "1px solid #C2C2C2",
            }
          }
        >
          <div className="social_media_logo flex gap-4 justify-center">
            <img src="facebook_logo.png" alt="facebook" />
            <img src="insta_logo.png" alt="instagram" />
            <img src="tweet_logo.png" alt="tweeter" />
          </div>
        </div>
        <div className="footer_right w-5/5  text-center">
          {/* ------------- */}
          {/* <div className="w-1/2 text-center">
            <h4 style={{ fontWeight: "900", fontSize: "18px" }}>Marketplace</h4>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Create
              </Link>
            </p>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Discover
              </Link>
            </p>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Creators
              </Link>
            </p>
          </div> */}

          {/* ------------------ */}
          <h4 style={{ fontWeight: "900", fontSize: "18px" }}>Company</h4>
          <div className="text-center w-full flex justify-around space-x-1 flex-wrap">
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Community Guidelines
              </Link>
            </p>
            <p>
              <Link to="/" style={{ fontWeight: "400", fontSize: "14px" }}>
                Help
              </Link>
            </p>
          </div>
        </div>
        <p className="pt-4 text-center" style={{ fontSize: "11px" }}>
          2021. Immutly. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
