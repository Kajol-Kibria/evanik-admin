// Mock data for vendor management
const mockData = [
  {
    VendorID: "VEN001",
    Name: "Supplier 1",
    ContactPerson: "John Smith",
    Email: "john@supplier1.com",
    Phone: "+91 9876543210",
    Address: {
      Street: "123 Business Park",
      City: "Mumbai",
      State: "Maharashtra",
      Pincode: "400001",
    },
    Category: "Electronics",
    Status: "Active",
    Rating: 4.5,
    PaymentTerms: "Net 30",
    LastOrderDate: "2024-03-20",
  },
  {
    VendorID: "VEN002",
    Name: "Supplier 2",
    ContactPerson: "Jane Doe",
    Email: "jane@supplier2.com",
    Phone: "+91 9876543211",
    Address: {
      Street: "456 Industrial Area",
      City: "Delhi",
      State: "Delhi",
      Pincode: "110001",
    },
    Category: "Fashion",
    Status: "Active",
    Rating: 4.2,
    PaymentTerms: "Net 45",
    LastOrderDate: "2024-03-18",
  },
  {
    VendorID: "VEN003",
    Name: "Supplier 3",
    ContactPerson: "Mike Wilson",
    Email: "mike@supplier3.com",
    Phone: "+91 9876543212",
    Address: {
      Street: "789 Tech Park",
      City: "Bangalore",
      State: "Karnataka",
      Pincode: "560001",
    },
    Category: "Home",
    Status: "Inactive",
    Rating: 3.8,
    PaymentTerms: "Net 60",
    LastOrderDate: "2024-03-15",
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
