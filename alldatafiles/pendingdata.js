const pendingdata = [
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATCH5680113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATCH5679801344890",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATCH5679801134480",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BACH56798011348903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATC56798011348903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATH56798013448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATH567980113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
  {
    logo: "/images/img-product.jpg",
    BatchID: "BATCH56980113448903",
    CreateDate: "27 Sep 2023 11:00:00A",
    ItemQty: 122,
    OrderQty: 122,
    OrdersPending: 555,
    OrderCompleted: 255,
  },
];

export const getpendingdata = function (pendingpage, pendinglimit) {
  let array = [];
  for (
    let i = (pendingpage - 1) * pendinglimit;
    i < pendingpage * pendinglimit && pendingdata[i];
    i++
  ) {
    array.push(pendingdata[i]);
  }

  return array;
};

export const getPendinglength = function () {
  return pendingdata.length;
};
