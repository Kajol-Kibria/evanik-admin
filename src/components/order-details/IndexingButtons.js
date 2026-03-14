'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import IconButton from '../common/IconButton'
import DropButton from '../common/DropButton'
import Image from 'next/image'
import IndexingPopup from './IndexingPopup'
import MapColumnPopup from './MapColumnPopup'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import CustomSelect from '../common/CustomSelect'
import { IoIosSearch } from 'react-icons/io'
const options = [
  { label: 'This week', value: 'this_week' },
  { label: 'This Month', value: 'this_month' },
  { label: 'This Quarter', value: 'this_quarter' },
  { label: 'This Year', value: 'this_year' },
  { label: 'Yesterday', value: 'yesterday' },
]



export default function IndexingButtons() {

   
  return (
    <div>
        <p className="my-5 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
        Sales
        </p>
                
                <div className='2xl:flex items-center justify-between my-3'>
                    <div className='sm:flex flex-wrap items-start gap-3'>
                    <div className='flex flex-wrap items-start gap-3'>
                      <CustomDateRangePicker/>
                      <CustomSelect options={options}/>
                      <CustomSelect options={options}/>
                    </div>
                    <div className='relative'>
                    <input
                    className="mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10	 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 "
                    placeholder="Order Id , Sku Code , Order item id"
                    />
                    <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
                    </div>
                    </div>
                    <div className='flex items-center gap-3 my-4 2xl:my-0'>
                                   <IconButton svg={
                                    <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20244 10.4268L3.94585 11.4359L10.4999 16.7002L17.0539 11.4367L15.7973 10.4276L11.3888 13.968V4.74537H9.61085V13.9674L5.20244 10.4268ZM18.4997 4.03139V2.1281L2.50011 2.12733V4.03062L0.722168 4.03139V0.700195H20.2777V4.03139H18.4997Z" fill="#68698A"></path>
                                    </svg>} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                                   <IconButton svg={
                                    <svg width="18" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20244 6.97361L3.94585 5.96445L10.4999 0.700195L17.0539 5.96367L15.7973 6.97282L11.3888 3.43236V12.655H9.61085V3.43295L5.20244 6.97361ZM18.4997 13.369V15.2723L2.50011 15.2731V13.3698L0.722168 13.369V16.7002H20.2777V13.369H18.4997Z" fill="#68698A"></path>
                                    </svg>} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>              
                    </div>
                </div>
                <div className='sm:flex items-center justify-between '>
            <div className='sm:flex items-center gap-5 text-sm'>
                {/* <button className='buttonBlue w-24'>Bulk Action</button> */}
                
                <form className='flex items-center gap-5 my-4 sm:my-0'>
                <div className='flex items-center gap-2'>
                <input type='checkbox'/>
                <label>Unshipped</label>
                </div>
                <div className='flex items-center gap-2'>
                <input type='checkbox'/>
                <label>B2B</label>
                </div>
                <div className='flex items-center gap-2'>
                <input type='checkbox'/>
                <label>Unpaid</label>
                </div><div className='flex items-center gap-2'>
                <input type='checkbox'/>
                <label>Cancelled</label>
                </div>
                </form>

            </div>
            <div className='flex items-center gap-2 my-4 sm:my-0'>
            
            <Dialog>
              <DialogTrigger>
              <div className='hover:border-blue cursor-pointer transition-all duration-300 w-9 h-9 flex items-center justify-center border rounded-full'>
              <Image src='/images/Map-Column-header.png' alt='' width={18} height={14}/>
              </div>
              </DialogTrigger>
              <DialogContent className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                  <DialogTitle>
                    <p className='text-blue text-2xl mb-3'>Map Column header</p>
                  </DialogTitle>
                  <MapColumnPopup/>
                  <span className='flex items-center justify-end gap-5 mt-8'>
                  <DialogTrigger><div className='buttonBlue w-28'>Cancel</div></DialogTrigger>
                  <DialogTrigger><div className='blueButton w-28'>Map</div></DialogTrigger>
                  </span>
                  
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <button className='buttonBlue'>Upload offline</button>
            <Dialog>
              <DialogTrigger>
              <div className='blueButton w-24'>Create</div>
              </DialogTrigger>
              <DialogContent className=' overflow-auto max-h-[90vh] mx-2'>
                <DialogHeader>
                  <DialogTitle>
                    <p className='text-blue text-2xl mb-3'>Create Manual Order</p>
                  </DialogTitle>
                  <IndexingPopup/>
                  <span className='flex items-center justify-end gap-5 mt-8'>
                  <DialogTrigger><div className='buttonBlue'>Creat Hold Order</div></DialogTrigger>
                  <DialogTrigger><div className='blueButton w-28'>Place Order</div></DialogTrigger>
                  </span>
                  
                </DialogHeader>
              </DialogContent>
            </Dialog>
            </div>
        </div>
    </div>
  )
}
