const data = [
  {
    ID: 1,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
  },
  {
    ID: 2,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
  },
  {
    ID: 3,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
  },
  {
    ID: 4,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
  },
  {
    ID: 5,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
  },
  {
    ID: 6,
    Channel: "Flipkart",
    ChannelId: "6685636H-6566",
    SKUCode: "sPBC10",
    Date: "27 Sep 2023",
    Applicable: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    Applied: {
      zone: "Zone",
      weight: 300,
      shippingFee: 0.06,
    },
    OrderID: "0202457901044903",
    Warehouse: "fk - BLR - 001",
    ItemID: "33456798011344890300",
    PaymentDate: "27 Sep 2023",
    Gap: 75,
    Status: "Delivered",
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
