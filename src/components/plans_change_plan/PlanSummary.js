import React from 'react'
import Image from '../../../node_modules/next/image'

export default function PlanSummary() {
  return (
        <div className='my-5 2xl:my-0'>
            <h2 className=" bg-[#525cc7] text-white font-semibold rounded-t-lg p-4 ">Plan Summary</h2>
            <div className="bg-white p-6 rounded-b-lg shd space-y-4">
            <div className='flex items-start justify-between'>
                <div>
                <p className='font-medium'>Blue</p>
                <div className='flex items-center gap-3'>
                <p className='text-sm text-gray-800'>Shipments/mo: 50</p>
                </div>
                </div>
                <p className='text-sm'>₹ 10000.00</p>
            </div>
            <div>
            <p className='font-medium pb-2'>Users</p>
                <div>
                <p className='text-xs text-gray-600'>Branded Domains:</p>
                1
                </div>
                <div>
                <p className='text-xs text-gray-600'>Additional Users:
                </p>
                0
                </div>
            </div>
            <div>
            <p className='font-semibold'>Add Ons</p>
                <div className='flex items-center gap-3'>
                <p className='text-xs text-gray-600'>Branded Domains:</p>
                <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={16} height={16}/>
                    <p className='text-[#1f674f] text-[13px] font-semibold'>Included</p>
                </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>Monthly Total</p>
                <p className='text-sm'>₹ 2500.00</p>
            </div>
            <button className='w-full buttonBlue'>Upgrade Plan</button>
            </div>
        </div>
  )
}
