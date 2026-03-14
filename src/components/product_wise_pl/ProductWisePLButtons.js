'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import Image from '../../../node_modules/next/image'
import CustomSlideCheck from '../common/CustomSlideCheck'
import CustomTooltip from '../common/Tooltip'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'

export default function ProductWisePLButtons() {
    const [value1, setValue1] = useState('1mg')
    const [value2, setValue2] = useState('Store Name')
  return (
    <div className='xl:flex items-center justify-between my-5'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Product Wise P&L</p>
        <div className='sm:flex items-center gap-4 my-4 2xl:my-0  space-y-2 sm:space-y-0 '>
            <CustomDateRangePicker/>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
            <div className='flex items-center gap-4'>
                <div>
                    <div className="flex gap-2 items-center">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={13} width={13}/></CustomTooltip>
                        <p className='text-gray-700 text-sm'>Loss Making</p>
                    </div>
                <span className='flex items-center gap-2'><CustomSlideCheck/>No</span>
                </div>
                <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
            </div>
        </div>
    </div>
  )
}
