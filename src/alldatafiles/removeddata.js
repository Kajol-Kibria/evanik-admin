// Mock data for removed inventory
const mockData = [
  {
    RemovalID: "RMV001",
    Date: "2024-03-20",
    SKU: "TECH-001",
    ProductName: "Smartphone X1",
    Quantity: 2,
    Reason: "Damaged in Transit",
    ReferenceID: "INB001",
    Status: "Processed",
    DisposalMethod: "Return to Supplier",
    Notes: "Items damaged during shipping",
  },
  {
    RemovalID: "RMV002",
    Date: "2024-03-19",
    SKU: "FASH-001",
    ProductName: "Designer T-Shirt",
    Quantity: 5,
    Reason: "Quality Issues",
    ReferenceID: "QC-001",
    Status: "Pending",
    DisposalMethod: "Destruction",
    Notes: "Failed quality inspection",
  },
  {
    RemovalID: "RMV003",
    Date: "2024-03-18",
    SKU: "TECH-002",
    ProductName: "Wireless Earbuds",
    Quantity: 3,
    Reason: "Expired",
    ReferenceID: "EXP-001",
    Status: "Processed",
    DisposalMethod: "Recycling",
    Notes: "Past expiration date",
  },
];

export const getremovedLength = () => {
  return mockData.length;
};

export const getremovedData = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
