import Image from 'next/image'
import React from 'react'

export default function DashboardBottom() {
  return (
    <div>
        <div className=" py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Top Selling Channels */}
        <div className="border-blue/30 border bg-white rounded-xl shd p-6">
        <div className=' flex items-center justify-between mb-4'>
          <h2 className="text-lg font-semibold  text-blue">Top Selling Channels</h2>
          <button className='text-sm text-blue hover:text-black hover:bg-transparent font-medium bg-blue/5 rounded-sm py-1 px-3 transition-all duration-150'>View All</button>

        </div>
          <ul className=''>
            <li className="mb-2 flex justify-between"><p>Amazon</p> <p className='text-sm'>15 Stores</p></li>
            <li className="mb-2 flex justify-between"><p>Amazon</p> <p className='text-sm'>15 Stores</p></li>
            <li className="mb-2 flex justify-between"><p>Amazon</p> <p className='text-sm'>15 Stores</p></li>
            
          </ul>
        </div>

        {/* Top Selling Categories */}
        <div className="border-blue/30 border bg-white rounded-xl shd p-6">
        <div className=' flex items-center justify-between mb-4'>
          <h2 className="text-lg font-semibold  text-blue">Top Selling Categories</h2>
          <button className='text-sm text-blue hover:text-black hover:bg-transparent font-medium bg-blue/5 rounded-sm py-1 px-3 transition-all duration-150'>View All</button>
        </div>
          <ul className=''>
            <li className="mb-2 flex justify-between"><p>Apaparels</p> <p className='text-sm'>20k+ Products</p></li>
            <li className="mb-2 flex justify-between"><p>Apaparels</p> <p className='text-sm'>20k+ Products</p></li>
            <li className="mb-2 flex justify-between"><p>Apaparels</p> <p className='text-sm'>20k+ Products</p></li>
            
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {/* Sellers using more than three platforms */}
        

        <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
        <div className='flex items-center  gap-3 mb-2'>
          <div className='bg-blue/10 p-4 contain-content rounded-full'>
          <Image className=' ' src='/images/arrow.svg' width={23} height={23} alt=''></Image>
          </div>
          
          <p className='w-4/5'>
          Sellers using more than three platforms see a 50% higher revenue growth rate.
          </p>
        </div>
          <button className="mt-4 hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
          Visit Platforms Page
          </button>
        </div>
        {/* Same-day delivery options */}
        
        <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
        <div className='flex  items-center gap-3 mb-2'>
          <div className='bg-blue/10 p-4 contain-content rounded-full'>
          <Image src='/images/arrow.svg' width={23} height={23} alt=''></Image>
          </div>
          <p className='w-4/5'>
          Same-day delivery options increase sales by 25%.
          </p>
        </div>
          <button className="mt-4 hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
          Visit Delivery Page
          </button>
        </div>
        {/* Efficient logistics and fulfillment */}
        <div className="border-blue/30 border bg-white rounded-3xl shd p-6">
        <div className='flex items-center gap-3 mb-2'>
          <div className='bg-blue/10 p-4 contain-content rounded-full'>
          <Image src='/images/arrow.svg' width={23} height={23} alt=''></Image>
          </div>
          <p className='w-4/5'>
            Efficient logistics and fulfillment can reduce cart abandonment rates by 20%.
          </p>
        </div>
          <button className="mt-4 hover:bg-[#5356f7] bg-blue transition-all duration-150 text-white font-semibold py-3 px-4 rounded-xl w-full">
            Visit Logistics Page
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
