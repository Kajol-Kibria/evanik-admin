const data = [
  {
    logo: "/images/img-product.jpg",
    InvoiceNo: "34567980113448903",
    InvoiceDate: "7 Sep 2023",
    OrderRef: "OD2345679801134",
    Date: 3,
    ItemRef: "Not Received",
    Warehouse: "Not Received",
    Fulfillment: "28 June, 2024",
    SKU: "NVJ2017",
    OrdervalueQty: "329.00 (1)",
    ExpectedPayout: "329.00",
    PicklistID: "6464sd45s46",
    HSN: "00001",
    City: "Howrah",
    Pincode: "464564",
    State: "West Bengal",
    Name: "Processed",
    Address: 1,
    Status: "Approved",
    PaymentStatus: "Unpaid",
  },

  {
    logo: "/images/img-product.jpg",
    InvoiceNo: "34567980113448903",
    InvoiceDate: "7 Sep 2023",
    OrderRef: "OD2345679801134",
    Date: 3,
    ItemRef: "Not Received",
    Warehouse: "Not Received",
    Fulfillment: "28 June, 2024",
    SKU: "NVJ2017",
    OrdervalueQty: "329.00 (1)",
    ExpectedPayout: "329.00",
    PicklistID: "6464sd45s46",
    HSN: "00001",
    City: "Howrah",
    Pincode: "464564",
    State: "West Bengal",
    Name: "Shipped",
    Address: 1,
    Status: "Shipped",
    PaymentStatus: "Unpaid",
  },

  {
    logo: "/images/img-product.jpg",
    InvoiceNo: "34567980113448903",
    InvoiceDate: "7 Sep 2023",
    OrderRef: "OD2345679801134",
    Date: 3,
    ItemRef: "Not Received",
    Warehouse: "Not Received",
    Fulfillment: "28 June, 2024",
    SKU: "NVJ2017",
    OrdervalueQty: "329.00 (1)",
    ExpectedPayout: "329.00",
    PicklistID: "6464sd45s46",
    HSN: "00001",
    City: "Howrah",
    Pincode: "464564",
    State: "West Bengal",
    Name: "Processed",
    Address: 1,
    Status: "Returned",
    PaymentStatus: "Unpaid",
  },
  {
    logo: "/images/img-product.jpg",
    InvoiceNo: "34567980113448903",
    InvoiceDate: "7 Sep 2023",
    OrderRef: "OD2345679801134",
    Date: 3,
    ItemRef: "Not Received",
    Warehouse: "Not Received",
    Fulfillment: "28 June, 2024",
    SKU: "NVJ2017",
    OrdervalueQty: "329.00 (1)",
    ExpectedPayout: "329.00",
    PicklistID: "6464sd45s46",
    HSN: "00001",
    City: "Howrah",
    Pincode: "464564",
    State: "West Bengal",
    Name: "Processed",
    Address: 1,
    Status: "Cancelled",
    PaymentStatus: "Unpaid",
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
