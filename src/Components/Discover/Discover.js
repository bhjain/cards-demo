import React, { useState } from "react";
import Card from "../Cards/Card";
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

  return (
    <div className="mt-10">
      <div className="flex justify-between mx-10">
        <div className="filter w-28 text-center py-2 sm:w-20">
          {/* <button className="font-light">FILTER</button> */}
          <div class="relative inline-block text-left">
            <div className="flex">
              <button
                type="button"
                className="font-light sm:w-20  "
                onClick={() => setShowDrop(!ShowDrop)}
                class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50  focus:ring-offset-gray-100 focus:ring-indigo-500"
                // class="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white-700 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Filter
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
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
              class="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
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
