'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getLength, getdata } from '../../../alldatafiles/ChannelMonthlyTaxReportsdata';
import DropButton from '../common/DropButton';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';

export default function ChannelMonthlyTaxReports() {
        const [value1, setValue1] = useState('Date Range')
        const [value2, setValue2] = useState('Type')
        const [value3, setValue3] = useState('Channel')
        const [value4, setValue4] = useState('Date Range')
        const [value5, setValue5] = useState('GSTIN (Branch)')
        const [value6, setValue6] = useState('Data Type')

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
      <div className='sm:flex justify-between items-center gap-4'>
        <div className='sm:flex gap-4'>
        <div className='flex gap-4'>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='sm:flex gap-8 my-4 sm:my-0'>
                    <div className='flex items-center mt-4 sm:mt-0'>
                                                <input className='pl-5 pr-14  w-40 border border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='IP Address'/>
                                                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                    </div>
                    <div className='flex items-center  mt-4 sm:mt-0'>
                                                <input className='pl-5 pr-14  w-40  border border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Port'/>
                                                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                    </div>
                     
        </div>
        </div>
            <button className='blueButton sm:w-16 w-full my-4 sm:my-0'>Search</button>
        </div>
      <div>
          <div>
                  <div className=' w-full  mx-auto overflow-auto my-5'>
                      <table   className="  w-[1200px] sm:w-full">
                            <thead >
                                     
                                <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                    <th className='content-end py-2'><h1>Seller ID</h1></th>
                                    <th className='content-end py-2'><h1 >GSTIN (Branch)</h1></th>
                                    <th>
                                      <div className=" ">
                                        <div className=" text-gray-600 font-semibold text-center border-b  border-l border-gray-300 py-1">SALES</div>
                                        <div className="flex items-start">
                                        <div className="w-1/2">
                                        <p className="border-l border-r p-2 border-gray-300">Value</p>
                                        </div>
                                        <div className="w-1/2">
                                        <p className=" p-2 border-gray-300">Count</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th >
                                    <div className=" ">
                                        <div className=" text-gray-600 font-semibold text-center border-b border-l border-gray-300 py-1">RETURN</div>
                                        <div className="flex items-start">
                                        <div className="w-1/2">
                                        <p className="border-l border-r p-2 border-gray-300">Value</p>
                                        </div>
                                        <div className="w-1/2">
                                        <p className="p-2 border-gray-300">Count</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th >
                                    <div className="">
                                        <div className=" text-gray-600 font-semibold text-center border-b border-r border-l border-gray-300 py-1">CANCEL</div>
                                        <div className="flex items-start">
                                        <div className="w-1/2">
                                        <p className="border-l border-r p-2 border-gray-300">Value</p>
                                        </div>
                                        <div className="w-1/2">
                                        <p className="border-r p-2 border-gray-300">Count</p>
                                        </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th className='content-end p-2 '><h1 >Error</h1></th>
                                </tr> 
                            </thead>
                            <tbody>
                                {dataArray.map(data=>(
                  
                                <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                                    <td >{data.SellerID}</td>
                                    <td >{data.GSTINBranch}</td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/2 px-2'>{data.SALES.Value}</p>
                                      <p className='w-1/2 px-2'>{data.SALES.Count}</p>
                                    </div>
                                    </td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/2 px-2'>{data.RETURN.Value}</p>
                                      <p className='w-1/2 px-2'>{data.RETURN.Count}</p>
                                    </div>
                                    </td>
                                    <td >
                                    <div className="flex items-start">
                                      <p className='w-1/2 px-2'>{data.CANCEL.Value}</p>
                                      <p className='w-1/2 px-2'>{data.CANCEL.Count}</p>
                                    </div>
                                    </td>
                                    <td >{data.Error}</td>
                                    
                                </tr>
                                ))}
                            </tbody>
                           </table>
                      </div>
                </div>
                <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
              <div className='p-5 shd rounded-lg my-4'>
                <div className='flex scrollmenu items-center gap-4 '>
                  <input type='text' defaultValue={'Tallly Company name'} className='bg-gray-500/10 text-sm py-2 rounded-lg px-4 outline-none'/>
                    <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value5} setState={setValue5} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value6} setState={setValue6} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <button className='blueButton'>Sync to Tally</button>
                </div>
                <div className='my-4'>
                <Image src='/images/tally-sync-bottom.png' alt='' width={100} height={100}/>
                </div>
              </div>
      </div>
    </div>
  )
}
