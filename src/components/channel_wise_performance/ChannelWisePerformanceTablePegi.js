'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '../../../alldatafiles/ChannelWisePerformancedata';
export default function ChannelWisePerformanceTablePegi() {
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
        <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-8'>
            <table   className="  w-[1200px] sm:w-full">
                  <thead className=''>
                      <tr className='text-[13px] text-left font-semibold text-gray-500'>
                          <th className='content-end'><h1 className='p-2'>Channel/Warehouse</h1></th>
                          <th>
                            <p className='border-b border-x text-center py-1'>SALE</p>
                            <div className='flex'>
                                <p className='w-1/2 border-l p-2'>Value</p>
                                <p className='w-1/2 border-x p-2'>Units</p>
                            </div>
                          </th>
                          <th>
                            <p className='border-b border-r text-center py-1'>RETURNS</p>
                            <div className='flex'>
                                <p className='w-1/2 p-2'>Value</p>
                                <p className='w-1/2 border-x p-2'>Units</p>
                                <p className=' border-r p-2'>%</p>
                            </div>
                          </th>
                          <th>
                            <p className='border-b border-r text-center py-1'>NET</p>
                            <div className='flex'>
                                <p className='w-1/2 p-2'>Value</p>
                                <p className='w-1/2 border-x p-2'>Units</p>
                            </div>
                          </th>
                          <th className='content-end'><h1 className='p-2'>Charges</h1></th>
                          <th>
                            <p className='border-b border-l text-center py-1'>SETTLEMENT (FOR THE MONTH)</p>
                            <div className='flex'>
                                <p className='w-1/2 border-x p-2'>Paid (%)</p>
                                <p className='w-1/2  p-2'>Unpaid (%)</p>
                            </div>
                          </th>
                      </tr>
                          
                  </thead>
                  <tbody>
                      {dataArray.map(data=>(
                      <tr key={data.ID} className='max-h-[54px] h-[54px] border-t text-sm text-black font-medium'>
                          <td className='py-2 flex items-center gap-2'>
                            <p className='w-9 h-9 border rounded-lg flex items-center justify-center text-gray-700'>fk</p>
                            <p>{data.Channel}</p>
                          </td>
                          <td>
                            <div className='flex'>
                            <p className='w-1/2 mx-2'>{data.Sale.Value}</p>
                            <p className='w-1/2 mx-2'>{data.Sale.Units}</p>
                            </div>
                          </td>
                          <td>
                            <div className='flex'>
                            <p className='w-1/2 mx-2'>{data.Returns.Value}</p>
                            <p className='w-1/2 mx-2'>{data.Returns.Units}</p>
                            <p className='mx-2 text-[#1f674f] text-xs font-semibold'>{data.Returns.Percentage}</p>
                            </div>
                          </td>
                          <td>
                            <div className='flex'>
                            <p className='w-1/2 mx-2'>{data.Net.Value}</p>
                            <p className='w-1/2 mx-2'>{data.Net.Units}</p>
                            </div>
                          </td>
                          <td className=''>{data.Charges}</td>
                          <td>
                            <div className='flex items-center'>
                            <div className='flex justify-between w-1/2'>
                            <p className='mx-2'>{data.Settlement.Paid}</p>
                            <p className='mx-2 text-[#1f674f] text-xs font-semibold'>{data.Settlement.PaidPercentage}</p>
                            </div>
                            <div className='flex justify-between w-1/2'>
                            <p className='mx-2'>{data.Settlement.Paid}</p>
                            <p className='mx-2 text-[#1f674f] text-xs font-semibold'>{data.Settlement.PaidPercentage}</p>
                            </div>
                            </div>
                          </td>
                      </tr>
                      ))}
                  </tbody>
                 </table>
            </div>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
