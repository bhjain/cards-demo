import React, { useState } from "react";
import Card from "../Cards/Card";
import {
  // Page,
  // Navbar,
  // NavbarBackLink,
  // BlockTitle,
  // BlockHeader,
  List,
  ListItem,
  Range,
} from 'tailwind-mobile/react';
const card1 = [
  {
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card2.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
  {
    img: "card1.png",
    heading: "Abstract Art",
    price: "RS 200",
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
    },
  },
];
function Discover() {
  const [ShowDrop, setShowDrop] = useState(false);
  const [volume, setVolume] = useState(50);
  const [price, setPrice] = useState(150);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(75);


  return (
    <div className="mt-10">
      <div className="flex justify-between mx-10 sm:flex-col sm:mx-4">
        <div className="filter w-28 text-center py-2 sm:w-32 sm:mb-8">
          {/* <button className="font-light">FILTER</button> */}
          <div className="relative inline-block text-left">
            <div className="flex">
              <button
                type="button"
                className="sm:w-20  inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-white-700 hover:bg-white-50  focus:ring-offset-gray-100 focus:ring-indigo-500 sm:py-0"
                onClick={() => setShowDrop(!ShowDrop)}
                // class=""
                // class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Filter
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              style={{ display: ShowDrop ? "block" : "none" }}
              className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mx-auto"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="px-4">
                <List>
                <ListItem
                    innerClassName="flex space-x-4"
                    innerChildren={
                      <>
                        <span className="text-black text-sm font-bold">0</span>
                        <Range
                        colors={{
                          valueBg: 'bg-blue-500',
                          thumbBgMaterial: 'range-thumb:bg-green-500',
                        }}
                          value={volume}
                          step={10}
                          onChange={(e) => setVolume(e.target.value)}
                        />
                        <span className="text-black text-sm font-bold">100</span>
                      </>
                    }
                  />
                  <ListItem
                    innerChildren={
                      <Range
                        colors={{
                          valueBg: 'bg-blue-500',
                          thumbBgMaterial: 'range-thumb:bg-green-500',
                        }}
                        value={green}
                        step={1}
                        min={0}
                        max={255}
                        onChange={(e) => setGreen(e.target.value)}
                      />
                    }
                  />
                  <ListItem
                    innerChildren={
                      <Range
                        colors={{
                          valueBg: 'bg-blue-500',
                          thumbBgMaterial: 'range-thumb:bg-blue-500',
                        }}
                        value={blue}
                        step={1}
                        min={0}
                        max={255}
                        onChange={(e) => setBlue(e.target.value)}
                      />
                    }
                  />
                </List>

              </div>
              {/* <div class="py-1" role="none">
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div> */}
            </div>
          {/* <div className="absolute bg-red-500" style={{width: "50vw"}}>
          </div> */}
          </div>
        </div>
        <div className="sortBy w-48 py-2 px-2 text-center sm:w-30">
          <button className="font-light">
            Sort By <span className="font-bold">Recently Aded</span>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="grid grid-cols-3 md:grid-cols-2 justify-between gap-14  my-8 sm:grid-cols-1"
          style={{ width: "80%" }}
        >
          {/* <Card props={card1} />
                <Card props={card1} />
                <Card props={card1} />
                <Card props={card1} />
                <Card props={card1} />
                <Card props={card1} />
                <Card props={card1} /> */}
          {card1.map((element) => (
            <Card props={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
