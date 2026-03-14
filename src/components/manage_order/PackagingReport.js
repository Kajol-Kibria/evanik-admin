'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getLength, getdata } from '../../../alldatafiles/PackagingReportdata';
export default function PackagingReport() {
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
                                          <th><h1 className='py-2'>Date</h1></th>
                                          <th><h1 >Channel Name</h1></th>
                                          <th><h1 >Download PDF</h1></th>
                                          <th><h1 >Downlaod CSV</h1></th>
                                      </tr> 
                                  </thead>
                                  <tbody>
                                      {dataArray.map((data, i)=>(
                                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={i}>
                                     
                                          <td >{data.Date}</td>
                                          <td >{data.ChannelName}</td>
                                          <td >
                                            <button className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'>
                                            <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                                            </svg>
                                            </button>
                                          </td>
                                          <td >
                                            <button className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'>
                                            <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                                            </svg>
                                            </button>
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
