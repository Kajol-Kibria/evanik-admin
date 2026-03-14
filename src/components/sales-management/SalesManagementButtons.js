import React from 'react'

export default function SalesManagementButtons() {
  return (
    <div>
        <div className='sm:flex items-center justify-between gap-4 my-4'>
               
               <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
               Sale Order
               </p>
               
               <button className='w-32 h-12 blueButton'>Add Customer</button>
             
               </div>
    </div>
  )
}
