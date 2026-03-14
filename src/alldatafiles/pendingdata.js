// Mock data for pending orders
const mockData = [
  {
    OrderID: "ORD001",
    Date: "2024-03-20",
    CustomerName: "John Smith",
    Items: [
      {
        SKU: "TECH-001",
        ProductName: "Smartphone X1",
        Quantity: 1,
        Status: "Pending",
      },
      {
        SKU: "TECH-002",
        ProductName: "Wireless Earbuds",
        Quantity: 2,
        Status: "Pending",
      },
    ],
    Status: "Pending",
    Priority: "High",
    Notes: "Express delivery requested",
  },
  {
    OrderID: "ORD002",
    Date: "2024-03-19",
    CustomerName: "Sarah Johnson",
    Items: [
      {
        SKU: "FASH-001",
        ProductName: "Designer T-Shirt",
        Quantity: 3,
        Status: "Pending",
      },
    ],
    Status: "Pending",
    Priority: "Normal",
    Notes: "Standard delivery",
  },
  {
    OrderID: "ORD003",
    Date: "2024-03-18",
    CustomerName: "Mike Wilson",
    Items: [
      {
        SKU: "HOME-001",
        ProductName: "Kitchen Set",
        Quantity: 1,
        Status: "Pending",
      },
      {
        SKU: "HOME-002",
        ProductName: "Bath Towels",
        Quantity: 4,
        Status: "Pending",
      },
    ],
    Status: "Pending",
    Priority: "Low",
    Notes: "Bulk order",
  },
];

export const getPendinglength = () => {
  return mockData.length;
};

export const getpendingdata = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
