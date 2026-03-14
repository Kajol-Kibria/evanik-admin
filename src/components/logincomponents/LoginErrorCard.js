import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LoginErrorCard() {
  return (
    <div>
        <div className='flex sm:relative fixed top-0 bottom-0 left-0 right-0 items-center justify-center'>
                    <div className=' flex flex-col items-center'>
                    <Image src='/images/evanik-logo-icon.png' alt='' height={32} width={92}/>
                    <div className='py-5  px-10 border mt-8 rounded-xl shd border-[#e0e1ff]'>
                        <p className='text-blue font-semibold text-3xl pb-8'>Login</p>
                        <form className=''>
                            
                            <div className="relative z-0 sm:w-96 mb-5 group">
                            <input type="text" className="w-full px-4 focus:border-gray-700 border-gray-700/40 block py-2.5   bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                            <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                Userid
                            </label>
                            </div>
                            <div className="relative z-0 sm:w-96 mb-5 group">
                            <input type="password" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                            <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                Password
                            </label>
                            </div>
                            <div className='flex gap-4 items-center justify-between my-8'>
                                <Link href='/forgot-password' className='font-semibold text-blue text-sm'>Forgot Password?</Link>
                                <Link href='/dashboard' className='text-white font-semibold hover:bg-[#5356f7] transform transition-all duration-200 bg-blue py-3 sm:px-10 px-6 text-sm sm:text-base rounded-xl'>Login</Link>
                            </div> 
                        </form>
                    </div>
                    </div>
                    
                </div>
    </div>
  )
}
