const data = [
  {
    ID: 1,
    Date: "2025-03-25",
    ChannelName: "amazon",
  },
  {
    ID: 12,
    Date: "2025-03-25",
    ChannelName: "flipkart",
  },
  {
    ID: 31,
    Date: "2025-03-25",
    ChannelName: "meesho",
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
