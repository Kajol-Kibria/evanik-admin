const data = [
  {
    ID: 1,
    referenceId: "IN24081222192378952057",
    title: "There is a mismatch in my returns report",
    issue: "Order Processing Related",
    subIssue: "Returns",
    creationDate: "10:19 pm, 12 Aug 24",
    lastUpdatedDate: "2:23 pm, 13 Aug 24",
    status: "Pending Seller action", // Or any other status
  },
  {
    ID: 2,
    referenceId: "IN24081222192378952057",
    title: "There is a mismatch in my returns report",
    issue: "Order Processing Related",
    subIssue: "Returns",
    creationDate: "10:19 pm, 12 Aug 24",
    lastUpdatedDate: "2:23 pm, 13 Aug 24",
    status: "Closed : No response from Seller", // Or any other status
  },
  {
    ID: 3,
    referenceId: "IN24081222192378952057",
    title: "There is a mismatch in my returns report",
    issue: "Order Processing Related",
    subIssue: "Returns",
    creationDate: "10:19 pm, 12 Aug 24",
    lastUpdatedDate: "2:23 pm, 13 Aug 24",
    status: "Claim Approved", // Or any other status
  },
  {
    ID: 4,
    referenceId: "IN24081222192378952057",
    title: "There is a mismatch in my returns report",
    issue: "Order Processing Related",
    subIssue: "Returns",
    creationDate: "10:19 pm, 12 Aug 24",
    lastUpdatedDate: "2:23 pm, 13 Aug 24",
    status: "Not Approved", // Or any other status
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
