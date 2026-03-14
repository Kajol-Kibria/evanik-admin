import Image from 'next/image'
import React from 'react'
import Testi from '../dashboard/Testi'

export default function OneOnboad() {
  return (
    <div>
        <div className='grid items-center justify-center gap-16'>
                        <div className='text-center'>
                            <p className='text-4xl font-bold py-5 text-gray-800'>Welcome to Evanik</p>
                            <p className='font-medium text-gray-700'>Get ready to streamline your eCommerce operations. Let&apos;s start by connecting your marketplace accounts to centralize your inventory and orders.</p>               
        
                        </div>
                        <div className='sm:flex items-end gap-16'>
                            <div>
                                <Image className='object-cover' src='/images/banner-get-started.jpg' alt='' height={432} width={540}/>
                            </div>
                            <div>
                              <Testi/>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
