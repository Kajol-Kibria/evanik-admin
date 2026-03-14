const data = [
  {
    SKU: "ABC12",
    ProductName: "Puma Shoes",
    ProductSize: "Size 11",
    ProductSAC: "AC 324234",
    UOM: "PCS",
    Received: 200,
    ReceivedPO: 200,
    Rejected: 200,
    NetGood: 200,
    PO: 200,
    Invoice: 800,
    Discount: 300,
    GST: 0.0,
    Amount: "₹ 20, 674.00",
  },
  {
    SKU: "ABC1w2",
    ProductName: "Puma Shoes",
    ProductSize: "Size 11",
    ProductSAC: "AC 324234",
    UOM: "PCS",
    Received: 200,
    ReceivedPO: 200,
    Rejected: 200,
    NetGood: 200,
    PO: 200,
    Invoice: 800,
    Discount: 300,
    GST: 0.0,
    Amount: "₹ 20, 674.00",
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
