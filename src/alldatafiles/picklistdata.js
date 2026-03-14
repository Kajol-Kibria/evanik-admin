// Mock data for picklist
const mockData = [
  {
    PicklistID: "PKL001",
    Date: "2024-03-20",
    OrderID: "ORD001",
    Items: [
      {
        SKU: "TECH-001",
        ProductName: "Smartphone X1",
        Quantity: 1,
        Location: "A-123",
        Status: "Picked",
      },
      {
        SKU: "TECH-002",
        ProductName: "Wireless Earbuds",
        Quantity: 2,
        Location: "B-456",
        Status: "Picking",
      },
    ],
    Status: "In Progress",
    Picker: "John Doe",
    Notes: "Priority order",
  },
  {
    PicklistID: "PKL002",
    Date: "2024-03-19",
    OrderID: "ORD002",
    Items: [
      {
        SKU: "FASH-001",
        ProductName: "Designer T-Shirt",
        Quantity: 3,
        Location: "C-789",
        Status: "Pending",
      },
    ],
    Status: "Pending",
    Picker: "Jane Smith",
    Notes: "Standard order",
  },
  {
    PicklistID: "PKL003",
    Date: "2024-03-18",
    OrderID: "ORD003",
    Items: [
      {
        SKU: "HOME-001",
        ProductName: "Kitchen Set",
        Quantity: 1,
        Location: "D-012",
        Status: "Picked",
      },
      {
        SKU: "HOME-002",
        ProductName: "Bath Towels",
        Quantity: 4,
        Location: "E-345",
        Status: "Picked",
      },
    ],
    Status: "Completed",
    Picker: "Mike Johnson",
    Notes: "Bulk order completed",
  },
];

export const getPicklistlength = () => {
  return mockData.length;
};

export const getpPicklistdata = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
