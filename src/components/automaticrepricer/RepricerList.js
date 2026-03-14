
'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getLength, getdata } from '../../../alldatafiles/repricerlistdata'
import { IoIosSearch } from 'react-icons/io'

export default function RepricerList() {
          const [value1, setValue1] = useState('Status')
          const [value2, setValue2] = useState('Channel')
    const [limit, setLimit] = useState(5);
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
      <div className='sm:flex items-center justify-between'>
              <div className='sm:flex items-center gap-4'>
              <div className='flex items-center gap-4'>
              <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
              <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
              </div>
              
              <div className='my-4 sm:my-0 flex items-center justify-between border border-blue/20 py-[6px] rounded-xl'>
              <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='Search SKU'/>
              <button className='pr-3'><IoIosSearch size={17}/></button>
              </div>
              </div>
              <div className='flex items-center gap-3'>
              <button className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
                      <svg width="15" height="15" viewBox="0 0 21 17" fill="none" xmlns="http:/www.w3.org/2000/svg">
                        <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                      </svg>
              </button>
              <button className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
                      <svg width="15" height="15" viewBox="0 0 21 17" fill="none" xmlns="http:/www.w3.org/2000/svg">
                        <path d="M5.20244 6.97361L3.94585 5.96445L10.4999 0.700195L17.0539 5.96367L15.7973 6.97282L11.3888 3.43236V12.655H9.61085V3.43295L5.20244 6.97361ZM18.4997 13.369V15.2723L2.50011 15.2731V13.3698L0.722168 13.369V16.7002H20.2777V13.369H18.4997Z" fill="#68698A"></path>
                      </svg>
              </button>
              </div>
      </div>
      
      
       <div className='sm:h-[380px] w-full  mx-auto overflow-auto my-5'>
                                    <table   className="  w-[1200px] sm:w-full">
                                          <thead>   
                                              <tr className=' text-[14px]  text-left font-semibold   text-gray-500'>
                                                  <th>
                                                  <input
                                                        id="vue-checkbox-list"
                                                        type="checkbox"
                                                        value=""
                                                        className="mx-2 w-[14px] h-[14px] my-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
                                                    />
                                                  </th>
                                                  <th><h1>Channel/ Store Name</h1></th>
                                                  <th><h1>Product Details</h1></th>
                                                  <th><h1>Price</h1></th>
                                                  <th><h1>Repricing Strategy</h1></th>
                                                  <th><h1>Buy Box</h1></th>
                                                  <th><h1>History</h1></th>
                                                  
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {dataArray.map(data=>(
                                              <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                                  <td>
                                                  <input
                                                        id="vue-checkbox-list"
                                                        type="checkbox"
                                                        value=""
                                                        className="mx-2 w-[14px] h-[14px] text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
                                                    />
                                                  </td>
                                                  <td >
                                                      <div className='flex items-center gap-2'>
                                                          <p className="w-9 mt-1 h-9 rounded-lg text-center content-center border">{data.Channel}</p>
                                                          <p>{data.StoreName}</p>
                                                      </div>
                                                  </td>
                                                  <td className='py-2'>
                                                      <p className='text-blue'>{data.ProductName}</p>
                                                      <div><span className='mr-1 text-[13px] text-gray-600'>Master SKU:</span> <span className='font-semibold'>{data.MasterSKU}</span></div>
                                                      <div><span className='mr-1 text-[13px] text-gray-600'>Seller Count:</span>{data.SellerCount}</div>
                                                     
                                                  </td>
                                                  <td>
                                                  <div><span className='mr-1 text-[13px] text-gray-600'>Current Price:</span> <span className='font-semibold'>{data.CurrentPrice}</span></div>
                                                  <div className='flex items-center gap-1'>
                                                      <span className='mr-1 text-[13px] text-gray-600'>Buy Box</span> 
                                                      <svg width="15" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M6.364 9.6825L15.556 0.4895L16.971 1.9035L6.364 12.5105L0 6.1465L1.414 4.7325L6.364 9.6825Z" fill="#28AC12"></path>
                                                      </svg>
                                                  </div>
                                                  </td>
                                                  <td>
                                                  {data.RepricingStrategy}
                                                  </td>
                                                  <td>
                                                  {data.BuyBox}
                                                  </td>
                                                  <td>
                                                  {data.History}
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
