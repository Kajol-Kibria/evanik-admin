'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Pagination from '../common/Pagination'
import { getLength ,getdata} from '../../../alldatafiles/productsratingdata'
import { IoIosSearch } from 'react-icons/io'


export default function ProductRatings() {
        const [value1, setValue1] = useState('Date Range')
        const [value2, setValue2] = useState('Rating')

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
      <div className='sm:flex items-center gap-4 my-4 sm:my-0'>
        <div className='flex items-center gap-4'>
                    <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Bulk Edit</button>      
                      <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='grid grid-cols-2 sm:flex items-center gap-1 my-4 sm:my-0'>
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
                      
                      <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
                      
         </div>
         <div>
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
                                    <th><h1>Product Name</h1></th>
                                    <th><h1>SKU/ BSR</h1></th>
                                    <th><h1>Order ID</h1></th>
                                    <th><h1>Average Rating</h1></th>
                                    <th><h1>Unit Sold</h1></th>
                                    <th><h1>Unit Returned</h1></th>
                                    <th><h1>Net Revenue</h1></th>
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
                                      {data.ProductName}
                                    </td>
                                    
                                    <td>
                                        <p>{data.SKU}</p>
                                        <p>{data.BSR}</p>
                                    </td>
                                    <td>
                                      <p>{data.OrderID}</p>
                                    </td>
                                    <td>
                                      <div className='flex items-center justify-between mx gap-2 w-32'>
                                        <p className='text-lg text-[#EF9235]'>☆☆☆☆☆</p>
                                        <p className='font-medium'>4/5</p>
                                      </div>
                                      <button className=" w-32 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-1  font-medium">Receive All</button>
                                    </td> 
                                    <td>
                                      {data.UnitSold}
                                    </td> 
                                    <td>
                                      {data.UnitReturned}
                                    </td> 
                                    <td>
                                      {data.NetRevenue}
                                    </td> 
                                    
                                    
                                </tr>
                                ))}
                            </tbody>
                           </table>
                           </div>
                           <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
         </div>
    </div>
  )
}
