'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getLength, getdata } from '../../../alldatafiles/Detailsdata';
export default function Details() {
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
                  <div className=' w-full  mx-auto overflow-auto my-5'>
                            <table   className="  w-[1200px] sm:w-full">
                                  <thead >
                                           
                                      <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                          <th><h1 className='py-2'>Picklist Name</h1></th>
                                          <th><h1 >OrderId</h1></th>
                                          <th><h1 >OrderItemID</h1></th>
                                          <th><h1 >Skucode</h1></th>
                                          <th><h1 >Qty</h1></th>
                                          <th><h1 >ShippingLabel</h1></th>
                                          <th><h1 >Invoice Label</h1></th>
                                          <th><h1 >Combined</h1></th>
                                          <th><h1 >Action</h1></th>
                                      </tr> 
                                  </thead>
                                  <tbody>
                                      {dataArray.map((data, i)=>(
                                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={i}>
                                     
                                          <td >{data.PicklistName}</td>
                                          <td >{data.OrderId}</td>
                                          <td >{data.OrderItemID}</td>
                                          <td >{data.Skucode}</td>
                                          <td >{data.Qty}</td>
                                          <td >{data.ShippingLabel}</td>
                                          <td >{data.InvoiceLabel}</td>
                                          <td >{data.Combined}</td>
                                          <td >{data.Action}</td>
                                      </tr>
                                      ))}
                                  </tbody>
                                 </table>
                            </div>
                      
                      <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/> 
    </div>
  )
}
