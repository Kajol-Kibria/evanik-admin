const data = [
  {
    ID: 1,
    Channel: "Fk",
    StoreName: "flipkart - c05f15aa884f422b",
    ProductName: "Pista01",
    MasterSKU: "Pistachios Pista",
    SellerCount: 3,
    CurrentPrice: 325,
    Status: "Inactive",
  },
  {
    ID: 41,
    Channel: "Fk",
    StoreName: "flipkart - c05f15aa884f422b",
    ProductName: "Pista01",
    MasterSKU: "Pistachios Pista",
    SellerCount: 3,
    CurrentPrice: 325,
    Status: "Inactive",
  },
  {
    ID: 21,
    Channel: "Fk",
    StoreName: "flipkart - c05f15aa884f422b",
    ProductName: "Pista01",
    MasterSKU: "Pistachios Pista",
    SellerCount: 3,
    CurrentPrice: 325,
    Status: "Inactive",
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
