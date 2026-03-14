// Mock data for inventory records
const mockData = [
  {
    RecordID: "REC001",
    Date: "2024-03-20",
    SKU: "TECH-001",
    ProductName: "Smartphone X1",
    PreviousStock: 100,
    CurrentStock: 148,
    StockChange: 48,
    ChangeType: "Inbound",
    ReferenceID: "INB001",
    Notes: "Regular stock update from inbound shipment",
  },
  {
    RecordID: "REC002",
    Date: "2024-03-19",
    SKU: "FASH-001",
    ProductName: "Designer T-Shirt",
    PreviousStock: 50,
    CurrentStock: 250,
    StockChange: 200,
    ChangeType: "Inbound",
    ReferenceID: "INB002",
    Notes: "Bulk order received",
  },
  {
    RecordID: "REC003",
    Date: "2024-03-18",
    SKU: "TECH-002",
    ProductName: "Wireless Earbuds",
    PreviousStock: 75,
    CurrentStock: 65,
    StockChange: -10,
    ChangeType: "Outbound",
    ReferenceID: "ORD001",
    Notes: "Regular order fulfillment",
  },
];

export const getinventoryLength = () => {
  return mockData.length;
};

export const getinventoryData = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
