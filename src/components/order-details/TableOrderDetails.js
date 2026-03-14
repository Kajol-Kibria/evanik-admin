import React from 'react'
import Link from 'next/link';
export default function TableOrderDetails(props) {
  return (
    <div>
      <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
    <table   className="  w-[1200px] sm:w-full">
          <thead className=''>
                   
              <tr className=' text-[13px] text-left font-semibold text-gray-500'>
                  <th ><h1 className=''>Date</h1></th>
                  <th ><h1 className=''>Order ID</h1></th>
                  <th ><h1 className=''>SKU Code</h1></th>
                  <th ><h1 className=''>IMEI</h1></th>
                  <th ><h1 className=''>Qty</h1></th>
                  <th ><h1 className=''>Sale Status</h1></th>
                  <th ><h1 className=''>Sale Amount</h1></th>
                  <th ><h1 className=''>Total fee</h1></th>
                  <th ><h1 className=''>COGS</h1></th>
                  <th ><h1 className=''>Margin</h1></th>
                  <th ><h1 className=''>Net Payout</h1></th>
              </tr>
                  
          </thead>
          <tbody>
              {props.dataArray.map((data,i) =>(

              <tr  key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black '>
                  
                  
                  <td className=''><Link href='/Order-Details-Modal'>{data.Warehouse}</Link></td>
                  <td className=''>{data.Date}</td>
                  <td className=''>{data.OrderID}</td>
                  <td className=''>{data.SKUCode}</td>
                  <td className=''>{data.Qty}</td>
                  <td className='' >
                  <div className={`${data.SaleStatus === 'Paid'?'text-[#1f674f] bg-[#e7fbe4]':'text-[#aa791d] bg-[#fbf3e4]'} py-2 px-4 rounded-full w-20 text-center`}>{data.SaleStatus}</div>
                  </td>
                  <td className=''>{data.SaleAmount}</td>
                  <td className=''>{data.Totalfee}</td>
                  <td className=''>{data.NetPayout}</td>
                  <td className=''>{data.COGS}</td>
                  <td className=''>{data.Margin}</td>
                  <td className=''>
                      
                  </td>
              </tr>
              ))}
          </tbody>
         </table>
    </div>
    </div>
  )
}
