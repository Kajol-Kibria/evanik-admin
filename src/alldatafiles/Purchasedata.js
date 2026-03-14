// Mock data for purchase list
const mockData = [
  {
    PurchaseID: "PUR001",
    Date: "2024-03-22",
    SupplierName: "Supplier 1",
    Items: [
      {
        SKU: "SKU001",
        Name: "Product 1",
        Quantity: 100,
        UnitPrice: "₹500",
        Total: "₹50000",
      },
      {
        SKU: "SKU002",
        Name: "Product 2",
        Quantity: 50,
        UnitPrice: "₹300",
        Total: "₹15000",
      },
    ],
    TotalAmount: "₹65000",
    Status: "Pending",
    PaymentStatus: "Not Paid",
    ExpectedDelivery: "2024-03-25",
  },
  {
    PurchaseID: "PUR002",
    Date: "2024-03-22",
    SupplierName: "Supplier 2",
    Items: [
      {
        SKU: "SKU003",
        Name: "Product 3",
        Quantity: 75,
        UnitPrice: "₹400",
        Total: "₹30000",
      },
    ],
    TotalAmount: "₹30000",
    Status: "Confirmed",
    PaymentStatus: "Partially Paid",
    ExpectedDelivery: "2024-03-24",
  },
  {
    PurchaseID: "PUR003",
    Date: "2024-03-22",
    SupplierName: "Supplier 3",
    Items: [
      {
        SKU: "SKU004",
        Name: "Product 4",
        Quantity: 200,
        UnitPrice: "₹600",
        Total: "₹120000",
      },
      {
        SKU: "SKU005",
        Name: "Product 5",
        Quantity: 150,
        UnitPrice: "₹450",
        Total: "₹67500",
      },
    ],
    TotalAmount: "₹187500",
    Status: "Delivered",
    PaymentStatus: "Paid",
    ExpectedDelivery: "2024-03-23",
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
