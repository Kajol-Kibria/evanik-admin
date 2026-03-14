import Image from 'next/image'
import React from 'react'
import Testi from '../dashboard/Testi'

export default function TwoOnboard() {
  return (
    <div>
<div className='grid items-center justify-center gap-16'>
                        <div className='text-center'>
                            <p className='text-4xl font-bold py-5 text-gray-800'>Order Management Simplified</p>
                            <p className='font-medium text-gray-700'>Easily process bulk orders and track their status in real-time. Our intuitive dashboard ensures you never miss a beat.</p>
        
                        </div>
                        <div className='sm:flex items-end gap-16'>
                            <div>
                                <Image className='object-cover' src='/images/banner-oms.jpg' alt='' height={415} width={555}/>
                            </div>
                            <div>
                               <Testi/>
                            </div>
                        </div>
                    </div>

     
    </div>
  )
}
