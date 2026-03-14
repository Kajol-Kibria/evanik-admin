import Image from 'next/image'
import React from 'react'
import Testi from '../dashboard/Testi'
import CustomRadio from '../common/CustomRadio'
export default function SixOnboard() {
  return (
    <div>
        <div className='sm:w-[1052px] mx-auto'>
            <div className=''>

            <div className='text-center'>
                    <p className='text-4xl font-bold py-5 text-gray-800'>Welcome Mayank</p>
                    <p className='font-medium text-gray-700'>Let&apos;s start with a few quick questions to help personalize your eVanik experience</p>
                </div>
                <div className='flex items-center justify-between sm:pt-14 pt-4'>
                <p className=' font-bold  text-lg text-gray-600'>What is the company size?</p>
                <p className='font-medium text-sm text-gray-600'>1/5</p>
                </div>
            </div>



                <div className='h-[calc(100vh-360px)] sm:h-auto overflow-auto px-2 grid grid-cols-1 sm:grid-cols-2 gap-6 py-5'>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>1 - 10 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Micro Business)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>11 - 50 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Small Business)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>51-500 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Mid-sized Business)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>501 - 1000 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Large Business)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>1,001-5,000 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Enterprise Business)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>5,001-10,000 employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>(Large Enterprise)</p>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between  rounded-lg shd py-6 px-7  mb-5'>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <CustomRadio/>
                        <p className='font-semibold text-gray-700'>10,001+ employees</p>
                        </div>

                        <div>
                        <p className='text-xs font-medium text-gray-500'>
                            (Global Enterprise)</p>
                        </div>
                    </div>
                </div>
                
                </div>

                
            </div>
        
    </div>
  )
}
