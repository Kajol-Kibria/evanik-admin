'use client'
import React, { useState } from 'react'
import DownloadApp from '../common/DownloadApp'
import { IoIosSearch } from 'react-icons/io';
import Image from '../../../node_modules/next/image';
import ChannelWisePerformanceTablePegi from './ChannelWisePerformanceTablePegi';
import DropButton from '../common/DropButton';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';

export default function ChannelWisePerformanceCantainer() {
    const [value1, setValue1] = useState('Date Range')
    const [value2, setValue2] = useState('Channel')
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <div className='sm:flex items-center justify-between my-5'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Channel Wise Performance</p>
            <div className='sm:flex items-center gap-4 space-y-2 sm:space-y-0'>
                <CustomDateRangePicker/>
                <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                <div className='flex items-center mt-4 sm:mt-0 mr-4'>
                    <input className='pl-5 pr-14 w-full sm:w-52 border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Warehouse'/>
                    <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                </div>
                <button className='w-9 h-9 flex items-center justify-center border hover:border-blue hover:bg-blue/10 rounded-full transition-all duration-300'>
                    <Image src='/images/icon-download.svg' alt='' width={15} height={15}/>
                </button>
            </div>
        </div>
        <ChannelWisePerformanceTablePegi/>
    </div>
  )
}
