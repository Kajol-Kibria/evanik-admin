const data = [
  {
    ID: 1,
    ProductName: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    BSR: "1111112",
    OrderID: "OD1111112",
    AverageRating: 5,
    UnitSold: 909,

    UnitReturned: 98989,
    NetRevenue: 98989,
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
