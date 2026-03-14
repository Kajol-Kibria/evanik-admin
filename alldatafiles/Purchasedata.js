const data = [
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-00015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-009015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "P-000015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO000015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-00001	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-00009",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-00885	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-00770015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
  },
  {
    Date: "27 Jul 2019",
    Branch: "Head Office	",
    Bills: 324234,
    ReferenceNumber: "PO-004340015	",
    VendorName: "Insta office Business Solutions Pvt Ltd	",
    Status: "Paid",
    DueDate: "27 Jul 2019",
    Amount: "₹ 20, 674.00",
    BalanceDue: "₹ 20, 674.00",
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
