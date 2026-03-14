// Mock data for new orders
const mockData = [
  {
    OrderID: "ORD001",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-22",
    CustomerName: "John Doe",
    Items: [
      { SKU: "SKU001", Quantity: 2, Price: "₹1000" },
      { SKU: "SKU002", Quantity: 1, Price: "₹500" },
    ],
    TotalAmount: "₹2500",
    PaymentStatus: "Pending",
    ShippingAddress: "Mumbai",
    Status: "New",
  },
  {
    OrderID: "ORD002",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-22",
    CustomerName: "Jane Smith",
    Items: [{ SKU: "SKU003", Quantity: 3, Price: "₹750" }],
    TotalAmount: "₹2250",
    PaymentStatus: "Paid",
    ShippingAddress: "Delhi",
    Status: "New",
  },
  {
    OrderID: "ORD003",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-22",
    CustomerName: "Mike Johnson",
    Items: [
      { SKU: "SKU001", Quantity: 1, Price: "₹1000" },
      { SKU: "SKU004", Quantity: 2, Price: "₹1500" },
    ],
    TotalAmount: "₹4000",
    PaymentStatus: "Paid",
    ShippingAddress: "Bangalore",
    Status: "New",
  },
  {
    OrderID: "ORD004",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-20",
    CustomerName: "Alice Brown",
    Items: [
      {
        SKU: "TECH-001",
        ProductName: "Smartphone X1",
        Quantity: 1,
        Status: "Processing",
      },
    ],
    Status: "Processing",
    Priority: "High",
    Notes: "New customer order",
  },
  {
    OrderID: "ORD005",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-19",
    CustomerName: "Bob Wilson",
    Items: [
      {
        SKU: "FASH-001",
        ProductName: "Designer T-Shirt",
        Quantity: 2,
        Status: "Processing",
      },
      {
        SKU: "HOME-002",
        ProductName: "Bath Towels",
        Quantity: 3,
        Status: "Processing",
      },
    ],
    Status: "Processing",
    Priority: "Normal",
    Notes: "Multiple items order",
  },
  {
    OrderID: "ORD006",
    Logo: "/images/img-product.jpg",
    Date: "2024-03-18",
    CustomerName: "Carol Davis",
    Items: [
      {
        SKU: "HOME-001",
        ProductName: "Kitchen Set",
        Quantity: 1,
        Status: "Processing",
      },
    ],
    Status: "Processing",
    Priority: "Low",
    Notes: "Standard delivery",
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

export const getProcessingLength = () => {
  return mockData.length;
};

export const getProcessingData = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockData.slice(startIndex, endIndex);
};
