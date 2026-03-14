'use client'
import React from 'react'
import Image from '../../../node_modules/next/image'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import Select from 'react-select';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowForward } from "react-icons/io";
import CustomSelect from '../common/CustomSelect';

export default function ReverseShippingReconciliationButtons() {
  const aquaticCreatures = [
    { label: '1mg', value: '1mg' },
    { label: 'amazon', value: 'amazon' },
    { label: 'Flipkart', value: 'Flipkart' },
    { label: 'Jiomart', value: 'Jiomart' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];
  return (
    <div>
        <div className='sm:flex items-center justify-between mb-5'>
          <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
          Reverse Shipping Charges
          </p>
          <div className='flex items-center gap-4'>
             <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
          </div>
        </div>
        <div className='grid sm:grid-cols-3 gap-5 py-4'>
            <div className='flex items-center justify-between bg-[#F3F4FB] rounded-lg p-4'>
              <div className='flex items-center gap-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>100</p>
                <p className='text-sm'>Orders with double Shipping Charges</p>
              </div>
              <IoIosArrowForward/>
            </div>
            <div className='flex items-center justify-between bg-[#FBF8E4] rounded-lg p-4'>
              <div className='flex items-center gap-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>Rs. 0.00</p>
                <p className='text-sm'>Orders reimbursed, Rs. 0.00</p>
              </div>
              <IoIosArrowForward/>
            </div>
            <div className='flex items-center justify-between bg-[#F1F8F6] rounded-lg p-4'>
              <div className='flex items-center gap-4'>
                <p className='px-4 py-2 bg-gray-700/10 rounded-lg text-2xl font-semibold'>100</p>
                <p className='text-sm'>Excess Reverse Shipping Applied</p>
              </div>
              <IoIosArrowForward/>
            </div>
        </div>
        <div className='sm:flex items-start gap-4 space-y-4 sm:space-y-0 my-5'>
          <CustomDateRangePicker/>
          <CustomSelect options={aquaticCreatures}/>
          <div className='flex items-center mt-4 sm:mt-0 sm:mr-5'>
              <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
              <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
          </div>
        </div>
    </div>
  )
}
