const data = [
  {
    ID: 1,
    Channel: "Flipkart",
    SellerId: "c05f15aa884f422b	",
    Tier: "default",
  },
  {
    ID: 41,
    Channel: "Flipkart",
    SellerId: "c05f15aa884f422b	",
    Tier: "default",
  },
  {
    ID: 13,
    Channel: "Flipkart",
    SellerId: "c05f15aa884f422b	",
    Tier: "default",
  },
  {
    ID: 21,
    Channel: "Flipkart",
    SellerId: "c05f15aa884f422b	",
    Tier: "default",
  },
];

export const getdata = function (page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && data[i]; i++) {
    array.push(data[i]);
  }

  return array;
};

export const getLength = function () {
  return data.length;
};
