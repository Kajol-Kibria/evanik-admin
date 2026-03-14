const data = [
  {
    ID: 1,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 2,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 3,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 4,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 5,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 51,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 6,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 7,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 67,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 66,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
  },

  {
    ID: 64,
    Pic: "/images/img-product.jpg",
    ProductInfo: "Half Sleeve T-shirt",
    ProductInfoDescrip: "Men Color block Round Neck Pure Cotton White T-Shirt",
    Categrory: "Clothing",
    CurrentStock: 20,
    AvailableStock: 200,
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
