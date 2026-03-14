const data = [
  {
    ID: 1,
    LocationId: "2004",
    VendorGroupCode: "data",
    Count: "data",
    PickupAfter: "data",
    PickupBefore: "data",
    OTC: "data",
    ISMaps: "data",
    ManifestPdf: "data",
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
