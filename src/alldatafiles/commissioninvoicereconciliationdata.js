const mockData = [
  {
    channel: "ms",
    month: "FNSKU001",
    expensesHead: "listing 1 listing 1 ",
    asPerCommissionInvoice: "/images/img-product.jpg",
    asPerSettlement: "ASIN001",
    Gap: "ASIN001",
    Action: "ASIN001",
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
