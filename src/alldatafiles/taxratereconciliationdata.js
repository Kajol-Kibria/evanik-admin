const mockData = [
  {
    sellerID: 32,
    sku: "data",
    orderdetails: "data",
    taxonchannel: "data ",
    taxuserdefined: "data",
  },
];

export const getLength = () => {
  return mockData.length;
};

export const getdata = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
