const data = [
  {
    ID: 1,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    Warehouse: "julu-brts",
    Date: "27 Sep 2023",
    OrderID: "0202457901044903",
    SKUCode: "n8900",
    ApplicableCharge: 0.08,
    AppliedCharge: 12.5,
    Gap: 75,
    RecoHead: "Collection Fee",
    SaleStatus: "Delivered",
  },
  {
    ID: 2,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    Warehouse: "julu-brts",
    Date: "27 Sep 2023",
    OrderID: "0202457901044903",
    SKUCode: "n8900",
    ApplicableCharge: 0.08,
    AppliedCharge: 12.5,
    Gap: 75,
    RecoHead: "Collection Fee",
    SaleStatus: "Delivered",
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
