import React from 'react'
import Image from 'next/image'
export default function SubscriptionDetails() {
  return (
    <div>
        <div className=" shd rounded-lg">
                        <h2 className=" bg-[#525cc7] text-white font-semibold mb-4 rounded-t-lg p-4">Subscription Details</h2>
                        <div className="p-6">
                            <div className='space-y-[14px]'>
                            <div className='flex justify-between items-start'>
                            <div className='w-1/3 pt-1'>
                            <p className="text-gray-700 text-xs mb-1">Name:</p>
                            <p className="font-medium text-gray-900">Mary Jane</p>
                            </div>
                            <div className='w-1/3 pt-1'>
                            <p className="text-gray-700 text-xs mb-1">Date of Order:</p>
                            <p className="font-medium text-gray-900">25 June 2024</p>
                            </div>
                            <div className='flex items-center gap-1 w-1/3'>
                            <p className="text-gray-700 text-xs ">Status:</p>
                            <span className=" text-[#1f674f] px-4 py-1 bg-[#e7fbe4] text-xs rounded-md font-semibold">Accepted</span>
                            </div>
                            </div>
        
                            <div className='flex justify-between'>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Email:</p>
                            <p className="font-medium text-gray-900">maryjane@gmail.com</p>
                            </div>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Phone Number:</p>
                            <p className="font-medium text-gray-900">9907717334</p>
                            </div>
                            </div>
        
                            <div>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Address Line 1</p>
                            <p className="font-medium text-gray-900">Block 1</p>
                            </div>
                            <div>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Address Line 2</p>
                            <p className="font-medium text-gray-900">ABC Street</p>
                            </div>
                            </div>
                            <div className='flex justify-between'>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">Pincode:</p>
                            <p className="font-medium text-gray-900">201301</p>
                            </div>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">City:</p>
                            <p className="font-medium text-gray-900">Noida</p>
                            </div>
                            <div className='w-1/3'>
                            <p className="text-gray-700 text-xs mb-1 mt-2">State:</p>
                            <p className="font-medium text-gray-900">Uttar Pradesh</p>
                            </div>
                            </div>
                        </div>
                        <p className='px-6 font-semibold'>Directions for Courier</p>
                        <div className=" flex px-6 py-4 justify-between pb-10">
                            <div className='w-1/2'>
                            <p className="text-gray-700 text-xs mb-3">Delivery:</p>
                            <Image src='/images/logo-Delhivery.png' alt='' width={73} height={13}/>
                            </div>
                            <div className='w-1/2'>
                            <p className="text-gray-700 text-xs mb-3">Payment</p>
                            <Image src='/images/logo-payu.png' alt='' width={31} height={16}/>
                            </div>
                        </div>
                        </div>
    </div>
  )
}
