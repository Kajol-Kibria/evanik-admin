import Image from 'next/image'
import React from 'react'
import CustomTooltip from '../common/Tooltip'
import AttachFile from '../common/AttachFile'

export default function OrderDetailsVendor() {
  return (
    <div>
       <div className='grid sm:gap-8 gap-10  items-center sm:grid-cols-2 grid-cols-1 border py-10 px-5 rounded-lg'>
                  <div className="relative z-0   group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select GST Treatment</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    GST Treatment <span className='text-red-500'>*</span>
                                    </label>
                                </div>       
                  <div className="relative z-0   group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select Source of Supply</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Source of Supply <span className='text-red-500'>*</span>
                                    </label>
                                </div>       
                          <div className="relative z-0   group">
                                              <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              PAN
                                        </label>
                            </div> 
                          <div className='pb-4'>
                                 <div className=' flex gap-1 text-sm '>
                                               <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                               MSME Registered
                                   </div>
                                   <div className='flex items-center gap-2 py-2'>
                                        <input
                                      id="checkbox"
                                      type="checkbox"
                                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"/>
                                      <label className='text-sm font-medium'>This vendor is MSME registered</label>
                                      </div>
                            </div> 
                            <div className="relative z-0   group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>INR - Rupees</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Currency
                                    </label>
                                </div>

                            <div className='flex gap-3'>
                            <div className="relative z-0 w-full  group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Noida</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Opening Balance
                                    </label>
                                </div>
                                <div className="relative z-0   group">
                                              <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                              <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                              INR
                                        </label>
                            </div> 

                            </div>
                            <div className="relative z-0 group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Due on Receipt</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Payment Terms
                                    </label>
                                </div>
                            <div className="relative z-0 group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>TDS</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    TDS
                                    </label>
                                </div>
                            <div className="relative z-0 group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>Select Price List</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Price List
                                    </label>
                                </div>
                                <div className='pb-4'>
                                 <div className=' flex gap-1 text-sm '>
                                               <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                               Enable Portal?
                                   </div>
                                   <div className='flex items-center gap-2 py-2'>
                                        <input
                                      id="checkbox"
                                      type="checkbox"
                                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"/>
                                      <label className='text-sm font-medium'>TAllow portal access for this vendor</label>
                                      </div>
                            </div>
                            <div className="relative z-0 group">
                                    <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                    <option>English</option>
                                    <option>one</option>
                                    <option>two</option>
                                    <option>three</option>
                                    </select>
                                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Portal Language
                                    </label>
                                </div>
                          </div>
                <AttachFile/>
    </div>
  )
}
