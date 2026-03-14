'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import CustomRadio from '../common/CustomRadio'
import { TotalMessagesDonut } from './TotalMessagesDonut'
import { MessagesSent } from './MessagesSent'

export default function Summary() {
      const [value1, setValue1] = useState('Store')
      const [value2, setValue2] = useState('Date Range')
  return (
    <div>
    <div className='sm:flex items-center gap-4  my-4'>
        <div className='flex items-center gap-4'>
          <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
          <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        </div>

        <div className='sm:flex items-center gap-3 text-gray-700'>
        <p className='my-3 sm:my-0'>Rating:</p>
        <div className='flex items-center gap-3'>
        <CustomRadio id={'All'} txt={'All'}/>
        <CustomRadio id={'Positive'} txt={'Positive'}/>
        <CustomRadio id={'Negative'} txt={'Negative'}/>
        <CustomRadio id={'Neutral'} txt={'Neutral'}/>
        </div>
        </div>
    </div>
    <div>
        <div className='grid sm:grid-cols-3 gap-5'>
            <div className='flex items-center gap-4 bg-[#F3F4FB] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            <div className='flex items-center gap-4 bg-[#ffeceb] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            <div className='flex items-center gap-4 bg-[#FBF8E4] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            <div className='flex items-center gap-4 bg-[#F5EFFA] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            <div className='flex items-center gap-4 bg-[#F1F8F6] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            <div className='flex items-center gap-4 bg-[#FBF2F0] rounded-lg p-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>56</p>
                <p>Orders</p>
            </div>
            
        </div>
    </div>
    <div className='sm:flex justify-between gap-5 my-5'>
    <TotalMessagesDonut/>

    <MessagesSent/>
    
    </div>
    </div>
  )
}
