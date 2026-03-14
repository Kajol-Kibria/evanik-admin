import React from 'react'
import Image from 'next/image'
import Testi from '../dashboard/Testi'
export default function FiveOnboard() {
  return (
    <div>
     
     <div className='grid items-center justify-center gap-16'>
                      <div className='text-center'>
                          <p className='text-4xl font-bold py-5 text-gray-800'>Centralized Inventory Control</p>
                          <p className='font-medium text-gray-700'>Manage your inventory across multiple channels from one place. Avoid stockouts and overselling with our real-time inventory updates.</p>

      
                      </div>
                      <div className='sm:flex items-center gap-16'>
                          <div>
                              <Image className='object-cover' src='/images/banner-Centralized-Inventory-Control.jpg' alt='' height={432} width={540}/>
                          </div>
                          <div>
                          <Testi/>
                          </div>
                      </div>
                  </div>
             
      
    </div>
  )
}
