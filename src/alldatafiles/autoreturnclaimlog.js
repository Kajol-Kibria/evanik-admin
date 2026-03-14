const mockData = [
  {
    ID: "ms",
    date: "FNSKU001",
    cost: "listing 1 listing 1 ",
    claimStatus: "/images/img-product.jpg",
    comments: "ASIN001",
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
