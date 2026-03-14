const data = [
  {
    ID: 1,
    Channel: "fk - BLR - 001",
    Sale: {
      Value: "1,27,42,229",
      Units: "59100",
    },
    Returns: {
      Value: "1,27,42,229",
      Units: "59100",
      Percentage: "6%",
    },
    Net: {
      Value: "1,27,42,229",
      Units: "59100",
    },
    Charges: "-42,27,928",
    Settlement: {
      Paid: "59100",
      PaidPercentage: "6%",
      Unpaid: "59100",
      UnpaidPercentage: "6%",
    },
  },
  {
    ID: 12,
    Channel: "fk - BLR - 001",
    Sale: {
      Value: "1,27,42,229",
      Units: "59100",
    },
    Returns: {
      Value: "1,27,42,229",
      Units: "59100",
      Percentage: "6%",
    },
    Net: {
      Value: "1,27,42,229",
      Units: "59100",
    },
    Charges: "-42,27,928",
    Settlement: {
      Paid: "59100",
      PaidPercentage: "6%",
      Unpaid: "59100",
      UnpaidPercentage: "6%",
    },
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
