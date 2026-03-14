'use client'
import React, { useState } from 'react'
import Pagination from '../common/Pagination';
import { getdata, getLength } from '../../../alldatafiles/GSTR1ReturnSummarydata';
import Image from '../../../node_modules/next/image';
import DropButton from '../common/DropButton';
import { IoIosSearch } from 'react-icons/io';


export default function GSTR1ReturnSummary() {
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
                const [value1, setValue1] = useState('Date Range')
                const [value2, setValue2] = useState('Channel')
                const [value3, setValue3] = useState('Store')
                const [value4, setValue4] = useState('GST Type')
                const [value5, setValue5] = useState('Registration type')
                const [value6, setValue6] = useState('Branch')
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='sm:flex items-center gap-4'>
        <div className='flex scrollmenu gap-4 space-y-2 sm:space-y-0'>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value5} setState={setValue5} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value6} setState={setValue6} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='flex items-center mt-4 sm:mt-0 mr-5'>
            <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Search'/>
            <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
        </div>
        </div>
        <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
      </div>
        <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
            <table className="  w-[800px] sm:w-full">
                  <thead>
                      <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                          <th><h1 className='  my-2'>Description</h1></th>
                          <th><h1>IGST Amount</h1></th>
                          <th><h1>CGST Amount</h1></th>
                          <th><h1>SGST Amount</h1></th>
                          <th><h1>Invoice Total</h1></th>
                          <th><h1>Action</h1></th>
                      </tr>
                  </thead>
                  <tbody>
                      {dataArray.map(data=>(
        
                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                          <td className='w-1/3'><p>{data.Description}</p></td>
                          <td>{data.IGSTAmount}</td>
                          <td>{data.CGSTAmount}</td>
                          <td>{data.SGSTAmount}</td>
                          <td>{data.InvoiceTotal}</td>
                          <td>
                            <button className="border-blue text-blue hover:bg-blue hover:text-white font-medium border rounded-lg py-1 px-4 transition-all duration-300">View</button>
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
