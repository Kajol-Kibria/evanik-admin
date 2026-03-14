'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '@/alldatafiles/autoreturnclaimlog';


export default function AutoReturnClaimLog() {
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
                      <th  className='p-2'><input type='checkbox'/></th>
                      <th><h1 className='p-2'>ID</h1></th>
                      <th><h1 className='px-2'>Date</h1></th>
                      <th><h1 className='px-2'>Cost</h1></th>
                      <th><h1 className='px-2'>Claim Status</h1></th>
                      <th><h1 className='px-2'>Comments</h1></th>
                  </tr>
              </thead>
              <tbody>
                  {dataArray.map((data, i)=>(
                  <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                      <td className='px-2'><input type='checkbox'/></td>
                      <td className='px-2'>{data.ID}</td>
                      <td className='px-2'>{data.date}</td>
                      <td className='px-2'>{data.cost}</td>
                      <td className='px-2'>{data.claimStatus}</td>
                      <td className='px-2'>{data.comments}</td>
                  </tr>
                  ))}
              </tbody>
             </table>
        </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
