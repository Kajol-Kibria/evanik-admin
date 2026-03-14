// Mock data for inventory
const mockData = [
  {
    SKU: "SKU001",
    ProductName: "Product 1",
    Category: "Electronics",
    InStock: 100,
    Reserved: 20,
    Available: 80,
    ReorderPoint: 50,
    UnitPrice: "₹1000",
    Value: "₹100000",
    Location: "WH001",
  },
  {
    SKU: "SKU002",
    ProductName: "Product 2",
    Category: "Fashion",
    InStock: 150,
    Reserved: 30,
    Available: 120,
    ReorderPoint: 75,
    UnitPrice: "₹500",
    Value: "₹75000",
    Location: "WH002",
  },
  {
    SKU: "SKU003",
    ProductName: "Product 3",
    Category: "Home",
    InStock: 200,
    Reserved: 40,
    Available: 160,
    ReorderPoint: 100,
    UnitPrice: "₹750",
    Value: "₹150000",
    Location: "WH003",
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
