'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getLength, getdata } from '../../../alldatafiles/HandOverdata';

export default function HandOver() {
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
                                          <th><h1 className='py-2'>Location Id</h1></th>
                                          <th><h1 >Vendor Group Code</h1></th>
                                          <th><h1 >Count</h1></th>
                                          <th><h1 >Pickup After</h1></th>
                                          <th><h1 >Pickup Before</h1></th>
                                          <th><h1 >OTC</h1></th>
                                          <th><h1 >IS Maps</h1></th>
                                          <th><h1 >Manifest Pdf</h1></th>
                                      </tr> 
                                  </thead>
                                  <tbody>
                                      {dataArray.map((data, i)=>(
                                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={i}>
                                     
                                          <td >{data.LocationId}</td>
                                          <td >{data.VendorGroupCode}</td>
                                          <td >{data.Count}</td>
                                          <td >{data.PickupAfter}</td>
                                          <td >{data.PickupBefore}</td>
                                          <td >{data.OTC}</td>
                                          <td >{data.ISMaps}</td>
                                          <td >{data.ManifestPdf}</td>
                                      </tr>
                                      ))}
                                  </tbody>
                                 </table>
                            </div>
                      
                      <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>   
    </div>
  )
}
