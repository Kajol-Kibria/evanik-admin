// Mock data for returns
const mockData = [
  {
    ReturnID: "RET001",
    OrderID: "ORD001",
    Date: "2024-03-22",
    CustomerName: "John Doe",
    Items: [
      { SKU: "SKU001", Name: "Product 1", Quantity: 1, Reason: "Defective" },
      { SKU: "SKU002", Name: "Product 2", Quantity: 1, Reason: "Wrong Size" },
    ],
    Status: "Pending",
    RefundAmount: "₹2500",
    RefundStatus: "Not Processed",
  },
  {
    ReturnID: "RET002",
    OrderID: "ORD002",
    Date: "2024-03-22",
    CustomerName: "Jane Smith",
    Items: [
      {
        SKU: "SKU003",
        Name: "Product 3",
        Quantity: 2,
        Reason: "Not as Described",
      },
    ],
    Status: "Approved",
    RefundAmount: "₹1500",
    RefundStatus: "Processing",
  },
  {
    ReturnID: "RET003",
    OrderID: "ORD003",
    Date: "2024-03-22",
    CustomerName: "Mike Johnson",
    Items: [
      { SKU: "SKU004", Name: "Product 4", Quantity: 1, Reason: "Changed Mind" },
    ],
    Status: "Completed",
    RefundAmount: "₹1000",
    RefundStatus: "Refunded",
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
