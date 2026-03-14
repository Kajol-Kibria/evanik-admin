// Mock data for inbound inventory
const mockData = [
  {
    InboundID: "INB001",
    Date: "2024-03-20",
    SupplierName: "Tech Solutions Inc",
    OrderNumber: "PO-2024-001",
    Items: [
      {
        SKU: "TECH-001",
        ProductName: "Smartphone X1",
        Quantity: 50,
        ReceivedQuantity: 48,
        Status: "Partially Received",
      },
      {
        SKU: "TECH-002",
        ProductName: "Wireless Earbuds",
        Quantity: 100,
        ReceivedQuantity: 100,
        Status: "Received",
      },
    ],
    Status: "In Progress",
    Notes: "Two items damaged during transit",
  },
  {
    InboundID: "INB002",
    Date: "2024-03-19",
    SupplierName: "Fashion Wholesale Ltd",
    OrderNumber: "PO-2024-002",
    Items: [
      {
        SKU: "FASH-001",
        ProductName: "Designer T-Shirt",
        Quantity: 200,
        ReceivedQuantity: 200,
        Status: "Received",
      },
    ],
    Status: "Completed",
    Notes: "All items received in good condition",
  },
  {
    InboundID: "INB003",
    Date: "2024-03-18",
    SupplierName: "Home Goods Co",
    OrderNumber: "PO-2024-003",
    Items: [
      {
        SKU: "HOME-001",
        ProductName: "Kitchen Set",
        Quantity: 30,
        ReceivedQuantity: 0,
        Status: "Pending",
      },
      {
        SKU: "HOME-002",
        ProductName: "Bath Towels",
        Quantity: 150,
        ReceivedQuantity: 0,
        Status: "Pending",
      },
    ],
    Status: "Scheduled",
    Notes: "Delivery expected next week",
  },
];

export const getInboundLength = () => {
  return mockData.length;
};

export const getInboundData = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
