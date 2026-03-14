const data = [
  {
    ID: 122,
    ChannelIncidentId: "IN2345679801134489",
    EvanikClaimId: "OD234567980113448903",
    Date: {
      ClaimDate: "27 Sep 2023",
      OrderDate: "27 Sep 2023",
    },
    Cost: {
      Reimbursement: "50%",
      ProductCost: 450000,
      OrderValue: 545646546,
    },
    ClaimStatus: "Approved",
    Comments: "Comments",
    SellerID: "6464sd45s46",
    OrderID: "OD234567980113448903",
    OrderItemID: "OD234567980113448903",
    Whid: "51144",
    ClaimType: "51144",
  },
  {
    ID: 15422,
    ChannelIncidentId: "IN2345679801134489",
    EvanikClaimId: "OD234567980113448903",
    Date: {
      ClaimDate: "27 Sep 2023",
      OrderDate: "27 Sep 2023",
    },
    Cost: {
      Reimbursement: "50%",
      ProductCost: 450000,
      OrderValue: 545646546,
    },
    ClaimStatus: "Approved",
    Comments: "Comments",
    SellerID: "6464sd45s46",
    OrderID: "OD234567980113448903",
    OrderItemID: "OD234567980113448903",
    Whid: "51144",
    ClaimType: "51144",
  },
  {
    ID: 1225,
    ChannelIncidentId: "IN2345679801134489",
    EvanikClaimId: "OD234567980113448903",
    Date: {
      ClaimDate: "27 Sep 2023",
      OrderDate: "27 Sep 2023",
    },
    Cost: {
      Reimbursement: "50%",
      ProductCost: 450000,
      OrderValue: 545646546,
    },
    ClaimStatus: "Approved",
    Comments: "Comments",
    SellerID: "6464sd45s46",
    OrderID: "OD234567980113448903",
    OrderItemID: "OD234567980113448903",
    Whid: "51144",
  },
  {
    ID: 1422,
    ChannelIncidentId: "IN2345679801134489",
    EvanikClaimId: "OD234567980113448903",
    Date: {
      ClaimDate: "27 Sep 2023",
      OrderDate: "27 Sep 2023",
    },
    Cost: {
      Reimbursement: "50%",
      ProductCost: 450000,
      OrderValue: 545646546,
    },
    ClaimStatus: "Approved",
    Comments: "Comments",
    SellerID: "6464sd45s46",
    OrderID: "OD234567980113448903",
    OrderItemID: "OD234567980113448903",
    Whid: "51144",
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
