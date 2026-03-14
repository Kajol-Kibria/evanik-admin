const mockData = [
  {
    channel: "fk",
    paymentDate: "23 june 2025",
    orderID: "0202457901044903",
    orderItemID: "0202457901044903",
    reverseshippingcharge: "0202457901044903",
    reimbursement: "02ww02457901044903",
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
