'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import { IoIosSearch } from 'react-icons/io';
import Image from '../../../node_modules/next/image'
export default function CommissionInvoiceReconciliationButtons() {
    const [value1, setValue1] = useState('Channel')
    const [value2, setValue2] = useState('Store Name')
  return (
    <div>
        <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c] pb-5">
        Expenses Comparison
        </p>
      <div className='sm:flex items-center gap-4'>
                <div className='sm:flex gap-4 space-y-2 sm:space-y-0'>
                    <CustomDateRangePicker/>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                        <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Fee Type/OrderItemID'/>
                        <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                    </div>
                    <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
                </div>

        </div>
    </div>
  )
}
