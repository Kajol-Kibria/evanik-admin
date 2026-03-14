const mockData = [
  {
    channel: "ms",
    mpsku: "FNSKU001",
    listingName: "listing 1 listing 1 ",
    listingImage: "/images/img-product.jpg",
    mastersku: "ASIN001",
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
