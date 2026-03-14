'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import IconButton from '../common/IconButton'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import { IoIosSearch } from 'react-icons/io';

export default function ChannelSettlementsButtons() {
                const [value2, setValue2] = useState('Channel')
                const [value3, setValue3] = useState('Store name')
                
  return (
    <div>
        <div>
        <div className='sm:flex items-center justify-between my-5'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Channel Settlements</p>
                        <div className='sm:flex  gap-2 items-center justify-center '>
                         <div className='scrollmenu flex  gap-2 items-center justify-center mt-4 sm:mt-1'>
                          <CustomDateRangePicker/>
                          <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                          <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
        
                           </div>
                           <div className='flex gap-2 items-baseline mt-5 sm:mt-0'>
                           <div className='relative'>
                              <input
                              className="mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10	 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 "
                              placeholder="Transaction ID"
                              />
                              <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
                            </div>
                           <IconButton svg={
                             <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                              </svg>
                           } items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                           <IconButton svg={
                             <svg width="15" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.20244 6.97361L3.94585 5.96445L10.4999 0.700195L17.0539 5.96367L15.7973 6.97282L11.3888 3.43236V12.655H9.61085V3.43295L5.20244 6.97361ZM18.4997 13.369V15.2723L2.50011 15.2731V13.3698L0.722168 13.369V16.7002H20.2777V13.369H18.4997Z" fill="#68698A"></path>
                             </svg>
                           } items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                           </div>
                           
                        </div>
                    </div>
    </div>
    </div>
  )
}
