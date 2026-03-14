import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import Image from '../../../node_modules/next/image'
export default function DownloadClaimsList() {
  return (
    <div>
        <div className='flex items-center mt-4 sm:mt-0 sm:mr-4'>
            <input className='pl-5 pr-14 w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent placeholder:text-sm py-3 rounded-lg' placeholder='Search Reports'/>
            <button className='text-gray-600 -ml-10'><IoIosSearch size={22}/></button>
        </div>
        <div className='grid sm:grid-cols-2 gap-5 my-5'>
            <div className='p-5 rounded-lg bg-[#FBF8E4]'>
                <div className='flex items-center justify-between'>
                    <div className='border p-2 rounded-lg'><Image src='/images/logo-amazon.png' alt='' width={24} height={24}/></div>
                    <p className='text-xs  text-gray-800'>1st July&apos;24 to 31st July&apos;24</p>
                </div>
                <div className='my-3'>
                    <p className='flex items-center gap-2 font-semibold mb-2'>
                        <Image src='/images/icon-Unsellable-Returns.svg' alt='' width={15} height={15}/>
                        Unsellable Returns
                    </p>
                    <p className='text-sm'>2,24 Orders at order value of INR <span className='font-semibold'>3,44,765</span></p>
                </div>
                <div className='flex items-start gap-4 justify-end'>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>View<Image src='/images/icon-eye.svg' alt='' width={12} height={12}/></button>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>Download<Image src='/images/icon-download.svg' alt='' width={12} height={12}/></button>
                </div>
            </div>
            <div className='p-5 rounded-lg bg-[#F3F4FB]'>
                <div className='flex items-center justify-between'>
                    <div className='border p-2 rounded-lg'><Image src='/images/logo-amazon.png' alt='' width={24} height={24}/></div>
                    <p className='text-xs  text-gray-800'>1st July&apos;24 to 31st July&apos;24</p>
                </div>
                <div className='my-3'>
                    <p className='flex items-center gap-2 font-semibold mb-2'>
                        <Image src='/images/icon-Wrong-Charges.svg' alt='' width={15} height={15}/>
                        Wrong Charges
                    </p>
                    <p className='text-sm'>2,24 Orders at order value of INR <span className='font-semibold'>3,44,765</span></p>
                </div>
                <div className='flex items-start gap-4 justify-end'>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>View<Image src='/images/icon-eye.svg' alt='' width={12} height={12}/></button>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>Download<Image src='/images/icon-download.svg' alt='' width={12} height={12}/></button>
                </div>
            </div>
            <div className='p-5 rounded-lg bg-[#ffeceb]'>
                <div className='flex items-center justify-between'>
                    <div className='border p-2 rounded-lg'><Image src='/images/logo-amazon.png' alt='' width={24} height={24}/></div>
                    <p className='text-xs  text-gray-800'>1st July&apos;24 to 31st July&apos;24</p>
                </div>
                <div className='my-3'>
                    <p className='flex items-center gap-2 font-semibold mb-2'>
                        <Image src='/images/icon-Cancellations.svg' alt='' width={15} height={15}/>
                        Cancellations
                    </p>
                    <p className='text-sm'>2,24 Orders at order value of INR <span className='font-semibold'>3,44,765</span></p>
                </div>
                <div className='flex items-start gap-4 justify-end'>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>View<Image src='/images/icon-eye.svg' alt='' width={12} height={12}/></button>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>Download<Image src='/images/icon-download.svg' alt='' width={12} height={12}/></button>
                </div>
            </div>
            <div className='p-5 rounded-lg bg-[#e9f7f2]'>
                <div className='flex items-center justify-between'>
                    <div className='border p-2 rounded-lg'><Image src='/images/logo-amazon.png' alt='' width={24} height={24}/></div>
                    <p className='text-xs  text-gray-800'>1st July&apos;24 to 31st July&apos;24</p>
                </div>
                <div className='my-3'>
                    <p className='flex items-center gap-2 font-semibold mb-2'>
                        <Image src='/images/icon-Shipping-Fee.svg' alt='' width={15} height={15}/>
                        Shipping Fee
                    </p>
                    <p className='text-sm'>2,24 Orders at order value of INR <span className='font-semibold'>3,44,765</span></p>
                </div>
                <div className='flex items-start gap-4 justify-end'>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>View<Image src='/images/icon-eye.svg' alt='' width={12} height={12}/></button>
                    <button className='flex items-center gap-2 text-[13px] py-1.5 px-2.5 border rounded-xl hover:border-blue hover:text-blue bg-white transition-all duration-300'>Download<Image src='/images/icon-download.svg' alt='' width={12} height={12}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
