import React from 'react'
import CustomSlideCheck from '../common/CustomSlideCheck'

export default function GrossAmount() {
  return (
    <div className='shd h-full  w-full space-y-4 text-gray-800  py-4 px-5 rounded-lg bg-white'>
        <div className='flex items-center justify-between font-semibold'>
            <p className='text-blue'>Gross Amount</p>
            <p>370000.00</p>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex'>
            Discount
                <div className='flex items-center gap-2 mx-2'>
                %
                <CustomSlideCheck/>
                ₹
              </div>
            </div>
            <div>
            66000.00
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div>Total before GST</div>
            <div>370000.00</div>
        </div>
        <div className='flex items-center justify-between'>
            <div>GST</div>
            <div>66000.00</div>
        </div>
        <div className='flex items-center justify-between'>
            <div>Shipping</div>
            <div>1500.00</div>
        </div>
        <div className='flex items-center justify-between font-semibold my-1'>
            <p>Total</p>
            <p className='text-xl'>0.00</p>
        </div>
        
    </div>
  )
}
