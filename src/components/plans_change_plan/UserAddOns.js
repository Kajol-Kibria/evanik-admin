import React from 'react'
import Image from '../../../node_modules/next/image'

export default function UserAddOns() {
  return (
    <div className='sm:flex gap-8'>
        <div className="sm:w-1/2 my-5 sm:my-0">
            <h2 className=" bg-[#525cc7] text-white font-semibold rounded-t-lg p-4">Account User</h2>
            <div className="bg-white p-6 rounded-b-lg shd space-y-4">
            <div>
            <p className='font-semibold'>Included Users</p>
            <div className='flex items-center gap-3'>
                <p>1</p>
                <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={16} height={16}/>
                    <p className='text-[#1f674f] text-[13px] font-semibold'>Included</p>
                </div>
            </div>
            </div>
            <div>
            <p className='font-semibold pb-2'>Additional Users</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <button className='w-8 h-8 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-minus.svg' alt='' width={10} height={10}/></button>       
                    <input type='number' className='border outline-none px-3 py-1 rounded-lg w-20'/>
                    <button className='w-7 h-7 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-plus.svg' alt='' width={10} height={10}/></button> 
                </div>
                <p>₹ 10000.00</p>
            </div>
            </div>
            <div>
            <p className='font-semibold'>Total Users</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <p>1</p>
                <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={16} height={16}/>
                    <p className='text-[#1f674f] text-[13px] font-semibold'>Included</p>
                </div>
                <p>0 added</p>
                </div>
                <p>₹ 10000.00</p>
            </div>
            </div>
            </div>
        </div>
        <div className="sm:w-1/2">
            <h2 className=" bg-[#525cc7] text-white font-semibold rounded-t-lg p-4">Add Ons</h2>
            <div className="bg-white p-6 rounded-b-lg shd space-y-4  sm:h-[244px]">
            <div>
            <p className='font-semibold'>Activated Addons</p>
                <div className='flex items-center gap-3'>
                <p className='text-xs text-gray-600'>Branded Domains:</p>
                <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={16} height={16}/>
                    <p className='text-[#1f674f] text-[13px] font-semibold'>Included</p>
                </div>
                </div>
            </div>
            <div>
            <p className='font-semibold'>Total Users</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <p className='text-xs text-gray-600'>Branded Domains:</p>
                <div className='flex items-center gap-1'>
                    <Image src='/images/icon-light-green-check.svg' alt='' width={16} height={16}/>
                    <p className='text-[#1f674f] text-[13px] font-semibold'>Included</p>
                </div>
                </div>
                <p>₹ 10000.00</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
