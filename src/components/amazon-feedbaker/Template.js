import Image from 'next/image'
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
export default function Template() {

  return (
    <div className=''>
        <div className='sm:flex justify-between my-5'>
            <Menu>
                          <MenuButton className='flex items-center gap-3 btn'>
                                     Select Dynamic Fields
                                     <MdArrowDropDown size={17}/>
                                       </MenuButton>
                                       <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
                                       <p className='pr-12 pl-4 py-1 text-sm text-left text-blue font-semibold'>Order information</p>
                                               <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' >
                                               <span  className=" hover:bg-gray-500/5 cursor-pointer flex gap-1 data-[focus]:bg-blue-100" >
                                               <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                                    Amazone order id
                                               </span>
                                               </MenuItem>
                                               <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' >
                                               <span  className=" hover:bg-gray-500/5 cursor-pointer flex gap-1 data-[focus]:bg-blue-100" >
                                               <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                                    Product Name
                                               </span>
                                               </MenuItem>
                                               <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' >
                                               <span  className=" hover:bg-gray-500/5 cursor-pointer flex gap-1 data-[focus]:bg-blue-100" >
                                               <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                                    SKU Name
                                               </span>
                                               </MenuItem>
                                               <p className='pr-12 pl-4 py-1 text-sm text-left text-blue font-semibold mt-2'>Order information</p>
                                               <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' >
                                               <span  className=" hover:bg-gray-500/5 cursor-pointer flex gap-1 data-[focus]:bg-blue-100" >
                                               <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                                    First Name
                                               </span>
                                               </MenuItem>
                                               <MenuItem  className='pr-12 pl-4 py-1 text-sm text-left' >
                                               <span  className=" hover:bg-gray-500/5 cursor-pointer flex gap-1 data-[focus]:bg-blue-100" >
                                               <Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/>
                                                    Full Name
                                               </span>
                                               </MenuItem>
                                              </MenuItems>
                                  </Menu>
            <div className='flex items-center gap-4 my-4 sm:my-0'>
                <button className='buttonBlue'>Template Guidelines</button>
                <button className='buttonBlue w-32'>Preview</button>
            </div>
        </div>
        <Image src='\images\Text Editor Controls.svg' alt='' width={1600} height={1600}/>
        <div className='border p-8 sm:pr-40'>
            <p>&apos;&apos;Hi [buyer],</p>
            <p>We deeply apologise for the shipping delay. [Explanation] We, unfortunately had a backorder and products were out of stock. [Solution] We&apos;re working to improve our inventory management to prevent issues like this from happening again.</p>
            <p>In the meantime, we understand how disappointing it was [tie it into their reasoning] for this to arrive too late for your mother&apos;s birthday. Please contact us and we&apos;d be happy to work on either helping you return the product or offering you 20% off on your next order.</p>
            <p>[Your company]&apos;&apos;</p>
        </div>
    </div>
  )
}
