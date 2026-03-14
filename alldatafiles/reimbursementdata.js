// Mock data for indexing
const mockData = [
  {
    PaymentDate: "INV001",
    SellerId: "2024-03-22",
    WarehouseID: "ORD001",
    OrderId: "2024-03-22",
    OrderItemId: "ITEM001",
    SKUcode: "WH001",
    Qty: "FBA",
    OrderValue: "SKU001",
    Reimbursement: "₹1000 / 2",
  },
];

// Function to get total length of data
export const getLength = () => {
  return mockData.length;
};

// Function to get paginated data
export const getdata = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
