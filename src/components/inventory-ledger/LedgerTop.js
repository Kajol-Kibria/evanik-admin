'use client'
import React from 'react'
import IconButton from '../common/IconButton'
import { IoIosSearch } from 'react-icons/io'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'

export default function LedgerTop() {
  return (
    <div>
        <div className='flex items-center justify-between my-4'>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Inventory Ledger</p>
        <button className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
        <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
        </svg>
        </button>   
        </div>
        <div className='flex items-center justify-between my-4'>
            <CustomDateRangePicker/>
            <div className='flex items-center mt-4 sm:mt-0'>
                            <input className='pl-5 pr-14  w-full border border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
                            <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                        </div>
        </div>
    </div>
  )
}
