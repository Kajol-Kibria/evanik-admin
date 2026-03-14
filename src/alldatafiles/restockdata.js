// Mock data for restock inventory
const mockData = [
  {
    SKU: "SKU001",
    ProductName: "Product 1",
    CurrentStock: 50,
    MinimumStock: 100,
    ReorderPoint: 75,
    SuggestedOrder: 100,
    LastOrderDate: "2024-03-15",
    Supplier: "Supplier 1",
    LeadTime: "7 days",
    Status: "Below Reorder Point",
  },
  {
    SKU: "SKU002",
    ProductName: "Product 2",
    CurrentStock: 30,
    MinimumStock: 50,
    ReorderPoint: 40,
    SuggestedOrder: 50,
    LastOrderDate: "2024-03-18",
    Supplier: "Supplier 2",
    LeadTime: "5 days",
    Status: "Critical",
  },
  {
    SKU: "SKU003",
    ProductName: "Product 3",
    CurrentStock: 120,
    MinimumStock: 100,
    ReorderPoint: 110,
    SuggestedOrder: 0,
    LastOrderDate: "2024-03-20",
    Supplier: "Supplier 3",
    LeadTime: "6 days",
    Status: "Adequate",
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
