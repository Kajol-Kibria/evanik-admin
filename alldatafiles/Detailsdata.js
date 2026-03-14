const data = [
  {
    ID: 1,
    PicklistName: "2004",
    OrderId: "data",
    OrderItemID: "data",
    Skucode: "data",
    Qty: "data",
    ShippingLabel: "data",
    InvoiceLabel: "data",
    Combined: "data",
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
