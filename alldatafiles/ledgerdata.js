const data = [
  {
    Id: 1,
    Date: "data",
    MasterSkucode: "data",
    SKUCode: "data",
    Type: "data",

    InitialAvailable: "data",
    AddRemoveQuantity: "data",
    AvailableQuantity: "data",
    Remark: "data",
  },
  {
    Id: 2,
    Date: "data",
    MasterSkucode: "data",
    SKUCode: "data",
    Type: "data",

    InitialAvailable: "data",
    AddRemoveQuantity: "data",
    AvailableQuantity: "data",
    Remark: "data",
  },
  {
    Id: 3,
    Date: "data",
    MasterSkucode: "data",
    SKUCode: "data",
    Type: "data",

    InitialAvailable: "data",
    AddRemoveQuantity: "data",
    AvailableQuantity: "data",
    Remark: "data",
  },
  {
    Id: 4,
    Date: "data",
    MasterSkucode: "data",
    SKUCode: "data",
    Type: "data",

    InitialAvailable: "data",
    AddRemoveQuantity: "data",
    AvailableQuantity: "data",
    Remark: "data",
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
