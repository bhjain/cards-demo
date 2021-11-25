export const Discover_Data = [
  {
    id: 1,
    img: "card1.png",
    heading: "Abstract Art 1",
    price: 30,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe1",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe1",
      userName: "@john Doe",
    },
  },
  {
    id: 2,
    img: "card2.png",
    heading: "Abstract Art 2",
    price: 100,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe2",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe2",
      userName: "@john Doe",
    },
  },
  {
    id: 3,
    img: "card1.png",
    heading: "Abstract Art3",
    price: 50,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe3",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe3",
      userName: "@john Doe",
    },
  },
  {
    id: 4,
    img: "card2.png",
    heading: "Abstract Art",
    price: 200,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
  },
  {
    id: 5,
    img: "card1.png",
    heading: "Abstract Art",

    price: 200,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
  },
  {
    id: 6,
    img: "card2.png",
    heading: "Abstract Art",
    price: 1000,
    owner: {
      ownerimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
  },
  {
    id: 7,
    img: "card1.png",
    heading: "Abstract Art",
    price: 600,
    owner: {
      ownerimg: "owner.png",
      userName: "@john Doe",

      name: "John Doe",
    },
    creator: {
      creatorimg: "owner.png",
      name: "John Doe",
      userName: "@john Doe",
    },
  },
];

export const low_to_high = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

export const high_to_low = (a, b) => {
  if (a.price < b.price) {
    return 1;
  }
  if (a.price > b.price) {
    return -1;
  }
  return 0;
};
