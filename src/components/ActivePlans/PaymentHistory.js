'use client'
import React, { useState } from 'react'
import { getdata ,getLength} from '../../../alldatafiles/PaymentHistorydata';

export default function PaymentHistory() {
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
    <div className='bg-white'>
        <p className='p-5 text-lg font-semibold text-blue'>Payment History</p>
         <div className="m-5 max-h-[250px] overflow-auto mr-4">
                                <table className='w-full h-full '>
                                    <thead>
                                        <tr className='text-[14px]  text-left font-semibold   text-gray-500'>
                                            <th className='py-2 px-2'>Status</th>
                                            <th>Invoice Number/ Date</th>
                                            <th>Paid Amount</th>
                                            <th>Plan Start Date</th>
                                            <th>Expiration Date</th>
                                            <th>Plan Amount</th>
                                            <th>Validity</th>
                                            <th>Order limit</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataArray.map((data)=>(

                                            <tr key={data.ID} className={`${data.Status==='Active'?'bg-[#f1f8f6] opacity-100':'opacity-55'} font-medium max-h-[50px] h-[50px] border-t text-sm text-black `}>
                                            <td className={`${data.Status==='Active'?'text-[#1f674f] ':'text-red-500'} px-2`}>{data.Status}</td>
                                            <td className='py-2'>
                                                <p>{data.Invoice.Number}</p>
                                                <p className='text-gray-600'>{data.Invoice.Date}</p>
                                            </td>
                                            <td >{data.PaidAmount}</td>
                                            <td >{data.PlanStartDate}</td>
                                            <td >{data.ExpirationDate}</td>
                                            <td >{data.PlanAmount}</td>
                                            <td >{data.Validity}</td>
                                            <td >{data.Orderlimit}</td>
                                            <td className='px-4'>
                                            <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                                            </svg>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                                </div>
    </div>
  )
}
