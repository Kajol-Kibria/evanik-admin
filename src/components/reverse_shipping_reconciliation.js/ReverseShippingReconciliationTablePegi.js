'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '@/alldatafiles/reverseshippingchargesdata';

export default function ReverseShippingReconciliationTablePegi() {
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
                      <th><h1 className='px-2'>Payment Date</h1></th>
                      <th><h1 className='px-2'>Order Id</h1></th>
                      <th><h1 className='px-2'>Order Item Id</h1></th>
                      <th><h1 className='px-2'>Reverse Shipping charge</h1></th>
                      <th><h1 className='px-2'>Reimbursement</h1></th>
                  </tr>
                      
              </thead>
              <tbody>
                  {dataArray.map((data, i)=>(
                  <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                      <td className='px-2'>{data.channel}</td>
                      <td className='px-2'>{data.paymentDate}</td>
                      <td className='px-2'>{data.orderID}</td>
                      <td className='px-2'>{data.orderItemID}</td>
                      <td className='px-2'>{data.reverseshippingcharge}</td>
                      <td className='px-2'>{data.reimbursement}</td>
                  </tr>
                  ))}
              </tbody>
             </table>
        </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
