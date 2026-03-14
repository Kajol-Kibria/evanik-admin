
const data = [
    {
      ID:1,
      Channel:'fk', 
      Store:'Divine Crafts', 
      StoreId:'09ksdflad', 
      Warehouse:'BLR05', 
      Date:'28 June, 2024', 
      InvoiceID:'98er0t9nge', 
      Type:'Invoice', 
      GSTIN:'09AAECR987ZR4', 
      TaxableAmount:'2,950',
      InvoiceAmount:'2,950', 
      ShippingCharges:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      CommisionFee:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      AdvertisingExpenses:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
    },
    {
      ID:154,
      Channel:'fk', 
      Store:'Divine Crafts', 
      StoreId:'09ksdflad', 
      Warehouse:'BLR05', 
      Date:'28 June, 2024', 
      InvoiceID:'98er0t9nge', 
      Type:'Invoice', 
      GSTIN:'09AAECR987ZR4', 
      TaxableAmount:'2,950',
      InvoiceAmount:'2,950', 
      ShippingCharges:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      CommisionFee:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      AdvertisingExpenses:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
    },
    {
      ID:15,
      Channel:'fk', 
      Store:'Divine Crafts', 
      StoreId:'09ksdflad', 
      Warehouse:'BLR05', 
      Date:'28 June, 2024', 
      InvoiceID:'98er0t9nge', 
      Type:'Invoice', 
      GSTIN:'09AAECR987ZR4', 
      TaxableAmount:'2,950',
      InvoiceAmount:'2,950', 
      ShippingCharges:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      CommisionFee:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
      AdvertisingExpenses:{
        TaxableValue:'5,845',
        TaxAmount:'1050',
        Total:'6897',
      },
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