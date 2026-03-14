'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getLength, getdata } from '../../../alldatafiles/Feedbackdata';
import CustomRadio from '../common/CustomRadio';
import DropButton from '../common/DropButton';
import { IoIosSearch } from 'react-icons/io';

export default function Feedback() {

      const [value1, setValue1] = useState('Store')
      const [value2, setValue2] = useState('Date Range')
  
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
      <div className='2xl:flex items-center justify-between gap-4  my-4'>
              <div className='sm:flex items-center gap-4'>
              <div className='flex items-center gap-4'>
              <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Bulk Action</button>      
                <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                <div className='sm:flex items-center gap-4 my-4 sm:my-0'>
                <div className='flex items-center  border border-blue/20 py-[6px] rounded-xl'>
                        <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='SKU'/>
                        <button className='pr-3'><IoIosSearch size={17}/></button>
                </div>
                <div className='flex items-center  border border-blue/20 py-[6px] rounded-xl'>
                        <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='Customer email'/>
                        <button className='pr-3'><IoIosSearch size={17}/></button>
                </div>
                <div className='flex items-center  border border-blue/20 py-[6px] rounded-xl'>
                        <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='Product Name'/>
                        <button className='pr-3'><IoIosSearch size={17}/></button>
                </div>
               </div>
                
              </div>
      
              <div className='sm:flex items-center gap-3 text-gray-700 text-sm my-4 2xl:my-0'>
              <p className='my-3 sm:my-0'>Rating:</p>
              <div className='flex items-center gap-3'>
              <CustomRadio id={'All'} txt={'All'}/>
              <CustomRadio id={'Positive'} txt={'Positive'}/>
              <CustomRadio id={'Negative'} txt={'Negative'}/>
              <CustomRadio id={'Neutral'} txt={'Neutral'}/>
              </div>
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
                          <th><h1>Product Details</h1></th>
                          <th><h1>Rating</h1></th>
                          <th><h1>Date</h1></th>
                          <th><h1>Status</h1></th>
                          <th><h1>Buyer ID</h1></th>
                          <th><h1>Comment</h1></th>
                          <th><h1>Action</h1></th>
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
                          <td className='py-2'>
                            <div><span className='mr-1 text-[13px] text-gray-600'>Product:</span>{data.Product}</div>
                            <div><span className='mr-1 text-[13px] text-gray-600'>SKU:</span>{data.SKU}</div>
                            <div><span className='mr-1 text-[13px] text-gray-600'>Order ID:</span>{data.OrderID}</div>
                          </td>
                          <td>
                            <div className='flex items-center justify-between mx gap-2 w-32'>
                              <p className='text-lg text-[#EF9235]'>☆☆☆☆☆</p>
                              <p className='font-medium'>4/5</p>
                            </div>
                            <button className=" w-32 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-1  font-medium">Receive All</button>
                          </td>
                          <td>
                              {data.Date}
                          </td>
                          <td>
                            <p className='text-[#1f674f]'>{data.Status}</p>
                          </td> 
                          <td>
                            {data.BuyerID}
                          </td> 
                          <td>
                            {data.Comment}
                          </td> 
                          <td>
                            <button className='blueButton'>Send Msg</button>
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
