'use client'
import React, { useState } from 'react'
import CustomRadio from '../common/CustomRadio'
import DropButton from '../common/DropButton'
import Link from 'next/link'
import { BsThreeDots } from 'react-icons/bs'
import { GoInfo } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'
import IconButton from '../common/IconButton'
import { IoIosSearch } from 'react-icons/io';

export default function ChannelListingButtons() {
    const [value1, setValue1] = useState("Channel");
    const [value2, setValue2] = useState("Store Name");
  return (
    <div>
    <div>
        <div className='sm:flex items-center justify-between'>
        <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
        Channel Listing
        </p>
        <div className=' sm:flex items-center gap-4 '>
        <div className=' flex items-center gap-4 my-4 sm:my-0 '>
            <button className='buttonBlue w-32'>Download</button>
            <button className='blueButton w-32'>Upload</button>
            <IconButton svg={<BsThreeDots/>}/>
        </div>
        </div>
        </div>
        <div className='sm:flex items-center my-3 justify-between'>
        <div className='flex items-center gap-4'>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year']}/>        
            <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year']}/>        
        </div>
        <div className='sm:flex items-center gap-5 text-sm'>
            <div className='flex items-center mt-4 sm:mt-0 mr-5'>
                <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='search'/>
                <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
             </div>
            <div className='flex sm:flex-col sm:gap-2 gap-5 text-sm my-4 sm:my-0'>
                <p className='text-xs text-gray-600'>Mapping</p>
                <div  className='flex items-center gap-5'>
                    <button className='cursor-pointer'><CustomRadio id={'All'} txt={'All'}/></button>
                    <button className='cursor-pointer'><CustomRadio id={'Mapped'} txt={'Mapped'}/></button>
                    <button className='cursor-pointer'><CustomRadio id={'Unmapped'} txt={'Unmapped'}/></button>
                </div>
             </div>
            <div className='flex sm:flex-col sm:gap-2 gap-5 text-sm my-4 sm:my-0'>
                <p className='text-xs text-gray-600'>Type
                </p>
                <div  className='flex items-center gap-5'>
                    <button className='cursor-pointer'><CustomRadio id={'All'} txt={'All'}/></button>
                    <button className='cursor-pointer'><CustomRadio id={'Individual'} txt={'Individual'}/></button>
                    <button className='cursor-pointer'><CustomRadio id={'Combo'} txt={'Combo'}/></button>
                </div>
             </div>
        </div>
        </div>
    </div>
    </div>
  )
}
