const data = [
  {
    ID: 1,
    SellerID: "data",
    GSTINBranch: "data",
    SALES: {
      Value: "data",
      Count: "data",
    },
    RETURN: {
      Value: "data",
      Count: "data",
    },
    CANCEL: {
      Value: "data",
      Count: "data",
    },
    Error: "data",
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
