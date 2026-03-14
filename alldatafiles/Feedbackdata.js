const data = [
  {
    ID: 1,
    Product: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    OrderID: "OD234567980113448903",
    Rating: 5,
    Date: "27 Sep 2023",

    Status: "Delivered",
    BuyerID: "example@g.com",
    Comment: "Comments",
    Action: "data",
  },
  {
    ID: 321,
    Product: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    OrderID: "OD234567980113448903",
    Rating: 5,
    Date: "27 Sep 2023",

    Status: "Delivered",
    BuyerID: "example@g.com",
    Comment: "Comments",
    Action: "data",
  },
  {
    ID: 145,
    Product: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    OrderID: "OD234567980113448903",
    Rating: 5,
    Date: "27 Sep 2023",

    Status: "Delivered",
    BuyerID: "example@g.com",
    Comment: "Comments",
    Action: "data",
  },
  {
    ID: 14,
    Product: "Bajaj 25 L Storage Gyeser",
    SKU: "jmdttfwP2",
    OrderID: "OD234567980113448903",
    Rating: 5,
    Date: "27 Sep 2023",

    Status: "Delivered",
    BuyerID: "example@g.com",
    Comment: "Comments",
    Action: "data",
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
