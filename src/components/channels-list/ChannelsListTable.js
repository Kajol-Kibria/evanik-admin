'use client'
import React, { useState } from 'react'
import { getdata, getLength } from '../../../alldatafiles/ChannelsListdata';
import Pagination from '../common/Pagination';

export default function ChannelsListTable() {
                          const [limit, setLimit] = useState(6);
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
        <div className='flex items-center justify-between'>
        <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
        Channel list
        </p>
        <button className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.01397 2.81136C5.7378 1.31764 7.94315 0.496827 10.2241 0.500009C15.471 0.500009 19.7241 4.75316 19.7241 10C19.7241 12.0292 19.0876 13.9102 18.0046 15.453L14.9741 10H17.8241C17.8242 8.51004 17.3864 7.05292 16.565 5.8098C15.7437 4.56668 14.575 3.59241 13.2044 3.00812C11.8338 2.42384 10.3217 2.25532 8.85607 2.52352C7.39045 2.79172 6.036 3.48481 4.96112 4.51661L4.01397 2.81136ZM16.4343 17.1886C14.7104 18.6824 12.5051 19.5032 10.2241 19.5C4.97727 19.5 0.724121 15.2468 0.724121 10C0.724121 7.9708 1.36062 6.0898 2.44362 4.54701L5.47412 10H2.62412C2.624 11.49 3.06183 12.9471 3.88319 14.1902C4.70454 15.4333 5.87318 16.4076 7.24379 16.9919C8.61441 17.5762 10.1265 17.7447 11.5922 17.4765C13.0578 17.2083 14.4122 16.5152 15.4871 15.4834L16.4343 17.1886Z" fill="#68698A"></path>
            </svg>
        </button> 
        </div>
        <div>
                <div>
                  <div className=' w-full  mx-auto overflow-auto my-5'>
                      <table   className="  w-[1400px] 2xl:w-full">
                            <thead >
                                     
                                <tr className=' text-[13px] text-left font-semibold text-gray-500'>
                                    <th className='content-end py-2 w-64'><h1>Channel</h1></th>
                                    <th className=' content-end'>
                                      <div className=" ">
                                        <div className=" text-gray-600 font-semibold text-center border-b   border-gray-300 py-1 uppercase">Last Synced On</div>
                                        <div className="flex items-start">
                                        <div className="w-1/3">
                                        <p className="border-r p-2 border-gray-300">Sales</p>
                                        </div>
                                        <div className="w-1/3">
                                        <p className=" p-2 border-r border-gray-300">Returns</p>
                                        </div>
                                        <div className="w-1/3">
                                        <p className=" p-2">Payments</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th className=' content-end'>
                                    <div className=" ">
                                        <div className=" text-gray-600 font-semibold text-center border-b border-l border-gray-300 py-1 uppercase">PRODUCT INFO</div>
                                        <div className="flex items-start">
                                        <div className="w-1/2">
                                        <p className="border-l border-r p-2 border-gray-300">Total SKUs</p>
                                        </div>
                                        <div className="w-1/2">
                                        <p className="p-2 border-gray-300">Unmapped</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th className="w-1/5  content-end">
                                      <div >
                                        <div className=" text-gray-600 font-semibold text-center border-b  border-r border-gray-300 py-1 uppercase">Claimable Reports Status</div>
                                        <div className="flex">
                                        <div className="w-1/4">
                                        <p className="border-l border-r p-2 border-gray-300">Unsellable Returns</p>
                                        </div>
                                        <div className="w-1/4">
                                        <p className=" p-2 border-r border-gray-300">Unpaid Orders</p>
                                        </div>
                                        <div className="w-1/4">
                                        <p className=" p-2">Pending Returns</p>
                                        </div>
                                        <div className="w-1/4 ">
                                        <p className=" p-2 border-x">Shipping Variance</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th className='content-end py-2 w-24 px-2'><h1>Returns to be recieved</h1></th>
                                    <th className="w-1/5">
                                    <div>
                                        <div className=" text-gray-600 font-semibold text-center border-b border-l border-gray-300 py-1 uppercase">Auto Claim Status</div>
                                        <div className="flex">
                                        <div className="w-1/4 border-l border-r p-2 border-gray-300">
                                        <p>Pending Returns</p>
                                        </div>
                                        <div className="w-1/4 border-r p-2 border-gray-300">
                                        <p>Sent On</p>
                                        </div>
                                        <div className="w-1/4 border-r p-2 border-gray-300">
                                        <p>Returns not expected</p>
                                        </div>
                                        <div className="w-1/4 p-2 border-gray-300">
                                        <p>Sent On</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                </tr> 
                            </thead>
                            <tbody>
                                {dataArray.map(data=>(
                  
                                <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                    <td >
                                        <div className='flex items-center gap-3'>
                                        <button className='hover:border-blue cursor-pointer transition-all duration-300 w-7 h-7 flex items-center justify-center border rounded-full'>
                                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.01397 2.81136C5.7378 1.31764 7.94315 0.496827 10.2241 0.500009C15.471 0.500009 19.7241 4.75316 19.7241 10C19.7241 12.0292 19.0876 13.9102 18.0046 15.453L14.9741 10H17.8241C17.8242 8.51004 17.3864 7.05292 16.565 5.8098C15.7437 4.56668 14.575 3.59241 13.2044 3.00812C11.8338 2.42384 10.3217 2.25532 8.85607 2.52352C7.39045 2.79172 6.036 3.48481 4.96112 4.51661L4.01397 2.81136ZM16.4343 17.1886C14.7104 18.6824 12.5051 19.5032 10.2241 19.5C4.97727 19.5 0.724121 15.2468 0.724121 10C0.724121 7.9708 1.36062 6.0898 2.44362 4.54701L5.47412 10H2.62412C2.624 11.49 3.06183 12.9471 3.88319 14.1902C4.70454 15.4333 5.87318 16.4076 7.24379 16.9919C8.61441 17.5762 10.1265 17.7447 11.5922 17.4765C13.0578 17.2083 14.4122 16.5152 15.4871 15.4834L16.4343 17.1886Z" fill="#68698A"></path>
                                            </svg>
                                        </button> 
                                        <div className='w-10 h-10 content-center text-center rounded-lg border'>{data.Channels.slice(0, 2)}</div>
                                        <p>{data.Channels}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                        <div className='w-1/3'>
                                            {data.LastSyncedOn.Sales}
                                            <p className='text-red-500 font-semibold text-[12px]'>(145 day ago)</p>
                                        </div>
                                        <div className='w-1/3'>
                                            {data.LastSyncedOn.Sales}
                                            <p className='text-red-500 font-semibold text-[12px]'>(145 day ago)</p>
                                        </div>
                                        <div className='w-1/3'>
                                            {data.LastSyncedOn.Sales}
                                            <p className='text-red-500 font-semibold text-[12px]'>(145 day ago)</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/2 px-2'>{data.ProductInfo.TotalSKUs}</p>
                                      <p className='w-1/2 px-2'>{data.ProductInfo.Unmapped}</p>
                                    </div>
                                    </td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/4 px-2'>{data.ClaimableReportsStatus.UnsellableReturns}</p>
                                      <p className='w-1/4 px-2'>{data.ClaimableReportsStatus.UnpaidOrders}</p>
                                      <p className='w-1/4 px-2'>{data.ClaimableReportsStatus.PendingReturns}</p>
                                      <p className='w-1/4 px-2'>{data.ClaimableReportsStatus.ShippingVariance}</p>
                                    </div>
                                    </td>
                                    <td >{data.Returnstoberecieved}</td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/4 px-2'>{data.AutoClaimStatus.PendingReturns}</p>
                                      <p className='w-1/4 px-2'>{data.AutoClaimStatus.PendingReturnsSentOn}</p>
                                      <p className='w-1/4 px-2'>{data.AutoClaimStatus.Returnsnotexpected}</p>
                                      <p className='w-1/4 px-2'>{data.AutoClaimStatus.ReturnsnotexpectedSentOn}</p>
                                    </div>
                                    </td>
                                    
                                </tr>
                                ))}
                            </tbody>
                           </table>
                      </div>
                </div>
                <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}
