'use client'
import React, { useState } from 'react'
import DownloadApp from '../common/DownloadApp'
import DropButton from '../common/DropButton'
import Image from '../../../node_modules/next/image'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
export default function PlStatementCantainer() {
    const [value1, setValue1] = useState('1mg')
    const [value2, setValue2] = useState('Channel')
    const [value3, setValue3] = useState('Category')
    const [value4, setValue4] = useState('Warehouse')
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 text-[#3a3b4c]'>
        <DownloadApp/>
        <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-7'>P&L Statement</p>
            <div className='flex scrollmenu gap-4'>
                    <CustomDateRangePicker/>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>   
            </div>
        </div>
        <div>
            <div className='flex items-center justify-between pb-2'>
                <p className='text-2xl font-semibold'>Account</p>
                <p>Total</p>
            </div>
            <div className='shd rounded-3xl px-8 py-5  font-medium'>
                <p className='text-blue font-semibold py-1'>Operating Income</p>
                <div className='flex items-center justify-between py-1'>
                    <p>Other income</p>
                    <p>133,500</p>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <p className='text-[#1f674f]'>Sales</p>
                    <p>133,500</p>
                </div>
                <div className='flex items-center justify-between text-red-500 py-1'>
                    <p className='flex items-center flex-col sm:flex-row'>Returns <span className='text-gray-700 text-xs sm:ml-3'>231 Returns not recieved <button className='text-blue underline text-xs'>Update</button></span></p>
                    <p>133,500</p>
                </div>
                <div className='bg-blue text-white font-semibold -mb-10 mt-2 rounded-lg flex items-center justify-between px-4 py-2'>
                    <p>Total Operating Income</p>
                    <p>133,500</p>
                </div>
            </div>
            <div className='shd rounded-3xl px-8 py-5 font-medium my-10'>
                <p className='text-blue font-semibold py-1'>Cost of goods Sold</p>
                <div className='py-1'>
                    <p className='flex items-center flex-col sm:flex-row'>Cost of goods Sold<span className='text-gray-700 text-xs sm:ml-3'>COGS for 36 SKUs is not updated<button className='text-blue underline text-xs px-1'>Update</button></span></p>
                </div>
                <div className='bg-blue text-white font-semibold -mb-10 mt-2 rounded-lg flex items-center justify-between px-4 py-2'>
                    <p>Total Cost of Goods Sold</p>
                    <p>133,500</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex items-center gap-2 bg-[#e9f7f2] rounded-3xl p-4'>
                    <Image src='/images/icon-arrow-45deg.svg' alt='' width={10} height={10}/>
                    <p>Gross Profit <span className='font-semibold'>-133,500</span></p>
                    <p className='w-9 h-9 rounded-full bg-green/30 text-xs font-bold text-[#1f674f] flex items-center justify-center'>35%</p>           
                </div>
            </div>
            <div className='shd rounded-3xl px-8 py-5  font-medium my-10'>
                <p className='text-blue font-semibold py-1'>Operating Expenses</p>
                <div className='flex items-center justify-between py-1'>
                    <p>Marketplace Fee / Commisions</p>
                    <p>133,500<span className='pl-2 text-xs text-gray-600'>35%</span></p>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <p>Shipping & Logistics</p>
                    <p>133,500<span className='pl-2 text-xs text-gray-600'>35%</span></p>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <p>Advertising & Marketing</p>
                    <p>133,500<span className='pl-2 text-xs text-gray-600'>35%</span></p>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <p>Penalities</p>
                    <p>133,500<span className='pl-2 text-xs text-gray-600'>35%</span></p>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <p>Other Charges</p>
                    <p>133,500<span className='pl-2 text-xs text-gray-600'>35%</span></p>
                </div>
                <div className='bg-blue text-white font-semibold -mb-10 mt-2 rounded-lg flex items-center justify-between px-4 py-2'>
                    <p>Total Operating Expenses</p>
                    <p>133,500</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='flex items-center gap-2 bg-[#e9f7f2] rounded-3xl p-4'>
                    <Image src='/images/icon-arrow-45deg.svg' alt='' width={10} height={10}/>
                    <p>Gross Profit <span className='font-semibold'>-133,500</span></p>
                    <p className='w-9 h-9 rounded-full bg-green/30 text-xs font-bold text-[#1f674f] flex items-center justify-center'>35%</p>           
                </div>
            </div>
        </div>
    </div>
  )
}
