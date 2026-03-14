import React from 'react'
import Image from 'next/image'
export default function OrderHistory() {
  return (
    <div>
        <div className="shd rounded-lg my-10">
                        <h2 className=" bg-[#525cc7] text-white font-semibold mb-4 rounded-t-lg p-4">Order History</h2>
                        <div className="h-[275px] overflow-auto p-6 flex items-start justify-between">
                            <div>
                            <div className='flex items-center gap-5 mb-4'>
                            <div className='text-center bg-[#f3f4fb] w-[74px] h-[64px] content-center rounded-xl'>
                                <p className='font-semibold text-lg'>26</p>
                                <p className='text-xs  font-thin'>June 2025</p>
                            </div>
                            <div className='w-2/3 sm:w-auto'>Order Placed</div>
                            </div>
                            <div className='flex items-center gap-5 mb-4'>
                            <div className='text-center bg-[#f3f4fb] w-[74px] h-[64px] content-center rounded-xl'>
                                <p className='font-semibold text-lg'>26</p>
                                <p className='text-xs  font-thin'>June 2025</p>
                            </div>
                            <div className='w-2/3 sm:w-auto'>Store x sends package to store y</div>
                            </div>
                            <div className='flex items-center gap-5 mb-4'>
                            <div className='text-center bg-[#f3f4fb] w-[74px] h-[64px] content-center rounded-xl'>
                                <p className='font-semibold text-lg'>26</p>
                                <p className='text-xs  font-thin'>June 2025</p>
                            </div>
                            <div className='w-2/3 sm:w-auto'>Store x sends package to store y</div>
                            </div>
                            <div className='flex items-center gap-5 mb-4'>
                            <div className='text-center bg-[#f3f4fb] w-[74px] h-[64px] content-center rounded-xl'>
                                <p className='font-semibold text-lg'>26</p>
                                <p className='text-xs  font-thin'>June 2025</p>
                            </div>
                            <div className='w-2/3 sm:w-auto'>Store x sends package to store y</div>
                            </div>
                            <div className='flex items-center gap-5 mb-4'>
                            <div className='text-center bg-[#f3f4fb] w-[74px] h-[64px] content-center rounded-xl'>
                                <p className='font-semibold text-lg'>26</p>
                                <p className='text-xs  font-thin'>June 2025</p>
                            </div>
                            <div className='w-2/3 sm:w-auto'>Store x sends package to store y</div>
                            </div>
                            
                        </div>
                        <button className='hidden sm:block text-xs text-blue font-semibold'>Show more</button>
                        </div>
                        </div>
    </div>
  )
}
