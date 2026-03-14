'use client';

import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { DateRangePicker } from './CustomDateRangePicker';

export default function TopDashboard() {
  return (
    <div>
      <div className='sm:flex justify-between w-full items-center'>
        <div>
          <h1 className='text-blue font-semibold text-4xl'>Hi, Kibria </h1>
          <h1 className='text-gray-500'>Here is your dashboard</h1>
        </div>
        {/* search bar */}
        <div className='flex items-center mt-4 sm:mt-0'>
          <input className='pl-5 pr-14 sm:w-[500px] w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent py-3 rounded-lg' placeholder='Search' />
          <button className='text-gray-600 -ml-10'><IoIosSearch size={25} /></button>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 items-center gap-3 sm:gap-10 my-10'>
        {/* 1 */}
        <div className=' px-5 py-2 rounded-xl w-full shd'>
          <div className='flex items-center gap-4 text-sm'>
            <div className='relative flex items-center justify-center '>
              <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg )` }} className='  flex items-center justify-center w-12 h-12 rounded-full'>
              </div>
              <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
            </div>
            <div>
              <p>Profile</p>
              <p>Update</p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className=' px-5 py-2 rounded-xl w-full shd'>
          <div className='flex items-center gap-4 text-sm'>
            <div className='relative flex items-center justify-center '>
              <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg )` }} className='  flex items-center justify-center w-12 h-12 rounded-full'>
              </div>
              <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
            </div>
            <div>
              <p>Platform</p>
              <p>Update</p>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className=' px-5 py-2 rounded-xl w-full shd'>
          <div className='flex items-center gap-4 text-sm'>
            <div className='relative flex items-center justify-center '>
              <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg )` }} className='  flex items-center justify-center w-12 h-12 rounded-full'>
              </div>
              <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
            </div>
            <div>
              <p>Product</p>
              <p>Update</p>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div className=' px-5 py-2 rounded-xl w-full shd'>
          <div className='flex items-center gap-4 text-sm'>
            <div className='relative flex items-center justify-center '>
              <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg )` }} className='  flex items-center justify-center w-12 h-12 rounded-full'>
              </div>
              <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
            </div>
            <div>
              <p>Accounting</p>
              <p>Update</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
