import React from 'react'

export default function RepricerButtons() {
  return (
    <div>
         <div className='sm:flex items-center justify-between my-5'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Automatic Repricer</p>
                <div className='my-3 sm:my-0 w-fit flex items-center gap-4 bg-[#f3f4fb]  pl-5 rounded-xl text-sm'>
                <div className=' font-medium text-gray-600 py-[10px]'>Credits Remaining: <span className='text-black'>2000</span></div>
                <button className='rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-6 py-[10px]'>Buy Credits</button>
            </div>
            </div>
    </div>
  )
}
