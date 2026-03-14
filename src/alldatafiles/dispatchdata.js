// Mock data for dispatch orders
const mockData = [
  {
    ID: 1,
    OrderID: "ORD001",
    CustomerName: "John Doe",
    OrderDate: "2024-03-22",
    DeliveryDate: "2024-03-25",
    Status: "Pending",
    Items: 3,
    TotalAmount: "₹1500",
    PaymentStatus: "Paid",
    ShippingAddress: "123 Main St, Mumbai",
    TrackingNumber: "TRK001",
  },
  {
    ID: 12,
    OrderID: "ORD002",
    CustomerName: "Jane Smith",
    OrderDate: "2024-03-22",
    DeliveryDate: "2024-03-26",
    Status: "Processing",
    Items: 2,
    TotalAmount: "₹2000",
    PaymentStatus: "Pending",
    ShippingAddress: "456 Park St, Delhi",
    TrackingNumber: "TRK002",
  },
  {
    ID: 123,
    OrderID: "ORD003",
    CustomerName: "Mike Johnson",
    OrderDate: "2024-03-22",
    DeliveryDate: "2024-03-27",
    Status: "Shipped",
    Items: 4,
    TotalAmount: "₹3000",
    PaymentStatus: "Paid",
    ShippingAddress: "789 Lake St, Bangalore",
    TrackingNumber: "TRK003",
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
