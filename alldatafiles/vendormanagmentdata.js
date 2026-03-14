const data = [
  {
    ID: 1,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 11,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 122,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 112,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 1123,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 4451,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 231,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 3451,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 4,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
  },

  {
    ID: 9,
    Name: "Viscus Infotech Limited	",
    CompanyName: "Viscus Infotech Limited	",
    Email: "sumit.maheshwari@vinfotech.com	",
    WorkPhone: "1234567890",
    SourceofSupply: "Madhya Pradesh",
    Payables: "₹ 20, 674.00	",
    UnusedCredits: "₹ 20, 674.00",
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
