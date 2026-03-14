import React from 'react'
import AlertText from '../common/AlertText'
import CustomTooltip from '../common/Tooltip'
import Image from '../../../node_modules/next/image'

export default function AddUsers() {
  return (
    <div className='p-6 shd rounded-lg'>
      <AlertText txt={'You have not added any users yet.'}/>
      <div className='mt-5'>
        <p className='text-blue font-semibold'>Add User</p>
        <div className='space-y-7 my-4'>
                            <div className="relative z-0 mb-5 group text-black">
                                <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                Name
                                </label>
                            </div>
                            <div className="relative z-0 mb-5 group text-black">
                                <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                Sub User Email
                                </label>
                            </div>
                              <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                <option>State Role</option>
                                <option>vendor one</option>
                                <option>vendor two</option>
                                <option>vendor three</option>
                                </select>
                                <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                Role
                                </label>
                                </div>
                              <div className="relative z-0 mb-5 group text-black">
                                <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                10 Digits Mobile Number
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 group text-black">
                                  <input type="password" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                  <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                  Password
                                  </label>
                              </div>  
                              
              </div>
      </div>
    </div>
  )
}
