// Mock data for goods receipt notes
const mockData = [
  {
    GRNID: "GRN001",
    Date: "2024-03-22",
    SupplierName: "Supplier 1",
    PurchaseOrder: "PO001",
    Items: [
      {
        SKU: "SKU001",
        Name: "Product 1",
        OrderedQty: 100,
        ReceivedQty: 98,
        Status: "Partial",
      },
      {
        SKU: "SKU002",
        Name: "Product 2",
        OrderedQty: 50,
        ReceivedQty: 50,
        Status: "Complete",
      },
    ],
    Status: "Processed",
    ReceivedBy: "John Smith",
    Warehouse: "WH001",
    Notes: "Two units damaged in transit",
  },
  {
    GRNID: "GRN002",
    Date: "2024-03-22",
    SupplierName: "Supplier 2",
    PurchaseOrder: "PO002",
    Items: [
      {
        SKU: "SKU003",
        Name: "Product 3",
        OrderedQty: 75,
        ReceivedQty: 75,
        Status: "Complete",
      },
    ],
    Status: "Pending QC",
    ReceivedBy: "Jane Doe",
    Warehouse: "WH002",
    Notes: "Quality check pending",
  },
  {
    GRNID: "GRN003",
    Date: "2024-03-22",
    SupplierName: "Supplier 3",
    PurchaseOrder: "PO003",
    Items: [
      {
        SKU: "SKU004",
        Name: "Product 4",
        OrderedQty: 200,
        ReceivedQty: 200,
        Status: "Complete",
      },
      {
        SKU: "SKU005",
        Name: "Product 5",
        OrderedQty: 150,
        ReceivedQty: 150,
        Status: "Complete",
      },
    ],
    Status: "Completed",
    ReceivedBy: "Mike Wilson",
    Warehouse: "WH003",
    Notes: "All items received in good condition",
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
