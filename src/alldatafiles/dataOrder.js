// Mock data for orders
const mockData = [
  {
    OrderID: "ORD001",
    Date: "2024-03-22",
    CustomerName: "John Doe",
    Items: [
      {
        SKU: "SKU001",
        Name: "Product 1",
        Quantity: 2,
        Price: "₹1000",
        Total: "₹2000",
      },
      {
        SKU: "SKU002",
        Name: "Product 2",
        Quantity: 1,
        Price: "₹500",
        Total: "₹500",
      },
    ],
    TotalAmount: "₹2500",
    PaymentStatus: "Paid",
    ShippingAddress: {
      Street: "123 Main St",
      City: "Mumbai",
      State: "Maharashtra",
      Pincode: "400001",
    },
    Status: "Processing",
    TrackingID: "TRK001",
  },
  {
    OrderID: "ORD002",
    Date: "2024-03-22",
    CustomerName: "Jane Smith",
    Items: [
      {
        SKU: "SKU003",
        Name: "Product 3",
        Quantity: 3,
        Price: "₹750",
        Total: "₹2250",
      },
    ],
    TotalAmount: "₹2250",
    PaymentStatus: "Pending",
    ShippingAddress: {
      Street: "456 Park St",
      City: "Delhi",
      State: "Delhi",
      Pincode: "110001",
    },
    Status: "New",
    TrackingID: "",
  },
  {
    OrderID: "ORD003",
    Date: "2024-03-22",
    CustomerName: "Mike Johnson",
    Items: [
      {
        SKU: "SKU001",
        Name: "Product 1",
        Quantity: 1,
        Price: "₹1000",
        Total: "₹1000",
      },
      {
        SKU: "SKU004",
        Name: "Product 4",
        Quantity: 2,
        Price: "₹1500",
        Total: "₹3000",
      },
    ],
    TotalAmount: "₹4000",
    PaymentStatus: "Paid",
    ShippingAddress: {
      Street: "789 Lake St",
      City: "Bangalore",
      State: "Karnataka",
      Pincode: "560001",
    },
    Status: "Shipped",
    TrackingID: "TRK003",
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
