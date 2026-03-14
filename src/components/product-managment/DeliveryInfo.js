import React from 'react'
import CustomTooltip from '../common/Tooltip'
import Image from 'next/image'

export default function DeliveryInfo() {
  return (
    <div className='bg-white'>
        
          <div className='sm:flex items-baseline gap-7'>
            <div className="relative z-0  sm:w-[90%] mb-5 group">
                              <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Delivery Challan No
                              </label>
              </div>       
               <div className=' relative sm:w-[90%]'>
                                    <label className='flex absolute -top-2.5 gap-2 items-center text-sm'>
                                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                        DC Date
                                    </label>
                                 <input className='border-gray-700/40 border-b p-2.5 w-full  outline-none text-black' type='date'></input>
                </div>
          </div>
          <div className='grid sm:grid-cols-2 gap-7 my-4 space-y-6 sm:space-y-0'>
          <div className="relative z-0 mb-5 group">
                              <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Delivery Challan No
                              </label>
              </div> 
              <div className=" z-0 relative   group">
                      <select  className="px-4 focus:border-gray-700 border-gray-700/40 block p-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                      <option>New Delhi</option>
                      <option> one</option>
                      <option> two</option>
                      <option> three</option>
                      </select>
                      <label className='flex absolute -top-2.5 gap-2 items-center text-sm'>
                            <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                            Receiving Branch
                      </label>
                  </div> 
              <div className=" z-0 relative   group">
                      <select  className="px-4 focus:border-gray-700 border-gray-700/40 block p-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                      <option>G1</option>
                      <option> one</option>
                      <option> two</option>
                      <option> three</option>
                      </select>
                      <label className='flex absolute -top-2.5 gap-2 items-center text-sm'>
                           <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                           Receiving Warehouse
                      </label>
                  </div> 
          </div>
          
    </div>
  )
}
