'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'

export default function FBAButtons() {
      const [value1, setValue1] = useState('Date Range')
        const [value2, setValue2] = useState('Channel')
        const [value3, setValue3] = useState('Store')
        const [value4, setValue4] = useState('Replenishment')
        const [value5, setValue5] = useState('Profits')
        const [value6, setValue6] = useState('Warehouse')
  return (
    <div>
        <div>
      <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-4">
      FBA Inventory
      </p>
      <div className='flex items-center gap-2 my-4'>
                      <div className='scrollmenu flex  gap-2 items-center justify-center mt-4 sm:mt-1'> 
                       <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value5} setState={setValue5} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                        <DropButton state={value6} setState={setValue6} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                      </div>
                         <input className='mt-4 sm:mt-1 w-full sm:w-auto outline-none border-blue/30 border-2 px-4 rounded-xl py-1 placeholder:text-sm placeholder:font-thin placeholder:text-gray-700' placeholder='Search Order ID'/>
      </div>
                        
      </div>
    </div>
  )
}
