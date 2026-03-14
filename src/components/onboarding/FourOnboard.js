import Image from 'next/image'
import React from 'react'

export default function FourOnboard() {
  return (
    <div>
<div className='grid items-center justify-center gap-16'>
                        <div className='text-center'>
                            <p className='text-4xl font-bold py-5 text-gray-800'>Automate Pricing for Maximum Profit</p>
                            <p className='font-medium text-gray-700'>Use our Automatic Repricer to set the most competitive prices and increase your margins. Stay ahead of the competition with smart pricing strategies.</p>
                            <p className='font-medium text-gray-700'></p>
        
                        </div>
                        <div className='sm:flex items-center gap-16'>
                            <div>
                                <Image className='object-cover' src='/images/banner-Automate-Pricing.jpg' alt='' height={432} width={429}/>
                            </div>
                            <div className='sm:block hidden'>
                                <div className="flex flex-col justify-center mt-32 items-center p-6  rounded-lg max-w-[610px] mx-auto">
                                      <div className="bg-[#525cc7] text-white p-5 rounded-lg shadow-md w-[400px]">
                                        <p className="">
                                        &apos;&apos; eVanik has completely transformed the way we manage our e-commerce operations. We highly recommend eVanik for any business looking to scale efficiently in the online marketplace ecosystem!&apos;&apos;
                                        </p>
                                        
                                      </div>
                                
                                      <div className="flex items-center mt-12">
                                        <Image
                                          src="/images/testimonial-user.png"
                                          alt="Kailash Kumar"
                                          width={60}
                                          height={60}
                                          className="border rounded-full mr-3"
                                        />
                                        <div>
                                          <p className="text-xl font-semibold">Mr. Kailash Kumar</p>
                                          <p className="text-gray-700 font-medium mt-2 text-sm">
                                            Accountant, Link Locks Private Limited.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                            </div>
                        </div>
                    </div>         

    </div>
  )
}
