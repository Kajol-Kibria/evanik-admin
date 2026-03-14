// Mock data for processed orders
const mockData = [
  {
    OrderID: "ORD007",
    Date: "2024-03-20",
    CustomerName: "David Lee",
    Items: [
      {
        SKU: "TECH-001",
        ProductName: "Smartphone X1",
        Quantity: 1,
        Status: "Shipped",
      },
    ],
    Status: "Shipped",
    TrackingNumber: "TRK001",
    Notes: "Express delivery completed",
  },
  {
    OrderID: "ORD008",
    Date: "2024-03-19",
    CustomerName: "Emma Wilson",
    Items: [
      {
        SKU: "FASH-001",
        ProductName: "Designer T-Shirt",
        Quantity: 2,
        Status: "Delivered",
      },
    ],
    Status: "Delivered",
    TrackingNumber: "TRK002",
    Notes: "Standard delivery completed",
  },
  {
    OrderID: "ORD009",
    Date: "2024-03-18",
    CustomerName: "Frank Miller",
    Items: [
      {
        SKU: "HOME-001",
        ProductName: "Kitchen Set",
        Quantity: 1,
        Status: "Delivered",
      },
      {
        SKU: "HOME-002",
        ProductName: "Bath Towels",
        Quantity: 3,
        Status: "Delivered",
      },
    ],
    Status: "Delivered",
    TrackingNumber: "TRK003",
    Notes: "Bulk order delivered",
  },
];

export const getProcessedlength = () => {
  return mockData.length;
};

export const getProcesseddata = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
