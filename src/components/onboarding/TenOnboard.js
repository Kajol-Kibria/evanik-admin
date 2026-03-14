import Image from 'next/image'
import React from 'react'

import CheckCard from './CheckCard'
import RadioCard from './RadioCard'


export default function TenOnboard() {
  return (
    <div>
        
        <div className='sm:w-[812px] mb-20 mx-auto'>
            <div className='text-center mb-10'>
                    <p className='text-4xl font-bold py-5 text-gray-800'>Setup to get started</p>
                    <p className='font-medium text-gray-700'>Begin by configuring your account settings and preferences. Customize your dashboard to suit your business needs and ensure a smooth start with EVanik</p>
                </div>
                <div className='hidden sm:block text-sm text-center text-gray-600 my-3'>
                We recommend completing these onboarding steps to get started-
                </div>
                <div className='space-y-6 h-[calc(100vh-360px)] sm:h-auto overflow-auto px-2'>
                <div className='sm:flex items-center justify-between shd rounded-lg  py-[14px] px-[18px] '>
                    <div  className='sm:flex items-center gap-4'>
                    <Image src='/images/thumb-profile-setp.png' width={50} height={50} alt='w'/>
                        <div>
                        <p className='text-lg text-gray-700 font-semibold py-2'>Profile Setup</p>
                        <p className='text-sm sm:text-center text-gray-600 pb-2'>Complete your profile details to personalize your dashboard and preferences</p>
                        </div>
                    </div>
                    <button className=" hover:bg-[#5356f7] bg-blue transition-all duration-300 text-white font-semibold py-3 px-4 rounded-xl ">Setup Now</button>
                    </div>
                <div className='sm:flex items-center justify-between shd rounded-lg  py-[14px] px-[18px] '>
                    <div  className='sm:flex items-center gap-4'>
                    <Image src='/images/thumb-connect-channel.png' width={50} height={50} alt='w'/>
                        <div>
                        <p className='text-lg text-gray-700 font-semibold py-2'>Connect channels</p>
                        <p className='text-sm sm:text-center text-gray-600 pb-2'>Link sales channels to sync and streamline orders across platforms</p>
                        </div>
                    </div>
                    <button className=" hover:bg-[#5356f7] bg-blue transition-all duration-300 text-white font-semibold py-3 px-4 rounded-xl ">Setup Now</button>
                    </div>
                <div className='sm:flex items-center justify-between shd rounded-lg  py-[14px] px-[18px] '>
                    <div  className='sm:flex items-center gap-4'>
                    <Image src='/images/thumb-product-setup.png' width={50} height={50} alt='w'/>
                        <div>
                        <p className='text-lg text-gray-700 font-semibold py-2'>Product Setup</p>
                        <p className='text-sm sm:text-center text-gray-600 pb-2'>Add and configure your products to manage inventory and listings</p>
                        </div>
                    </div>
                    <button className=" hover:bg-[#5356f7] bg-blue transition-all duration-300 text-white font-semibold py-3 px-4 rounded-xl ">Setup Now</button>
                    </div>
                    
                <div className=' my-3 '>
                <div className='flex justify-center'><button className='buttonBlue mb-5 sm:w-40'>Take a Tour</button></div>
                </div>
                </div>
            </div>   
    </div>
  )
}



