const data = [
  {
    ID: 1,
    RuleType: "Sales and Returns Data format",
    Rule: "data",
    Channels: ["fk", "az", "ms", "sd", "ik"],
  },
  {
    ID: 12,
    RuleType: "Sales and Returns Data format",
    Rule: "data",
    Channels: ["fk", "az", "ms", "sd", "ik"],
  },
  {
    ID: 14,
    RuleType: "Sales and Returns Data format",
    Rule: "data",
    Channels: ["fk", "az", "ms", "sd", "ik"],
  },
  {
    ID: 112,
    RuleType: "Sales and Returns Data format",
    Rule: "data",
    Channels: ["fk", "az", "ms", "sd", "ik"],
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
