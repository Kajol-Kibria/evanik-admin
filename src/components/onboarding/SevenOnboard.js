import React from 'react'
import RadioCard from './RadioCard'
import Image from 'next/image'
import CustomTooltip from '../common/Tooltip'

export default function SevenOnboard() {
  return (
    <div>
        <div className='sm:w-[1052px] mx-auto mb-40 sm:mb-0 '>
            <div className='text-center'>
                    <p className='text-4xl font-bold py-5 text-gray-800'>Welcome Mayank</p>
                    <p className='font-medium text-gray-700'>Let&apos;s start with a few quick questions to help personalize your eVanik experience</p>
                </div>
                <div className='flex items-center justify-between sm:pt-14 pt-4'>
                <p className=' font-bold  text-lg text-gray-600'>What is the company size?</p>
                <p className='font-medium text-sm text-gray-600'>2/5</p>
                </div>
                <div className='h-[calc(100vh-360px)] sm:h-auto overflow-auto px-2'>

                
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-5'>

                <RadioCard txt={'Online Marketplaces'}/>
                <RadioCard txt={'Offline Stores'}/>
                <RadioCard txt={'Own Website'}/>
                </div>

               
                <p className=' font-bold pt-5 pb-3  text-lg text-gray-600'>What is the company size?</p>
                
                
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-5 '>

                <div className='rounded-lg shd py-6 px-7  '>           
                        <div className='flex items-center gap-3'>
                        <input
            id="1"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label >
                            <Image src='/images/logo-sm-amazon.png' width={101} height={26} alt=''/>
                        </label>
                        </div>
                    
                </div>
                <div className='rounded-lg shd py-6 px-7  '>  
                        <div className='flex items-center gap-3'>
                        <input
            id="2"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label >
                            <Image src='/images/logo-sm-fk.png' width={101} height={26} alt=''/>
                        </label>
                        </div>
                   
                </div>
                <div className='rounded-lg shd py-6 px-7  '>
                        <div className='flex items-center gap-3'>
                        <input
            id="v3"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label >
                            <Image src='/images/logo-sm-myntra.png' width={89} height={26} alt=''/>
                        </label>
                        </div>
                    
                </div>
                <div className='rounded-lg shd py-6 px-7  '>
                        <div className='flex items-center gap-3'>
                        <input
            id="4"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label >
                            <Image src='/images/logo-sm-sd.png' width={117} height={26} alt=''/>
                        </label>
                        </div>
                    
                </div>
                <div className='rounded-lg shd py-6 px-7  '>
                        <div className='flex items-center gap-3'>
                        <input
            id="5"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label >
                            <Image src='/images/logo-sm-meesho.png' width={130} height={26} alt=''/>
                        </label>
                        </div>
                    
                </div>
                <div className='rounded-lg shd py-6 px-7  '>
                        <div className='flex items-center gap-3'>
                        <input
            id="6"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <label>
                            <Image src='/images/logo-sm-fk.png' width={101} height={26} alt=''/>
                        </label>
                        </div>
                    
                </div>
                </div>
                <div className="relative z-0 w-full mt-7 group">
                   <input type="password" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                             <label className="flex gap-2 items-center font-medium text-gray-600 peer-focus:font-medium absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                             <CustomTooltip txt={'Tooltip'}>
                             <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                             </CustomTooltip>
                                   If any other type here
                            </label>
                 </div>

                

                 </div>
            </div>
    </div>
  )
}
