const data = [
  {
    ID: 20,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 19,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 17,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 16,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 15,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 14,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 13,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 12,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
  },
  {
    ID: 11,
    Status: "Active",
    SKU: "LOXXO-IP 11 CANDY NEW BLUE",
    ProductImage: "/images/img-product.jpg",
    Product:
      "LOXXO Microfiber Candy Case Compatible for iPhone 11 6.1 inch, Shockproof Slim Back Cover Liquid Silicone Case (White)",
    ProductDes: "BXP00XDRP",
    Available: 3,
    Inbound: 30,
    Unfulfillable: 9,
    Reserved: 13,
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
