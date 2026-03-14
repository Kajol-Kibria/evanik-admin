import Link from 'next/link'
import React from 'react'

export default function VendorManagmentTop() {
  return (
    <div>
        <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
        Vendor Managment
       </p>
       <div className='flex items-center justify-between my-5'>
        <button className='buttonBlue w-32'>Bulk Edit</button>
        <div className='flex items-center gap-4'>
        <button className='buttonBlue'>Update GST Details</button>
        <button className='buttonBlue'>Update MSME Details</button>
        <Link href='/add-vendor' className='blueButton'>Add New Vendor</Link>
        </div>
       </div>
    </div>
  )
}
