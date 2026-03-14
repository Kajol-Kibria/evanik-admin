const data = [
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
  },
  {
    Product: 2345134489,
    ASIN: 345448903,
    RecommendedFCzone: 646454546,
    AlternateFC: 646454546,
    Monthlyorders: 50000,
    ShiptoFCDate: 27092023,
    InstockInventory: 450000,
    Accuracy: 70,
    RecommendQty: 1000000,
    RecommendationCoverageWeeks: 500,
    CreateInbound: 0,
    Daysofsupplyleft: 50000,
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
