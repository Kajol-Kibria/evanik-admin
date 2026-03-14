const mockData = [
  {
    channel: "fk",
    skuCode: "32",
    date: "27 Sep 2023",
    orderID: "0202457901044903",
    orderItemID: "0202457901044903",
    orderValue: "0202457901044903",
    payout: "0202457901044903",
    applicableFixesFee: "data",
    appliedFixesFee: "data",
    gap: 75,
    status: "Delivered",
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
