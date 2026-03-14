import React from 'react'

export default function ProductManagementButtons() {
  return (
    <div>
        <div className='sm:flex items-center justify-between gap-4 my-4'>
               
              <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
              Product Management
              </p>
              
              <div className='flex gap-4 my-4 sm:my-0'>
              <button className='w-32 h-12 buttonBlue'>Cancel</button>
              <button className='w-32 h-12 blueButton'>Save</button>
              </div>
              </div>
    </div>
  )
}
