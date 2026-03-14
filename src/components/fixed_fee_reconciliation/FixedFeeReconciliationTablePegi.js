'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata ,getLength} from '@/alldatafiles/fixedfeereconciliationdata';

export default function FixedFeeReconciliationTablePegi() {
          const [limit, setLimit] = useState(7);
          const [page, setPage] = useState(1);
          let totalPage = Math.ceil(getLength() / limit);
          function handlePageChange(value) {
            if (value === "Previous") {
              if (page !== 1) {
                setPage(page - 1);
              }
            } else if (value === "Next") {
              if (page !== totalPage) {
                setPage(page + 1);
              }
            }
          }
          const dataArray = getdata(page, limit);
  return (
    <div>
      <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
        <table className="w-[1300px] 2xl:w-full">
              <thead>  
                  <tr className=' text-[13px]  text-left font-semibold   text-gray-500'>
                      <th><h1 className='p-2'>Channel</h1></th>
                      <th><h1 className='px-2'>SKU Code</h1></th>
                      <th><h1 className='px-2'>Date</h1></th>
                      <th><h1 className='px-2'>Order Id</h1></th>
                      <th><h1 className='px-2'>Order Item Id</h1></th>
                      <th><h1 className='px-2'>Order Value</h1></th>
                      <th><h1 className='px-2'>Payout</h1></th>
                      <th><h1 className='px-2'>Applicable Fixed Fee</h1></th>
                      <th><h1 className='px-2'>Applied Fixed Fee</h1></th>
                      <th><h1 className='px-2'>Gap</h1></th>
                      <th><h1 className='px-2'>Reimbursement/ Status</h1></th>
                  </tr>
                      
              </thead>
              <tbody>
                  {dataArray.map((data, i)=>(
                  <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                      <td className='px-2'>{data.channel}</td>
                      <td className='px-2'>{data.skuCode}</td>
                      <td className='px-2'>{data.date}</td>
                      <td className='px-2'>{data.orderID}</td>
                      <td className='px-2'>{data.orderItemID}</td>
                      <td className='px-2'>{data.orderValue}</td>
                      <td className='px-2'>{data.payout}</td>
                      <td className='px-2'>{data.applicableFixesFee}</td>
                      <td className='px-2'>{data.appliedFixesFee}</td>
                      <td className='px-2'>{data.gap}</td>
                      <td className='px-2'>{data.status}</td>
                  </tr>
                  ))}
              </tbody>
             </table>
        </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
