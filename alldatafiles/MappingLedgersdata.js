const data = [
  {
    ID: 1,
    Name: "Amazon Sales",
    Type: "Sundry debators",
  },
  {
    ID: 13,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 154,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 12,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 132,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 14542,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 1652,
    Name: "Sales and Returns Data format",
    Type: "data",
  },

  {
    ID: 15142,
    Name: "Sales and Returns Data format",
    Type: "data",
  },
  {
    ID: 1652,
    Name: "Sales and Returns Data format",
    Type: "data",
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
