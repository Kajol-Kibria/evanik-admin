const data = [
  {
    Date: "01-Dec-2024",
    ShipTO: "BOM5",
    ShipmentId: "ship-001",
    SKUs: 3,
    DispatchedQty: 50,
    removedbyFBA: 50,
    Diff: 10,
    SKU: "LOXXO - IPHONE 12 MAX NAVY BLUE",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 12 Pro Max (6.7 inch) Shockproof Slim Back Cover Liquid Silicone Case - Dark Navy Blue",
    Size: " Standard-Size",
    ASIN: " B0B6JGG49K",
    FNSKU: "X0021PXEZ3",
    Received: 200,
    PO: 200,
    Rejected: 200,
    NetGood: 200,
    UnitPrice: 1000,
  },
  {
    Date: "01-Dec-2024",
    ShipTO: "BOM5",
    ShipmentId: "ship-001",
    SKUs: 3,
    DispatchedQty: 50,
    removedbyFBA: 50,
    Diff: 10,
    SKU: "LOXXO - IPHONE 12 MAX NAVY BLUE",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 12 Pro Max (6.7 inch) Shockproof Slim Back Cover Liquid Silicone Case - Dark Navy Blue",
    Size: " Standard-Size",
    ASIN: " B0B6JGG49K",
    FNSKU: "X0021PXEZ3",
    Received: 200,
    PO: 200,
    Rejected: 200,
    NetGood: 200,
    UnitPrice: 1000,
  },
  {
    Date: "01-Dec-2024",
    ShipTO: "BOM5",
    ShipmentId: "ship-001",
    SKUs: 3,
    DispatchedQty: 50,
    removedbyFBA: 50,
    Diff: 10,
    SKU: "LOXXO - IPHONE 12 MAX NAVY BLUE",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 12 Pro Max (6.7 inch) Shockproof Slim Back Cover Liquid Silicone Case - Dark Navy Blue",
    Size: " Standard-Size",
    ASIN: " B0B6JGG49K",
    FNSKU: "X0021PXEZ3",
    Received: 200,
    PO: 200,
    Rejected: 200,
    NetGood: 200,
    UnitPrice: 1000,
  },
  {
    Date: "01-Dec-2024",
    ShipTO: "BOM5",
    ShipmentId: "ship-001",
    SKUs: 3,
    DispatchedQty: 50,
    removedbyFBA: 50,
    Diff: 10,
    SKU: "LOXXO - IPHONE 12 MAX NAVY BLUE",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 12 Pro Max (6.7 inch) Shockproof Slim Back Cover Liquid Silicone Case - Dark Navy Blue",
    Size: " Standard-Size",
    ASIN: " B0B6JGG49K",
    FNSKU: "X0021PXEZ3",
    Received: 200,
    PO: 200,
    Rejected: 200,
    NetGood: 200,
    UnitPrice: 1000,
  },
];

export const getremovedData = function (page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && data[i]; i++) {
    array.push(data[i]);
  }

  return array;
};

export const getremovedLength = function () {
  return data.length;
};
