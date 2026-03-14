'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import IconButton from '../common/IconButton'
import { CustomDonut } from '../dashboard/CustomDonut'
import { IndexingBarChart } from './IndexingBarChart'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'

export default function IndexingTop() {
    
      const [value1, setValue1] = useState('Channel wise sales')
      const [value3, setValue3] = useState('Daily sales trends')
  return (
    <div>
        <div className='sm:flex gap-6 sm:space-y-0 space-y-4'>
            {/* <div className=' flex flex-col justify-between sm:w-1/3 px-4  content-start py-5 rounded-2xl shd'>
                <div className='flex items-center gap-4 '>
                    <div className='bg-gray-700/5 h-[60px] w-[60px]  content-center flex items-center justify-center contain-content rounded-full'>
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.49805 0.734375C1.67402 0.734511 1.84683 0.781079 1.99905 0.869375L18.003 10.1354C18.1546 10.2233 18.2804 10.3495 18.3678 10.5013C18.4552 10.6531 18.5013 10.8252 18.5013 11.0004C18.5013 11.1756 18.4552 11.3477 18.3678 11.4995C18.2804 11.6513 18.1546 11.7775 18.003 11.8654L1.99905 21.1314C1.84708 21.2194 1.67462 21.2658 1.49902 21.2659C1.32343 21.2661 1.15088 21.22 0.998741 21.1324C0.846599 21.0447 0.720227 20.9185 0.632334 20.7665C0.544441 20.6145 0.498125 20.442 0.498047 20.2664V1.73438C0.498047 1.46916 0.603404 1.2148 0.79094 1.02727C0.978476 0.839732 1.23283 0.734375 1.49805 0.734375ZM9.79005 12.4144L5.29205 16.9124L10.991 13.6134L9.79105 12.4134L9.79005 12.4144ZM2.49805 5.11837V16.8784L8.37805 10.9984L2.49805 5.11837ZM12.782 9.42037L11.204 11.0004L12.782 12.5774L15.506 11.0004L12.781 9.42137L12.782 9.42037ZM5.29205 5.08438L9.79205 9.58437L10.991 8.38437L5.29205 5.08438Z" fill="#68698A"></path>
                    </svg>
                    
                    </div>
                    <p className='w-3/4'>Your current report throttle limit for Flipkart marketplace (Store abc) is:STR : 8 per month</p>
                </div>
                <button className=" hover:bg-[#5356f7] w-full bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl ">
                    Visit Platforms Page
                </button>
            </div> */}
            <div className=' sm:w-1/3 px-4 flex flex-col justify-between py-5 rounded-2xl shd'>
                <div className='flex flex-wrap gap-1 items-center justify-between mb-3'>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
                    <CustomDateRangePicker/>
                </div>
                <CustomDonut/>
            </div>
            <div  className=' sm:w-2/3 px-4 flex flex-col justify-between py-5 rounded-2xl shd'>
            <div className='flex flex-wrap gap-1 items-center justify-between mb-3'>
                <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
                <CustomDateRangePicker/>
            </div>
            <IndexingBarChart/>
            </div>
        </div>
    </div>
  )
}
