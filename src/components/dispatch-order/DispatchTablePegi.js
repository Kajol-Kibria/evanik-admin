'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '../../alldatafiles/dispatchdata';

export default function DispatchTablePegi() {
     const [limit, setLimit] = useState(7);
                const [page, setPage] = useState(1);
                 let totalPage = Math.ceil(getLength()/limit);
                function handlePageChange(value){
                    if (value === 'Previous') {
                      if (page !== 1) {
                        setPage(page - 1);
                      }
                    } else if (value === 'Next') {
                      if (page !== totalPage) {
                        setPage(page + 1);
                      }
                    }
                    
                  }
        
                  const dataArray = getdata(page, limit);
  return (
    <div>
        <div>
              <div className='sm:h-[500px] w-full  mx-auto overflow-auto my-5'>
            <table   className="  w-[1200px] sm:w-full">
                  <thead className=''>
                           
                      <tr className=' text-[13px] text-left text-gray-500'>
                          <th ><h1 className='  my-2'>Order Date</h1></th>
                          <th ><h1 className=''>Order ID</h1></th>
                          <th ><h1 className=''>OrderItemID</h1></th>
                          <th ><h1 className=''>SKU Code</h1></th>
                          <th ><h1 className=''>Qty</h1></th>
                          <th ><h1 className=''>Sale Status</h1></th>
                          <th ><h1 className=''>Tracking ID</h1></th>
                      </tr>
                          
                  </thead>
                  <tbody>
                      {dataArray.map(data=>(
        
                      <tr key={data.ID} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                          
                          <td className=''>{data.Date}</td>
                          <td className=''>{data.OrderID}</td>
                          <td className=''>{data.OrderItemID}</td>
                          <td className=''>{data.Qty}</td>
                          <td className=''>{data.SaleStatus}</td>
                          <td className=''>{data.SaleAmount}</td>
                          <td className=''>{data.Totalfee}</td>
                          <td className=''>{data.COGS}</td>
                          <td className=''>{data.Margin}</td>
                          
                      </tr>
                      ))}
                  </tbody>
                 </table>
            </div>
            </div>
            <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
