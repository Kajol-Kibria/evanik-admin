const data = [
  {
    Warehouse: "data",
    Date: "data",
    OrderID: "data",
    SKUCode: "data",
    Qty: "data",
    SaleStatus: "data",
    SaleAmount: "data",
    Totalfee: "data",
    COGS: "data",
    Margin: "data",
  },
  {
    Warehouse: "adata",
    Date: "data",
    OrderID: "data",
    SKUCode: "data",
    Qty: "data",
    SaleStatus: "data",
    SaleAmount: "data",
    Totalfee: "data",
    COGS: "data",
    Margin: "data",
  },
  {
    Warehouse: "datsa",
    Date: "data",
    OrderID: "data",
    SKUCode: "data",
    Qty: "data",
    SaleStatus: "data",
    SaleAmount: "data",
    Totalfee: "data",
    COGS: "data",
    Margin: "data",
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
