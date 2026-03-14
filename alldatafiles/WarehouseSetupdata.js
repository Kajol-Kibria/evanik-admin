const data = [
  {
    ID: 1,
    WarehouseName: "Main Location",
    Branch: "default	",
    Type: "default",
  },
  {
    ID: 2,
    WarehouseName: "pos",
    Branch: "default	",
    Type: "Dropship",
  },
  {
    ID: 3,
    WarehouseName: "amazon warehouse",
    Branch: "default	",
    Type: "Fulfilment",
  },
  {
    ID: 13,
    WarehouseName: "SJAB",
    Branch: "default	",
    Type: "Dropshipment",
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
