import React from 'react'
import AttachFile from '../common/AttachFile';
import CustomTooltip from '../common/Tooltip';
import Image from '../../../node_modules/next/image';
export default function CreateTicket() {
  return (
    
    <form>
                    <div className='grid sm:grid-cols-2 gap-5'>
                      <div className="relative z-0   group">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                          <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Full Name
                          </label>
                      </div>
                      <div className="relative z-0   group">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                          <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Callback Number
                          </label>
                      </div>
                      <div className="relative z-0   group">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                          <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Primary email
                          </label>
                      </div>
                      <div className="relative z-0   group">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                          <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                              <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                              Subject
                          </label>
                      </div>
                      <div className="relative z-0 pb-8 mt-4 group">
                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                        <option>Select</option>
                                        <option>one</option>
                                        <option>two</option>
                                        <option>three</option>
                                  </select>
                                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Category
                                  </label>
                    </div>
                      <div className="relative z-0 pb-8 mt-4 group">
                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                        <option>Select</option>
                                        <option>one</option>
                                        <option>two</option>
                                        <option>three</option>
                                  </select>
                                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Type
                                  </label>
                    </div>
                    </div>
                      <div className="relative z-0 pb-8 mt-4 group">
                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                        <option>Select</option>
                                        <option>one</option>
                                        <option>two</option>
                                        <option>three</option>
                                  </select>
                                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                    Priority
                                  </label>
                    </div>
                    <label className='flex gap-1 text-sm pt-4 pb-1 text-gray-700 font-medium'>
                          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                          Description
                    </label>
                    <textarea className='w-full border rounded-lg outline-none px-3 py-2 h-28' placeholder='Leave a comment here'/>
                    <label className='flex gap-1 text-sm pt-4 pb-1 text-gray-700 font-medium'>
                          <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                          Add file/s
                    </label>
                  <AttachFile/>
        </form>
  )
}
