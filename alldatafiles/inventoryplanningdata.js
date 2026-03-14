const data = [
  {
    Master: "Red T-Shirt (Large)",
    ListedMarketplace: 5,
    SalesandProfits:
      "ASP of Rs. 1439/- with a Gross margin of Rs. 232/- (23.1%)",
    SalesTrends: 10,
    Forecast: 12,
    CurrentInventory: 19,
    RestockThresholdQty: 188,
    DaystoReplenish: 18,
    DOSA: -2.2,
    SuggestedReplenishment: 159,
    ReplenishmentProfits: 188,

    Az: 1299,
    Fk: 1299,
    Sd: 1299,
    Ms: 1299,
    My: 1299,
    Last7Days: 1299,
    Last15Days: 1299,
    Last30Days: 1299,
    Last45Days: 1299,
    Yesterday: 1299,
    Weighted_Daily: 1299,
    BLR5: 1299,
    BLR7: 1299,
    BOM3: 1299,
    BOM7: 1299,
    HYD8: 1000,
    DEL4: 32,
  },
  {
    Master: "Red T-Shirt (Large)",
    ListedMarketplace: 5,
    SalesandProfits:
      "ASP of Rs. 1439/- with a Gross margin of Rs. 232/- (23.1%)",
    SalesTrends: 10,
    Forecast: 12,
    CurrentInventory: 19,
    RestockThresholdQty: 188,
    DaystoReplenish: 18,
    DOSA: -2.2,
    SuggestedReplenishment: 159,
    ReplenishmentProfits: 188,

    Az: 1299,
    Fk: 1299,
    Sd: 1299,
    Ms: 1299,
    My: 1299,
    Last7Days: 1299,
    Last15Days: 1299,
    Last30Days: 1299,
    Last45Days: 1299,
    Yesterday: 1299,
    Weighted_Daily: 1299,
    BLR5: 1299,
    BLR7: 1299,
    BOM3: 1299,
    BOM7: 1299,
    HYD8: 1000,
    DEL4: 32,
  },
  {
    Master: "Red T-Shirt (Large)",
    ListedMarketplace: 5,
    SalesandProfits:
      "ASP of Rs. 1439/- with a Gross margin of Rs. 232/- (23.1%)",
    SalesTrends: 10,
    Forecast: 12,
    CurrentInventory: 19,
    RestockThresholdQty: 188,
    DaystoReplenish: 18,
    DOSA: -2.2,
    SuggestedReplenishment: 159,
    ReplenishmentProfits: 188,

    Az: 1299,
    Fk: 1299,
    Sd: 1299,
    Ms: 1299,
    My: 1299,
    Last7Days: 1299,
    Last15Days: 1299,
    Last30Days: 1299,
    Last45Days: 1299,
    Yesterday: 1299,
    Weighted_Daily: 1299,
    BLR5: 1299,
    BLR7: 1299,
    BOM3: 1299,
    BOM7: 1299,
    HYD8: 1000,
    DEL4: 32,
  },
];

export const getdata = function (page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && data[i]; i++) {
    array.push(data[i]);
  }

  return array;
};

export const getLength = function () {
  return data.length;
};
