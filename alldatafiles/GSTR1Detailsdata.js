const data = [
  {
    Particulars: "03AABFE9974AIZO",
    PartyName: "Brij Lal Mehra and sons",
    GSTRegistrationType: "Registered",
    VoucherCount: 1,
    TaxableAmount: 1800.0,
    IGST: 3240.0,
    CGST: 1373.0,
    SGSTUTGST: 1373.0,
    Cess: 200.0,
    TaxAmount: 3240.0,
    InvoiceAmount: 21040.0,
  },
  {
    Particulars: "03AABFE9974AIZO",
    PartyName: "Brij Lal Mehra and sons",
    GSTRegistrationType: "Registered",
    VoucherCount: 1,
    TaxableAmount: 1800.0,
    IGST: 3240.0,
    CGST: 1373.0,
    SGSTUTGST: 1373.0,
    Cess: 200.0,
    TaxAmount: 3240.0,
    InvoiceAmount: 21040.0,
  },
  {
    Particulars: "03AABFE9974AIZO",
    PartyName: "Brij Lal Mehra and sons",
    GSTRegistrationType: "Registered",
    VoucherCount: 1,
    TaxableAmount: 1800.0,
    IGST: 3240.0,
    CGST: 1373.0,
    SGSTUTGST: 1373.0,
    Cess: 200.0,
    TaxAmount: 3240.0,
    InvoiceAmount: 21040.0,
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
