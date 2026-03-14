import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

export default function ResetCard() {
  return (
    <div>
        <div className='flex sm:relative fixed top-0 bottom-0 left-0 right-0 items-center justify-center'>
                    <div className=' flex flex-col items-center '>
                    <Image src='/images/evanik-logo-icon.png' alt='' height={32} width={92}/>
                    <Link className='w-full text-xs text-gray-700 flex items-center gap-1 mt-4' href='/'><IoIosArrowBack size={15}/>Back to login</Link>
                    <div className='py-10  px-10 border  mt-5 rounded-xl shd border-[#e0e1ff]'>
                        <p className='text-blue font-semibold text-3xl pb-5'>Reset Password</p>
                        <p className='text-gray-700 sm:w-80 w-60 text-xs pb-1'>Set your new password, It must be different from the previous one.</p>
                        <form className=''>
                            
                            <div className="relative z-0 sm:w-96 my-4 group">
                            <input type="email" className="w-full px-4 focus:border-gray-700 border-gray-700/40 block py-2.5   bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                            <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                New Password
                            </label>
                            </div>
                            
                            <div className="relative z-0 sm:w-96 my-4 group">
                            <input type="email" className="w-full px-4 focus:border-gray-700 border-gray-700/40 block py-2.5   bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                            <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                Confirm Password
                            </label>
                            </div>
                            
                            <div className="relative z-0 sm:w-96 my-4 group">
                            <input type="email" className="w-full px-4 focus:border-gray-700 border-gray-700/40 block py-2.5   bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                            <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                            <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                Enter activation code
                            </label>
                            </div>
                            
                            <div className=' w-full mt-10 flex items-center justify-center'>
                                <Link href='/-after-reset-password' className=' w-full text-center text-white font-semibold hover:bg-[#5356f7] transform transition-all duration-200 bg-blue py-3 sm:px-10 px-6 text-sm sm:text-base rounded-xl'>Submit</Link>
                            </div>
                            
                        </form>
                    </div>
                    </div>
                    
                </div>
    </div>
  )
}
