'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { IoIosSearch } from 'react-icons/io';
import { getdata, getLength } from '../../../alldatafiles/Chargesdata';
import Image from '../../../node_modules/next/image';
import Pagination from '../common/Pagination';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';

export default function Charges() {
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
  
          const [value1, setValue1] = useState('Channel')
          const [value2, setValue2] = useState('Store Name')
          const [value3, setValue3] = useState('Charges : Collection')
  return (
    <div>
       <div className='sm:flex items-center gap-4'>
                       <div className='sm:flex gap-4 space-y-2 sm:space-y-0'>
                           <CustomDateRangePicker/>
                           <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                           <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                       </div>
                       <div className='flex items-center gap-4'>
                           <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                               <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Search Order ID/ SKU'/>
                               <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                           </div>
                           <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                       </div>
               </div>
          <div className='sm:h-[400px] w-full  mx-auto overflow-auto my-5'>
          <table   className="  w-[1200px] sm:w-full">
          <thead className=''>
                   
              <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                  <th className='py-2'>Channel</th>
                  <th>Warehouse</th>
                  <th>Date</th>
                  <th>Order ID/SKU Code</th>
                  <th>Applicable Charge</th>
                  <th>Applied Charge</th>
                  <th>Gap</th>
                  <th>Reco Head</th>
                  <th className='mx-4'>Sale Status</th>
              </tr>
                  
          </thead>
          <tbody>
              {dataArray.map(data=>(

              <tr className='max-h-[54px] h-[54px] border-t text-sm text-black font-medium' key={data.ID}>

                  <td className='py-2'>
                    <div className='flex items-center gap-2'>
                      <p className='border w-9 h-9 rounded-lg flex items-center justify-center text-gray-600'>fk</p>
                      <div>
                        <p>{data.Channel}</p>
                        <p>{data.ChannelId}</p>
                      </div>
                    </div>
                  </td>
                  <td className=''>{data.Warehouse}</td>
                  <td className=''>{data.Date}</td>
                  <td className=''>
                    <p>{data.OrderID}</p>
                    <p>{data.SKUCode}</p>
                  </td>
                  <td className=''>{data.ApplicableCharge}</td>
                  <td className=''>{data.AppliedCharge}</td>
                  <td className=''>{data.Gap}</td>
                  <td className=''>{data.RecoHead}</td>
                  <td className={`${data.SaleStatus === 'Delivered'?'text-[#1f674f]':'text-[#aa791d]'} text-[13px] font-semibold py-2 rounded-full w-20 text-center mx-4`}>
                  <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={18} height={18}/>
                    <p>{data.SaleStatus}</p>
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
