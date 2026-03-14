const data = [
  {
    ID: 1,
    InvoiceNo: "DEL4-T-18",
    InvoiceDate: "2023-01-01",
    SKU: "B0BG2Y2MZT",
    QTY: 3,
    Rate: 76,
    Total: 432,
    SalesledgerName: "MAHARASHTRA ST",
    PurchaseLedgerName: "HARYANA ST",
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
