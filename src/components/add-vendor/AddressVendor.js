import Image from 'next/image'
import React from 'react'
import CustomTooltip from '../common/Tooltip'

export default function AddressVendor() {
  return (
    <div className='border  p-5 rounded-lg sm:flex gap-7'>
      <div className='sm:w-1/2 space-y-7'>
       <p className='text-blue text-lg font-semibold pb-3'>Billing Address</p>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Attention
          </label>
        </div>
          <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                Country Region
              </label>
         </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Address Line 1
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Address Line 2
          </label>
        </div>
        <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select City</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                City
              </label>
         </div>
        <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select State</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                State
              </label>
         </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Pin Code
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Phone Number
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Attention
          </label>
        </div>
      </div>
      <div className='sm:w-1/2 space-y-7 my-4 sm:my-0'>
        <div className='flex items-center justify-between pb-3'>
        <p className='text-blue text-lg font-semibold '>Shipping Address</p>
        <div className='flex items-center gap-2'>
            <input
            id="checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe]  focus:ring-2 rounded-lg"/>
            <label className='text-sm font-semibold'>Copy Billing Address</label>
        </div>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
              Attention
          </label>
        </div>
          <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                Country Region
              </label>
         </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Address Line 1
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Address Line 2
          </label>
        </div>
        <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select City</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                City
              </label>
         </div>
        <div className="relative z-0   group">
             <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Select State</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
              </select>
              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                State
              </label>
         </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Pin Code
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Phone Number
          </label>
        </div>
         <div className="relative z-0   group">
          <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
             <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
             Attention
          </label>
        </div>
      </div>
    </div>
  )
}
