const data = [
  {
    ID: 1,
    Status: "Active",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
  },
  {
    ID: 13,
    Status: "Expired",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
  },
  {
    ID: 1344,
    Status: "Expired",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
  },
  {
    ID: 12334,
    Status: "Expired",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
  },
  {
    ID: 13094,
    Status: "Expired",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
  },
  {
    ID: 1394,
    Status: "Expired",
    Invoice: {
      Number: "EUP/24-25/0469",
      Date: "27 Sep 2023",
    },
    PaidAmount: "59,000",
    PlanStartDate: "27 Sep 2023",
    ExpirationDate: "30 Sep 2023	",
    PlanAmount: "50,000",
    Validity: "30 Days",
    Orderlimit: "10000",
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
