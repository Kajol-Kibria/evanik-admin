const data = [
  {
    ItemDetails: "Bajaj 25 L Storage Gyeser	",
    Account: "jmdttfwP2",
    Quantity: 3,
    Rate: 20,
    Tax: 300,
    Amount: 2000,
  },
  {
    ItemDetails: "Bajaj 250 L Storage Gyeser	",
    Account: "jmdttfwP2",
    Quantity: 3,
    Rate: 20,
    Tax: 300,
    Amount: 2000,
  },
  {
    ItemDetails: "Bajaj 25 L Storage	",
    Account: "jmdttfwP2",
    Quantity: 3,
    Rate: 20,
    Tax: 300,
    Amount: 2000,
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
