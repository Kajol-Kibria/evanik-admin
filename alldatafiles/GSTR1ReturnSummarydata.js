const data = [
  {
    ID: 1,
    Description:
      "Taxable outward supplies made to registered persons( including UIN-holders)",
    IGSTAmount: "2000",
    CGSTAmount: "2000",
    SGSTAmount: "2000",
    InvoiceTotal: "20000",
  },
  {
    ID: 14,
    Description:
      "Taxable outward supplies made to registered persons( including UIN-holders)",
    IGSTAmount: "2000",
    CGSTAmount: "2000",
    SGSTAmount: "2000",
    InvoiceTotal: "20000",
  },
  {
    ID: 12,
    Description:
      "Taxable outward supplies made to registered persons( including UIN-holders)",
    IGSTAmount: "2000",
    CGSTAmount: "2000",
    SGSTAmount: "2000",
    InvoiceTotal: "20000",
  },
  {
    ID: 11,
    Description:
      "Taxable outward supplies made to registered persons( including UIN-holders)",
    IGSTAmount: "2000",
    CGSTAmount: "2000",
    SGSTAmount: "2000",
    InvoiceTotal: "20000",
  },
  {
    ID: 143,
    Description:
      "Taxable outward supplies made to registered persons( including UIN-holders)",
    IGSTAmount: "2000",
    CGSTAmount: "2000",
    SGSTAmount: "2000",
    InvoiceTotal: "20000",
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
