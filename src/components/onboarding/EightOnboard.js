import Image from 'next/image'
import React from 'react'
import RadioCard from './RadioCard'


export default function EightOnboard() {
  return (
    <div>
        <div className='sm:w-[1052px] mx-auto'>
                    <div className='text-center'>
                            <p className='text-4xl font-bold py-5 text-gray-800'>Welcome Mayank</p>
                            <p className='font-medium text-gray-700'>Let&apos;s start with a few quick questions to help personalize your eVanik experience</p>
                        </div>
                        <div className='flex items-center justify-between sm:pt-14 pt-4'>
                        <p className=' font-bold  text-lg text-gray-600'>What is the total number of orders per month??</p>
                        <p className='font-medium text-sm text-gray-600'>3/5</p>
                        </div>
                        <div className='h-[calc(100vh-360px)] sm:h-auto overflow-auto px-2 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 pb-9'>
        
                        <RadioCard txt={'0-100 orders'}/>
                        <RadioCard txt={'101-500 orders'}/>
                        <RadioCard txt={'501-1,000 orders'}/>
                        <RadioCard txt={'1,001-5,000 orders'}/>
                        <RadioCard txt={'5,001-10,000 orders'}/>
                        <RadioCard txt={'10,001-50,000 orders'}/>
                        <RadioCard txt={'Over 50,000 orders'}/>
                        </div>
        
                        
        
        
                        
        
                        
                    </div>
    </div>
  )
}
