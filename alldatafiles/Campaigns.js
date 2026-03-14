const data = [
  {
    ID: 1,
    OrderID: "029292",
    Product: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    Rating: 5,
    Date: "27 Sep 2023",

    FNS: "example@g.com",
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
