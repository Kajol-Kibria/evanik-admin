import React from 'react'
import CustomTooltip from '../common/Tooltip'
import Image from 'next/image'
import CustomRadio from '../common/CustomRadio'

export default function Subtotal() {
  return (
    <div className=' text-gray-800  p-4'>
        <div className='flex items-center justify-between font-semibold'>
            <p className='text-blue'>Sub total</p>
            <p>0.00</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className="relative  z-0 w-full my-5 group">
                              <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                              <label className=" flex gap-2 items-center  text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Discount
                              </label>
            </div>
            <select className='w-20 outline-none  mt-5'>
                  <option>%</option>
                  <option>in</option>
                  <option>mm</option>
                  <option>mtr</option>
            </select>
            <p className='font-semibold mt-5'>0.00</p>
        </div>
        <div>
            <div className='flex gap-1 text-sm my-4'>
                          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                          Select a tax
            </div>
            <div className='flex items-center gap-5'>
                          <CustomRadio id={'TCS'} txt={'TCS'}/>
                          <CustomRadio id={'TDS'} txt={'TDS'}/>
            </div>
            <div className='flex gap-4'>
            <select className='w-full border-b border-gray-700/40 outline-none  py-3'>
                  <option>Select a tax</option>
                  <option>in</option>
                  <option>mm</option>
                  <option>mtr</option>
            </select>
            <p className='font-semibold mt-5'>0.00</p>
            </div>
            <div className='flex items-center gap-2'>
            <div className="relative  z-0 w-full my-5 group">
                              <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                              <label className=" flex gap-2 items-center  text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Adjustment
                              </label>
            </div>
            <p className='font-semibold mt-5'>0.00</p>
        </div>
        <div className='flex items-center justify-between font-semibold my-1'>
            <p>Total</p>
            <p className='text-xl'>0.00</p>
        </div>
        </div>
    </div>
  )
}
