// Mock data for inventory ledger
const mockData = [
  {
    TransactionID: "TRX001",
    Date: "2024-03-22",
    Type: "Purchase",
    SKU: "SKU001",
    Quantity: 100,
    UnitPrice: "₹500",
    TotalAmount: "₹50000",
    Reference: "PO001",
    Warehouse: "WH001",
  },
  {
    TransactionID: "TRX002",
    Date: "2024-03-22",
    Type: "Sale",
    SKU: "SKU002",
    Quantity: 50,
    UnitPrice: "₹1000",
    TotalAmount: "₹50000",
    Reference: "SO001",
    Warehouse: "WH002",
  },
  {
    TransactionID: "TRX003",
    Date: "2024-03-22",
    Type: "Return",
    SKU: "SKU003",
    Quantity: 10,
    UnitPrice: "₹800",
    TotalAmount: "₹8000",
    Reference: "RT001",
    Warehouse: "WH003",
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
