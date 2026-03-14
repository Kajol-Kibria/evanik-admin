// Mock data for FBA inventory
const mockData = [
  {
    SKU: "SKU001",
    ProductName: "Product 1",
    FNSKU: "FNSKU001",
    ASIN: "ASIN001",
    TotalUnits: 100,
    AvailableUnits: 80,
    InboundUnits: 20,
    UnfulfillableUnits: 0,
    Warehouse: "WH001",
    LastUpdated: "2024-03-22",
  },
  {
    SKU: "SKU002",
    ProductName: "Product 2",
    FNSKU: "FNSKU002",
    ASIN: "ASIN002",
    TotalUnits: 150,
    AvailableUnits: 120,
    InboundUnits: 30,
    UnfulfillableUnits: 0,
    Warehouse: "WH002",
    LastUpdated: "2024-03-22",
  },
  {
    SKU: "SKU003",
    ProductName: "Product 3",
    FNSKU: "FNSKU003",
    ASIN: "ASIN003",
    TotalUnits: 200,
    AvailableUnits: 150,
    InboundUnits: 50,
    UnfulfillableUnits: 0,
    Warehouse: "WH003",
    LastUpdated: "2024-03-22",
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
