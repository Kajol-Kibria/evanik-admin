'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { IoIosSearch } from 'react-icons/io';
import ShippingTablePegi from './ShippingTablePegi';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';
export default function Shipping() {
          
        const [value1, setValue1] = useState('Channel')
        const [value2, setValue2] = useState('Store Name')
        const [value3, setValue3] = useState('Shipping : Forward')
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
        <ShippingTablePegi/>
    </div>
  )
}
