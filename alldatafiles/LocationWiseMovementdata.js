const data = [
    {
      SKU: "AA_334",
      NorthTotal: "06",
      NorthWestTotal: "06",
      EastTotal: "06",
      WestTotal: "06",
      SouthTotal: "06",
      NorthEastTotal: "06",
      GrandTotal: "06",
      Statedata : {
        metrics: [
          { name: "Total Orders", value: "15,000 orders" },
          { name: "Highest Selling Product Category", value: "Electronics" },
          { name: "Average Order Value", value: "₹ 85,000" },
        ],
        quarters: [
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
        ],
      }
    },
    {
      SKU: "AA_334",
      NorthTotal: "06",
      NorthWestTotal: "06",
      EastTotal: "06",
      WestTotal: "06",
      SouthTotal: "06",
      NorthEastTotal: "06",
      GrandTotal: "06",
      Statedata : {
        metrics: [
          { name: "Total Orders", value: "15,000 orders" },
          { name: "Highest Selling Product Category", value: "Electronics" },
          { name: "Average Order Value", value: "₹ 85,000" },
        ],
        quarters: [
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
        ],
      }
    },
    {
      SKU: "AA_334",
      NorthTotal: "06",
      NorthWestTotal: "06",
      EastTotal: "06",
      WestTotal: "06",
      SouthTotal: "06",
      NorthEastTotal: "06",
      GrandTotal: "06",
      Statedata : {
        metrics: [
          { name: "Total Orders", value: "15,000 orders" },
          { name: "Highest Selling Product Category", value: "Electronics" },
          { name: "Average Order Value", value: "₹ 85,000" },
        ],
        quarters: [
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
          { quarter: "Q2 (Apr-Jun)", netRevenue: "₹ 85,000", unitsSold: 15000 },
        ],
      }
    },
    
  ]


  export const getdata = function(page, limit){
    let array = [];
    for (let i = (page - 1)* limit; i < (page * limit) && data[i]; i++) {
        array.push(data[i]);
        
    }
    
    return array;
    
}


export const getLength = function () {
    return data.length;
}