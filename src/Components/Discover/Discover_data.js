export const Discover_Data = [
  {
    img: "card1.png",
    heading: "Abstract Art",
    price: 30,
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
    price: 100,
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
    price: 50,
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
    price: 200,
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
    price: 200,
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
    price: 1000,
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
    price: 600,
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
