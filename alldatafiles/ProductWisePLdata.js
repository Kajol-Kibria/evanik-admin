const data = [
  {
    name: "VSDML2",
    info: "VI John Classic Mento",
    sales: 654789,
    purchase: 654789,
    expense: 654789,
    profit: 654789,
    // Add more data fields as needed from the image
    salesDetails: {
      netUnits: {
        sales: 654789,
        returns: 654789,
        net: 654789,
      }, //Example, replace with actual value
      value: {
        returns: 654789,
        net: 654789,
        total: 654789,
      }, //Example, replace with actual value
      purchase: 654789,
      beforeGST: 654789,
    },

    purchaseDetails: {
      purchase: 654789,
      beforeGST: 654789,
    },
    expenseDetails: {
      channelExpenses: 654789,
      perUnit: 654789,
      beforeGST: 654789,
    },
    profitDetails: {
      grossUnitMargin: 654789,
      netPayableGST: 654789,
      netUnitMargin: 654789,
      percentage: 654789,
    },
    history: {
      date: "Jul 26, 2024",
      sales: 654789,
      purchase: 654789,
      expense: 654789,
      profit: 654789,
    },
  },
  {
    name: "VSDML2",
    info: "VI John Classic Mento",
    sales: 654789,
    purchase: 654789,
    expense: 654789,
    profit: 654789,
    // Add more data fields as needed from the image
    salesDetails: {
      netUnits: {
        sales: 654789,
        returns: 654789,
        net: 654789,
      }, //Example, replace with actual value
      value: {
        returns: 654789,
        net: 654789,
        total: 654789,
      }, //Example, replace with actual value
      purchase: 654789,
      beforeGST: 654789,
    },

    purchaseDetails: {
      purchase: 654789,
      beforeGST: 654789,
    },
    expenseDetails: {
      channelExpenses: 654789,
      perUnit: 654789,
      beforeGST: 654789,
    },
    profitDetails: {
      grossUnitMargin: 654789,
      netPayableGST: 654789,
      netUnitMargin: 654789,
      percentage: 654789,
    },
    history: {
      date: "Jul 26, 2024",
      sales: 654789,
      purchase: 654789,
      expense: 654789,
      profit: 654789,
    },
  },
  {
    name: "VSDML2",
    info: "VI John Classic Mento",
    sales: 654789,
    purchase: 654789,
    expense: 654789,
    profit: 654789,
    // Add more data fields as needed from the image
    salesDetails: {
      netUnits: {
        sales: 654789,
        returns: 654789,
        net: 654789,
      }, //Example, replace with actual value
      value: {
        returns: 654789,
        net: 654789,
        total: 654789,
      }, //Example, replace with actual value
      purchase: 654789,
      beforeGST: 654789,
    },

    purchaseDetails: {
      purchase: 654789,
      beforeGST: 654789,
    },
    expenseDetails: {
      channelExpenses: 654789,
      perUnit: 654789,
      beforeGST: 654789,
    },
    profitDetails: {
      grossUnitMargin: 654789,
      netPayableGST: 654789,
      netUnitMargin: 654789,
      percentage: 654789,
    },
    history: {
      date: "Jul 26, 2024",
      sales: 654789,
      purchase: 654789,
      expense: 654789,
      profit: 654789,
    },
  },
  {
    name: "VSDML2",
    info: "VI John Classic Mento",
    sales: 654789,
    purchase: 654789,
    expense: 654789,
    profit: 654789,
    // Add more data fields as needed from the image
    salesDetails: {
      netUnits: {
        sales: 654789,
        returns: 654789,
        net: 654789,
      }, //Example, replace with actual value
      value: {
        returns: 654789,
        net: 654789,
        total: 654789,
      }, //Example, replace with actual value
      purchase: 654789,
      beforeGST: 654789,
    },

    purchaseDetails: {
      purchase: 654789,
      beforeGST: 654789,
    },
    expenseDetails: {
      channelExpenses: 654789,
      perUnit: 654789,
      beforeGST: 654789,
    },
    profitDetails: {
      grossUnitMargin: 654789,
      netPayableGST: 654789,
      netUnitMargin: 654789,
      percentage: 654789,
    },
    history: {
      date: "Jul 26, 2024",
      sales: 654789,
      purchase: 654789,
      expense: 654789,
      profit: 654789,
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
