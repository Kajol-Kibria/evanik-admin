'use client'
import React from 'react'
import CustomTooltip from '../common/Tooltip'
import Image from 'next/image'
export default function CommonInfo() {
  return (
    <div>
        <div>
                <div className='grid sm:gap-8 gap-10  items-center sm:grid-cols-3 grid-cols-1 border py-10 px-5 rounded-lg my-4'>
                  <div className="relative z-0   group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Solution</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Primary Contact <span className='text-red-500'>*</span>
                                    </label>
                                </div>       
                          <div className="relative z-0   group">
                                              <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              First Name
                                        </label>
                            </div> 
                          <div className="relative z-0   group">
                                              <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              Last Name
                                        </label>
                            </div> 
                          <div className="relative z-0   group">
                                              <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              Company Name
                                        </label>
                            </div>
                            <div className="relative z-0 group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select a Dispaly Name</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Vendor Display Name <span className='text-red-500'>*</span>
                                    </label>
                                </div>
                                <div className="relative z-0   group">
                                              <input defaultValue={'email@ex.com'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              Vendor Email
                                        </label>
                            </div>
                                <div className="relative z-0   group">
                                              <input defaultValue={'919864646464'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              Vendor Work Phone
                                        </label>
                            </div>
                                <div className="relative z-0   group">
                                              <input defaultValue={'919864646464'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              Vendor Mobile Number
                                        </label>
                            </div>
                          </div>
              </div>
    </div>
  )
}
