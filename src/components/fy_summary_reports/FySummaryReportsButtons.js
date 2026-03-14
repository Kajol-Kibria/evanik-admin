'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image'
import { IoIosArrowForward } from "react-icons/io";
import DropButton from '../common/DropButton';
export default function FySummaryReportsButtons() {
        const [value1, setValue1] = useState('Flipkart')
  return (
    <div>
          <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
          Flipkart for the FY 2025 - 2025 as of Apr-2025
          </p>
        <div className='grid sm:grid-cols-3 gap-5 py-4'>
            <div className='flex items-center justify-between bg-[#F3F4FB] rounded-lg p-4'>
                <p className='text-sm'>Net Total</p>
                <p className='px-2 py-1 bg-gray-700/10 rounded-lg text-sm font-semibold'>100</p>
            </div>
            <div className='flex items-center justify-between bg-[#FBF8E4] rounded-lg p-4'>
                <p className='text-sm'>Expenses</p>
                <p className='px-2 py-1 bg-gray-700/10 rounded-lg text-sm font-semibold'>00</p>
            </div>
            <div className='flex items-center justify-between bg-[#ffeceb] rounded-lg p-4'>
                <p className='text-sm'>Bank Settlement</p>
                <p className='px-2 py-1 bg-gray-700/10 rounded-lg text-sm font-semibold'>100</p>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
        </div>
    </div>
  )
}
