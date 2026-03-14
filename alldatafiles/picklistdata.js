const picklistdata = [
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BATCH5680113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BATCH580113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BATCH680113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BATC5680113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BATH5680113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BACH568011348903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BTCH568011344903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BTCH568011344803",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BTCH568011344893",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
  {
    logo: "/images/img-product.jpg",
    PicklistID: "BTCH568011344890",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQtyRequired: 122,
    ItemQtyPicked: 122,
    ItemQtyPending: 555,
  },
];

export const getpPicklistdata = function (picklistpage, picklistlimit) {
  let array = [];
  for (
    let i = (picklistpage - 1) * picklistlimit;
    i < picklistpage * picklistlimit && picklistdata[i];
    i++
  ) {
    array.push(picklistdata[i]);
  }

  return array;
};

export const getPicklistlength = function () {
  return picklistdata.length;
};
