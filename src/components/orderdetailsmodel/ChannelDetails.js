import React from 'react'
import Image from 'next/image'
export default function ChannelDetails() {
  return (
    <div>
        <div className="shd rounded-lg my-10">
                        <h2 className=" bg-[#525cc7] text-white font-semibold mb-4 rounded-t-lg p-4">Channel Details</h2>
                        <div className="p-6">
                            <div className='space-y-[14px]'>
                            <div className='flex justify-between'>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1">Sold on</p>
                            <div className='flex items-center gap-2'>
                            <Image src='/images/logo-amazon.png' alt='' width={16} height={16}/>
                            <p className="font-medium text-gray-900">amazon.in</p>
                            </div>
                            </div>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1">Commission</p>
                            <p className="font-medium text-gray-900">1 %</p>
                            </div>
                           
                            </div>
        
                            <div className='flex justify-between'>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Shipping</p>
                            <p className="font-medium text-gray-900">₹ 100</p>
                            </div>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Packing</p>
                            <p className="font-medium text-gray-900">Noida</p>
                            </div>
                            </div>
        
                            <div>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Other</p>
                            <p className="font-medium text-gray-900">Uttar Pradesh</p>
                            </div>
                            
                            </div>
                        </div>
                        
                        </div>
    </div>
  )
}
