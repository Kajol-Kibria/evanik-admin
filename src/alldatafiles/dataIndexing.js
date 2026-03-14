// Mock data for indexing
const mockData = [
  {
    InvoiceNo: "INV001",
    InvoiceDate: "2024-03-22",
    OrderRef: "ORD001",
    Date: "2024-03-22",
    ItemRef: "ITEM001",
    Warehouse: "WH001",
    Fulfillment: "FBA",
    SKU: "SKU001",
    OrdervalueQty: "₹1000 / 2",
    ExpectedPayout: "₹950",
    TrackingIDAWB: "AWB123456",
    PicklistID: "PL001",
    HSN: "HSN001",
    City: "Mumbai",
    Pincode: "400001",
    State: "Maharashtra",
    Name: "John Doe",
    Address: "123 Main St",
    Status: "Approved",
    PaymentStatus: "Paid",
  },
  {
    InvoiceNo: "INV002",
    InvoiceDate: "2024-03-22",
    OrderRef: "ORD002",
    Date: "2024-03-22",
    ItemRef: "ITEM002",
    Warehouse: "WH002",
    Fulfillment: "FBA",
    SKU: "SKU002",
    OrdervalueQty: "₹2000 / 3",
    ExpectedPayout: "₹1900",
    TrackingIDAWB: "AWB123457",
    PicklistID: "PL002",
    HSN: "HSN002",
    City: "Delhi",
    Pincode: "110001",
    State: "Delhi",
    Name: "Jane Smith",
    Address: "456 Park St",
    Status: "Returned",
    PaymentStatus: "Pending",
  },
  {
    InvoiceNo: "INV003",
    InvoiceDate: "2024-03-22",
    OrderRef: "ORD003",
    Date: "2024-03-22",
    ItemRef: "ITEM003",
    Warehouse: "WH003",
    Fulfillment: "FBA",
    SKU: "SKU003",
    OrdervalueQty: "₹3000 / 4",
    ExpectedPayout: "₹2850",
    TrackingIDAWB: "AWB123458",
    PicklistID: "PL003",
    HSN: "HSN003",
    City: "Bangalore",
    Pincode: "560001",
    State: "Karnataka",
    Name: "Mike Johnson",
    Address: "789 Lake St",
    Status: "Shipped",
    PaymentStatus: "Processing",
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
