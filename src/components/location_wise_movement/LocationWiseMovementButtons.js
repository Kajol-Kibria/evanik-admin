'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image'
import { IoIosSearch } from 'react-icons/io';
import DropButton from '../common/DropButton';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';
export default function LocationWiseMovementButtons() {
    const [value1, setValue1] = useState('Branch')
    const [value2, setValue2] = useState('Warehouse')
    const [value3, setValue3] = useState('Channel')
    const [value4, setValue4] = useState('Store name')
  return (
    <div>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-7'>Location wise movement</p>
        <div className='sm:flex items-center justify-between'>
            <p className='text-blue font-semibold text-2xl'>SKU</p>
            <div className='sm:flex items-center gap-4'>
                <div className='flex items-center gap-4 my-4 sm:my-0'>
                <CustomDateRangePicker/>
                <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                    <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='SKU'/>
                    <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                </div>
                <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
            </div>
        </div>
    </div>
  )
}
