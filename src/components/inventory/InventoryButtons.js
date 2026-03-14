'use client'
import React, { useState } from 'react'
import CustomRadio from '../common/CustomRadio'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import IconButton from '../common/IconButton'
import DownloadApp from '../common/DownloadApp'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MdArrowDropDown } from 'react-icons/md'
export default function InventoryButtons() {
        const [popup, setPopup] = useState(true);
        const [pageSize, setPageSize] = useState('Select page size');
        const [status, setStatus] = useState('Select status');
  return (
    <div>
      <DownloadApp/>
        {/* <Link className='my-4 w-full text-xs text-gray-700 flex items-center gap-1 mt-4' href='/settings'><IoIosArrowBack size={15}/>Back to main settings</Link> */}
      <div className='sm:flex items-center justify-between'>
      <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
      Inventory
      </p>
      {/* <div className=' sm:flex items-center gap-4 '>
        <div className=' flex items-center gap-4 '>
          <button onClick={()=>setPopup(!popup)} className='buttonBlue sm:w-32'>Bulk Edit</button>
          <button className='buttonBlue sm:w-32'>Products Barcode</button>
        </div>
        <div className=' flex items-center gap-4 my-4 sm:my-0 '>
          <button className='blueButton'>Combo Configuration</button>
          <IconButton svg={<BsThreeDots/>}/>
        </div>
      </div> */}
      <div className='flex flex-wrap items-center gap-4'>
        <IconButton svg={<Image src='/images/icon-plus.svg' alt='add' width={14} height={14}/>}/>
        <IconButton svg={<Image src='/images/icon-edit-pencil.svg' alt='edit' width={14} height={14}/>}/>
        <IconButton svg={<Image src='/images/icon-upload.svg' alt='upload' width={14} height={14}/>}/>
        <IconButton svg={<Image src='/images/icon-download.svg' alt='download' width={14} height={14}/>}/>
        <button className='blueButton'>Inventory Report</button>
      </div>
      </div>
      <div className='sm:flex items-center my-3 justify-between'>
      <div className='flex items-center gap-4'>
        <Menu>
          <MenuButton className='flex items-center gap-1 rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>
            {pageSize}
            <MdArrowDropDown size={17}/>
          </MenuButton>
          <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
            <MenuItem onClick={()=>{setPageSize('This Week')}} className='pr-12 pl-4 py-1 text-sm z-10'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">This Week</p></MenuItem>
            <MenuItem onClick={()=>{setPageSize('This Month')}} className='pr-12 pl-4 py-1 text-sm'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Month</p></MenuItem>
            <MenuItem onClick={()=>{setPageSize('This Quarter')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Quarter</p></MenuItem>
            <MenuItem onClick={()=>{setPageSize('This Year')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Year</p></MenuItem>
          </MenuItems>
        </Menu>
        <Menu>
          <MenuButton className='flex items-center gap-1 rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-4 h-[42px] font-semibold text-[13px]'>
            {status}
            <MdArrowDropDown size={17}/>
          </MenuButton>
          <MenuItems anchor="bottom" className='mt-2 py-2 rounded-lg bg-white border border-blue/40'>
            <MenuItem onClick={()=>{setStatus('This Week')}} className='pr-12 pl-4 py-1 text-sm z-10'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100">This Week</p></MenuItem>
            <MenuItem onClick={()=>{setStatus('This Month')}} className='pr-12 pl-4 py-1 text-sm'><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Month</p></MenuItem>
            <MenuItem onClick={()=>{setStatus('This Quarter')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Quarter</p></MenuItem>
            <MenuItem onClick={()=>{setStatus('This Year')}} className='pr-12 pl-4 py-1 text-sm text-left' ><p className="hover:bg-gray-500/5 cursor-pointer block data-[focus]:bg-blue-100" >This Year</p></MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div className='sm:flex items-center gap-5 text-sm'>
         <div className='relative'>
           <input
           className="mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10	 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 "
           placeholder="Search"
           />
           <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
         </div>
         <div className='flex items-center gap-5 text-sm my-4 sm:my-0'>
          <button className='cursor-pointer'><CustomRadio id={'All'} txt={'All'}/></button>
          <button className='cursor-pointer'><CustomRadio id={'In Stock'} txt={'In Stock'}/></button>
          <button className='cursor-pointer'><CustomRadio id={'Out of Stock'} txt={'Out of Stock'}/></button>
          <button className='cursor-pointer'><CustomRadio id={'Low Stock Alert'} txt={'Low Stock Alert'}/></button>
         </div>
      </div>
      </div>
    </div>
  )
}
