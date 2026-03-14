const mockData = [
  {
    catID: "Denim",
    category: {
      image: "/images/img-product.jpg",
      name: "Mens Denims",
      description: "All Mens Denims of our brand",
    },
    products: "23",
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
