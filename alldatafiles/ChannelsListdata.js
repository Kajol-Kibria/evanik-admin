const data = [
  {
    ID: 1,
    Channels: "blinkit",
    LastSyncedOn: {
      Sales: "data",
      Returns: "data",
      Payments: "data",
    },
    ProductInfo: {
      TotalSKUs: "data",
      Unmapped: "data",
    },
    ClaimableReportsStatus: {
      UnsellableReturns: "data",
      UnpaidOrders: "data",
      PendingReturns: "data",
      ShippingVariance: "data",
    },

    Returnstoberecieved: "data",
    AutoClaimStatus: {
      PendingReturns: "data",
      PendingReturnsSentOn: "data",
      Returnsnotexpected: "data",
      ReturnsnotexpectedSentOn: "data",
    },
  },
  {
    ID: 16,
    Channels: "blinkit",
    LastSyncedOn: {
      Sales: "data",
      Returns: "data",
      Payments: "data",
    },
    ProductInfo: {
      TotalSKUs: "data",
      Unmapped: "data",
    },
    ClaimableReportsStatus: {
      UnsellableReturns: "data",
      UnpaidOrders: "data",
      PendingReturns: "data",
      ShippingVariance: "data",
    },

    Returnstoberecieved: "data",
    AutoClaimStatus: {
      PendingReturns: "data",
      PendingReturnsSentOn: "data",
      Returnsnotexpected: "data",
      ReturnsnotexpectedSentOn: "data",
    },
  },
  {
    ID: 31,
    Channels: "blinkit",
    LastSyncedOn: {
      Sales: "data",
      Returns: "data",
      Payments: "data",
    },
    ProductInfo: {
      TotalSKUs: "data",
      Unmapped: "data",
    },
    ClaimableReportsStatus: {
      UnsellableReturns: "data",
      UnpaidOrders: "data",
      PendingReturns: "data",
      ShippingVariance: "data",
    },

    Returnstoberecieved: "data",
    AutoClaimStatus: {
      PendingReturns: "data",
      PendingReturnsSentOn: "data",
      Returnsnotexpected: "data",
      ReturnsnotexpectedSentOn: "data",
    },
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
