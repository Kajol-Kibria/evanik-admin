import Image from 'next/image'
import React from 'react'

export default function Testi() {
  return (
    <div className='hidden sm:block'>
           <div className=" flex flex-col justify-center mt-32 items-center p-6  rounded-lg max-w-[610px] mx-auto">
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
  )
}
