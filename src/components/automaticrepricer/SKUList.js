'use client'
import React, { useState } from 'react'
import { getLength, getdata } from '../../../alldatafiles/SKUlistdata';
import Pagination from '../common/Pagination';
import CustomSlideCheck from '../common/CustomSlideCheck';
import DropButton from '../common/DropButton';
import { IoIosSearch } from 'react-icons/io';

export default function SKUList() {

          const [value1, setValue1] = useState('Status')
          const [value2, setValue2] = useState('Channel')
          const [value3, setValue3] = useState('Store Name')
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
        <div className='sm:flex items-center gap-4'>
        <div className='flex items-center gap-4'>
                        <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
                        <div className='my-4 sm:my-0 flex items-center justify-between border border-blue/20 py-[6px] rounded-xl'>
                        <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='SKU'/>
                        <button className='pr-3'><IoIosSearch size={17}/></button>
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
                                            <th><h1>Automatic Repricer Status</h1></th>
                                            
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
                                                <div className='flex items-center gap-2'>
                                                    <CustomSlideCheck/>
                                                    {data.Status}
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
