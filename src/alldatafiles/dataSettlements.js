// Mock data for channel settlements
const mockData = [
  {
    SettlementID: "SET001",
    Logo: "/images/img-product.jpg",
    Channel: "Amazon",
    SettlementDate: "2024-03-22",
    TotalAmount: "₹50000",
    Commission: "₹5000",
    Shipping: "₹2000",
    Tax: "₹3000",
    NetAmount: "₹40000",
    Status: "Completed",
  },
  {
    SettlementID: "SET002",
    Logo: "/images/img-product.jpg",
    Channel: "Flipkart",
    SettlementDate: "2024-03-22",
    TotalAmount: "₹45000",
    Commission: "₹4500",
    Shipping: "₹1800",
    Tax: "₹2700",
    NetAmount: "₹36000",
    Status: "Pending",
  },
  {
    SettlementID: "SET003",
    Logo: "/images/img-product.jpg",
    Channel: "Meesho",
    SettlementDate: "2024-03-22",
    TotalAmount: "₹35000",
    Commission: "₹3500",
    Shipping: "₹1400",
    Tax: "₹2100",
    NetAmount: "₹28000",
    Status: "Processing",
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
