import React from 'react'
import Image from 'next/image'
import Testi from '../dashboard/Testi'
export default function ThreeOnboard() {
  return (
    <div>
       <div className='grid items-center justify-center gap-16'>
                      <div className='text-center'>
                          <p className='text-4xl font-bold py-5 text-gray-800'>Stay GST Compliant
                          </p>
                          <p className='font-medium text-gray-700'>With our seamless Tally PRIME integration, filing your GST returns accurately.</p>
                          <p className='font-medium text-gray-700'>and on time has never been easier. Keep your finances in check effortlessly.</p>
      
                      </div>
                      <div className='sm:flex items-center gap-16'>
                          <div>
                              <Image className='object-cover' src='/images/banner-Stay-GST-Compliant.jpg' alt='' height={432} width={432}/>
                          </div>
                          <div>
                              <Testi/>
                          </div>
                      </div>
                  </div>
 
    </div>
  )
}
