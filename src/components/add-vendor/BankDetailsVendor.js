import React from 'react'
import CustomTooltip from '../common/Tooltip'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'
import { LuTrash } from 'react-icons/lu'

export default function BankDetailsVendor() {
  return (
    <div className='border  p-5 rounded-lg'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5'>
                <div className="relative z-0   group">
                 <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Account Holder Name
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
                               Bank Name
                             </label>
                        </div>
                <div className="relative z-0   group">
                 <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Account Number <span className='text-red-500'>*</span>
                  </label>
               </div>
                <div className="relative z-0   group">
                 <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Re-enter Account Number <span className='text-red-500'>*</span>
                  </label>
               </div>
               <div className='flex'>
                <div className="relative z-0  w-full group">
                 <input defaultValue={'PO-00004'} type="text" className="px-4 focus:border-gray-700 border-gray-700/40  py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                  <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                      Enter IFSC Code <span className='text-red-500'>*</span>
                  </label>
               </div>
                <div className='flex m-2 items-center gap-4'>
                  <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full text-red-500'><LuTrash  size={17}/></p>
                  <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'><FiPlus size={17}/></p>
                </div>
               </div>
               </div>
    </div>
  )
}
