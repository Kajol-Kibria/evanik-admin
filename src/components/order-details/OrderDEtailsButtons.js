'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import IconButton from '../common/IconButton'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import Image from '../../../node_modules/next/image'
import { IoIosSearch } from 'react-icons/io';

export default function OrderDEtailsButtons() {
    const [value1, setValue1] = useState('1mg')
    const [value2, setValue2] = useState('Store Name')
    const [value3, setValue3] = useState('Branch Name')
    const [value4, setValue4] = useState('Warehouse')
  return (
    <div>
        <div className='py-4 sm:flex  items-center justify-between'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Order Details</p>
      
        <div className='sm:flex  gap-2 items-center justify-center mt-4'>
       
        <div className='sm:flex  gap-2 items-center '>
        <CustomDateRangePicker/>
        <div className='flex  gap-2 items-center my-4 sm:my-0'>
        <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
        <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
        <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
        </div>

        </div>


        <div className='flex  gap-2 items-center sm:mt-0 mt-2'>
        <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
        <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
        <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-send-email.svg' alt='' width={15} height={15}/></button>
        </div>

        </div>
      </div>
        <div className='flex items-center mb-5'>
          <input className='pl-5 pr-14 border-2 border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-xl' placeholder='OrderId,OrderItemID'/>
          <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
        </div>
      </div>
  )
}
