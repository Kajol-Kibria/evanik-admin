'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '../../../alldatafiles/reimbursementdata';
export default function ReimbursementTablePegi() {
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
            <div className='sm:h-[380px] w-full  mx-auto overflow-auto my-5'>
                      <table className="w-[1200px] sm:w-full">
                            <thead>
                                <tr className=' text-[14px]  text-left font-semibold   text-gray-500'>
                                <th><h1>Payment Date</h1></th>
                                    <th><h1>SellerId</h1></th>
                                    <th><h1>Warehouse ID</h1></th>
                                    <th><h1>Order Id</h1></th>
                                    <th><h1>OrderItem Id</h1></th>
                                    <th><h1>SKUcode</h1></th>
                                    <th><h1>Qty</h1></th>
                                    <th><h1>Order Value</h1></th>
                                    <th><h1>Reimbursement</h1></th>
                                </tr>
                                    
                            </thead>
                            <tbody>
                                {dataArray.map((data, i)=>(
                                <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black '>
                                    <td className='py-2'>
                                      {data.PaymentDate}
                                    </td>
                                    <td className='py-2'>
                                      {data.SellerId}
                                    </td>
                                    <td>
                                      <p>{data.WarehouseID}</p>
                                    </td>
                                    <td>
                                      {data.OrderId}
                                    </td> 
                                    <td>
                                      {data.OrderItemId}
                                    </td> 
                                    <td>
                                      {data.SKUcode}
                                    </td> 
                                    <td>
                                      {data.Qty}
                                    </td> 
                                    <td>
                                      {data.OrderValue}
                                    </td> 
                                    <td>
                                      {data.Reimbursement}
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
