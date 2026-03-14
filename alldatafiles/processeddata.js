const processeddata = [
  {
    OrderID: "OD23456798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "O23456798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Courier Return",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD3456798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Not Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD2356798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD256798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD2346798011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD2345698011344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
  {
    OrderID: "OD234569801190344",
    OrderItemID: "I567980113448903",
    Pakage: "Default (10 x10x 10)",
    Qty: 122,
    Status: "Delivered",
    area: "West Bengal",
    Couriername: "Courier name",
    TrackingId: "Tracking Id",
  },
];

export const getProcesseddata = function (processedpage, processedlimit) {
  let array = [];
  for (
    let i = (processedpage - 1) * processedlimit;
    i < processedpage * processedlimit && processeddata[i];
    i++
  ) {
    array.push(processeddata[i]);
  }

  return array;
};

export const getProcessedlength = function () {
  return processeddata.length;
};
