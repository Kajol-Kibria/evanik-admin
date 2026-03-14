'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { LuPlus } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
export default function RateCardDetails() {
              const [value1, setValue1] = useState('Category')
              const [value2, setValue2] = useState('Start date')
              const [value3, setValue3] = useState('End date')
              const [value4, setValue4] = useState('Other type')
  return (
    <div className='overflow-auto w-[1000px] sm:w-auto'>
        <div className='flex scrollmenu w-screen sm:w-auto gap-3'>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>
        <div className='flex py-3 text-[13px] text-gray-600 font-semibold'>
            <p className='w-1/3'>Fee Name</p>
            <p className='w-2/3'>Fee Name</p>
        </div>
        {/* 1st */}
        <div className='flex items-center py-3 border-y'>
            <div className='w-1/3'>
                <p className='font-semibold'>Commison</p>
                <p className='text-xs text-gray-600'>Some information on seller rating feedback</p>
            </div>
            <div className='w-2/3 flex items-end gap-5 p-2'>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Order Item Value</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Rate</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='flex gap-2'>
                    <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                    <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
                </div>
            </div>
        </div>
        {/* 2nd */}
        <div className='flex items-center py-3 border-b'>
            <div className='w-1/3'>
                <p className='font-semibold'>Fixed Fee</p>
                <p className='text-xs text-gray-600'>Some information on seller rating feedback</p>
            </div>
            <div className='w-2/3 flex items-end gap-5 p-2'>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Order Item Value</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Rate</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='flex gap-2'>
                    <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                    <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
                </div>
            </div>
        </div>
        {/* 3rd */}
        <div className='flex items-center py-3 border-b'>
            <div className='w-1/3'>
                <p className='font-semibold'>Collection Fee</p>
                <p className='text-xs text-gray-600'>Some information on seller rating feedback</p>
            </div>
            <div className='w-2/3 flex items-end gap-5 p-2'>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Selling Price</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Prepaid</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Postpaid</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='flex gap-2'>
                    <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                    <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
                </div>
            </div>
        </div>
        {/* 4th */}
        <div className='flex items-center py-3 border-b'>
            <div className='w-1/3'>
                <p className='font-semibold'>Shipping Fee</p>
                <p className='text-xs text-gray-600'>Some information on seller rating feedback</p>
            </div>
            <div className='w-2/3 flex items-end gap-5 p-2'>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Weight slab</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Local</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Zonal</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>National</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='flex gap-2'>
                    <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                    <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
                </div>
            </div>
        </div>
        {/* 5th */}
        <div className='flex items-center py-3 border-b mb-10'>
            <div className='w-1/3'>
                <p className='font-semibold'>Reverse Shipping Fee</p>
                <p className='text-xs text-gray-600'>Some information on seller rating feedback</p>
            </div>
            <div className='w-2/3 flex items-end gap-5 p-2'>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Weight slab</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-40 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Local</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>Zonal</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='text-sm font-semibold'>National</p>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                    <input type='text' className='border-b border-gray-300 outline-none py-1 w-20 focus:border-gray-500 transition-all duration-200'/>
                </div>
                <div className='flex gap-2'>
                    <button className='text-red-500 border h-10 w-10 flex items-center justify-center rounded-full'><RiDeleteBin7Line size={17}/></button>
                    <button className='border h-10 w-10 flex items-center justify-center rounded-full'><LuPlus size={22}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
