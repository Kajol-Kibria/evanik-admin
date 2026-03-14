// Mock data for inventory planning
const mockData = [
  {
    SKU: "SKU001",
    Channel: "az",
    SalesandProfits: 100,
    DailySales: 50,
    Forecast: 200,
    CurrentInventory: 75,
    RestockThreshold: "7 days",
    DaystoReplenish: 150,
    DOSA: 100,
    InTransit: 100,
    SuggestedPOQty: 100,
    ExcessQty: 100,
    ReplenishmentProfits: 170,
  },
  {
    SKU: "SKU001",
    Channel: "az",
    SalesandProfits: 100,
    DailySales: 50,
    Forecast: 200,
    CurrentInventory: 75,
    RestockThreshold: "7 days",
    DaystoReplenish: 150,
    DOSA: 100,
    InTransit: 100,
    SuggestedPOQty: 100,
    ExcessQty: 100,
    ReplenishmentProfits: 100,
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
