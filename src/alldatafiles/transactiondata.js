// Mock data for transactions
const mockData = [
  {
    TransactionID: "TRX001",
    Date: "2024-03-22",
    Type: "Purchase",
    ReferenceNo: "PO001",
    Amount: "₹65000",
    PaymentMethod: "Bank Transfer",
    Status: "Completed",
    Remarks: "Regular purchase payment",
    Party: "Supplier 1",
  },
  {
    TransactionID: "TRX002",
    Date: "2024-03-22",
    Type: "Sale",
    ReferenceNo: "SO001",
    Amount: "₹45000",
    PaymentMethod: "Credit Card",
    Status: "Completed",
    Remarks: "Online sale payment",
    Party: "Customer 1",
  },
  {
    TransactionID: "TRX003",
    Date: "2024-03-22",
    Type: "Refund",
    ReferenceNo: "RF001",
    Amount: "₹5000",
    PaymentMethod: "Bank Transfer",
    Status: "Pending",
    Remarks: "Return refund",
    Party: "Customer 2",
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
