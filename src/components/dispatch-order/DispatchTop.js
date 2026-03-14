import React from 'react'
import { IoIosSearch } from 'react-icons/io'

export default function DispatchTop() {
  return (
    <div>
        <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Dispatch Order Management System</p>
            <div className='my-3 sm:my-0 w-fit flex items-center gap-4 bg-[#f3f4fb]  pl-5 rounded-xl text-sm'>
                <div className=' font-medium text-gray-600 py-[10px]'>Credits Remaining: <span className='text-black'>2000</span></div>
                <button className='rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-6 py-[10px]'>Buy Credits</button>
            </div>
            </div>
            <div className='flex items-center gap-4 mt-8'>
              <div className='relative'>
                <input className='mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 ' placeholder='OrderId/AWB/TrackingId'/>
                <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
              </div>    
            </div>
    </div>
  )
}
