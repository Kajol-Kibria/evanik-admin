'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';

import CustomRadio from '../common/CustomRadio';
import DropButton from '../common/DropButton';
import { getLength ,getdata} from '../../../alldatafiles/Campaigns';
import { IoIosSearch } from 'react-icons/io';

export default function Campaigns() {
  const [value1, setValue1] = useState('Date Range')

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
      <div>
      <div className='grid sm:grid-cols-3 gap-5 my-4 sm:my-0'>
      <div className='flex items-center gap-4 bg-[#F1F8F6] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>100</p>
                <p>Total Emails sent</p>
            </div>
            <div className='flex items-center gap-4 bg-[#F3F4FB] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Emails opened</p>
            </div>
            <div className='flex items-center gap-4 bg-[#ffeceb] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Emails not opened</p>
            </div>
            
            
            
            
            
        </div>
      </div>
          <div className='sm:flex items-center justify-between gap-4  my-4'>
                  <div className='sm:flex items-center gap-4 space-y-3 sm:space-y-0'>
                  <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Resend Msg</button>      
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <div className='flex items-center  border border-blue/20 py-[6px] rounded-xl'>
                                            <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='SKU'/>
                                            <button className='pr-3'><IoIosSearch size={17}/></button>
                                            </div>
                                            <div className='flex items-center  border border-blue/20 py-[6px] rounded-xl'>
                                            <input className='pl-3 w-36 mx-1  outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent ' placeholder='Order ID'/>
                                            <button className='pr-3'><IoIosSearch size={17}/></button>
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
                              <th><h1>ID</h1></th>
                              <th><h1>Order ID</h1></th>
                              <th><h1>SKU Code</h1></th>
                              <th><h1>Date</h1></th>
                              <th><h1>FSN</h1></th>
                              <th><h1>Email open</h1></th>
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
                                {data.ID}
                              </td>
                              <td>
                                {data.OrderID}
                              </td>
                              <td className='py-2'>
                                <p className='font-semibold text-gray-600'>{data.SKU}</p>
                                <div className='flex items-center justify-between mx gap-2 w-32'>
                                  <p className='text-lg text-[#EF9235]'>☆☆☆☆☆</p>
                                  <p className='font-medium'>4/5</p>
                                </div>
                              </td>
                              <td>
                                  {data.Date}
                              </td>
                              <td>
                                <p>{data.FNS}</p>
                              </td> 
                              <td>
                                <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http:/www.w3.org/2000/svg">
                                    <path d="M6.364 5.086L11.314 0.136002L12.728 1.55L7.778 6.5L12.728 11.45L11.314 12.864L6.364 7.914L1.414 12.864L0 11.45L4.95 6.5L0 1.55L1.414 0.136002L6.364 5.086Z" fill="#F53C30"></path>
                                 </svg>
                                 {/* <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http:/www.w3.org/2000/svg">
                                    <path d="M6.364 9.6825L15.556 0.4895L16.971 1.9035L6.364 12.5105L0 6.1465L1.414 4.7325L6.364 9.6825Z" fill="#28AC12"></path>
                                 </svg> */}
                                </div>
                              </td> 
                              <td>
                              <button className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
                                <svg width="15" height="15" viewBox="0 0 23 19" fill="none" xmlns="http:/www.w3.org/2000/svg">
                                  <path d="M22.5 17.9054C22.4982 18.1681 22.3931 18.4194 22.2075 18.6052C22.0219 18.791 21.7706 18.8963 21.508 18.8984H3.492C3.22881 18.8982 2.9765 18.7934 2.79049 18.6072C2.60448 18.421 2.5 18.1686 2.5 17.9054V16.8984H20.5V5.19844L12.5 12.3984L2.5 3.39844V1.89844C2.5 1.63322 2.60536 1.37887 2.79289 1.19133C2.98043 1.00379 3.23478 0.898438 3.5 0.898438H21.5C21.7652 0.898438 22.0196 1.00379 22.2071 1.19133C22.3946 1.37887 22.5 1.63322 22.5 1.89844V17.9054ZM4.934 2.89844L12.5 9.70844L20.066 2.89844H4.934ZM0.5 12.8984H8.5V14.8984H0.5V12.8984ZM0.5 7.89844H5.5V9.89844H0.5V7.89844Z" fill="#68698A"></path>
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
