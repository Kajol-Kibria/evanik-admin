import React from 'react'
import Image from 'next/image'
export default function PaymentSummery() {
  return (
    <div>
        <div className='my-10 p-6 rounded-lg border space-y-4 shd'>
                    <div className='flex items-center justify-between font-bold '><p className='text-gray-600/85'>Amount</p><p>₹ 990</p></div>
                    <div className='flex items-center justify-between font-bold '><p className='text-gray-600/85'>Discount</p><p>₹ 50</p></div>
                    <div className='flex items-center justify-between font-bold '><p className='text-gray-600/85'>Shipping</p><p>₹ 50</p></div>
                    <div className='text-sm flex items-center justify-between font-medium text-white bg-[#525cc7] p-4 rounded-lg my-3'><p>Payment Summary</p><p  className='font-bold'>₹ 890</p></div>
                </div>
    </div>
  )
}
