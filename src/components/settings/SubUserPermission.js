'use client'
import React, { useState } from 'react'
import AlertText from '../common/AlertText'
import CustomTooltip from '../common/Tooltip'
import Image from '../../../node_modules/next/image'

export default function SubUserPermission() {

  const dataArray = [
    {
      ID: 1,
      ReportType:'Sales',
    },
    {
      ID: 2,
      ReportType:'Returns',
    },
    {
      ID: 3,
      ReportType:'Settlement',
    },
    {
      ID: 4,
      ReportType:'Manage Orders',
    },
  ]

   return (
    <div className='p-6 shd rounded-lg'>
      <AlertText txt={'You have not added any users yet.'}/>
      <form className='mt-5'>
              <p className='text-blue font-semibold'>Add User</p>
              <div className='space-y-7 my-7'>
                                      <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                      <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                      <option>Select Sub User</option>
                                      <option>vendor one</option>
                                      <option>vendor two</option>
                                      <option>vendor three</option>
                                      </select>
                                      <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                      <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                                      Sub User
                                      </label>
                                      </div>
                                      <div className="relative z-0 sm:w-[90%] mb-5 group text-black">
                                      <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                                      <option>Select Role</option>
                                      <option>vendor one</option>
                                      <option>vendor two</option>
                                      <option>vendor three</option>
                                      </select>
                                      <label className="flex  gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                      <CustomTooltip txt={'Tooltip text'}><CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip></CustomTooltip>
                                      Role
                                      </label>
                                      </div>
                    </div>
            </form>
          <div className='flex items-center gap-2'>
            <input type='checkbox'/>
            <label>Select All</label>
         </div>
         <div>
         <div className=' w-full  mx-auto overflow-auto mt-5'>
                                <table   className="  w-[1200px] sm:w-full">
                                      <thead >    
                                          <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                                              <th><h1 className='py-2'>Report Type</h1></th>
                                              <th><h1 >View</h1></th>
                                              <th><h1 >Edit</h1></th>
                                          </tr> 
                                      </thead>
                                      <tbody>
                                          {dataArray.map(data=>(
                                          <tr className='max-h-[54px] h-[54px] border-t text-sm font-medium text-black ' key={data.ID}>
                                              <td>{data.ReportType}</td>
                                              <td>
                                              <input type='checkbox'/>
                                              </td>
                                              <td>
                                              <input type='checkbox'/>
                                              </td>
                                          </tr>
                                          ))}
                                      </tbody>
                                     </table>
             </div>
         </div>
    </div>
  )
}
