'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import New from './New'
import InProgress from './InProgress'
import Processed from './Processed'
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker'
import HandOver from './HandOver'
import Details from './Details'
import PackagingReport from './PackagingReport'
import { IoIosSearch } from 'react-icons/io';

export default function OrderProcessingSubMenu() {
    
            
            const [value1, setValue1] = useState('Data type')
            const [value2, setValue2] = useState('Channel')
            const [value3, setValue3] = useState('Store Name')
            const [value4, setValue4] = useState('Warehouse')
           
    
           const [subpage, setSubpage] = useState('New')
  return (
    <div>
         <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Order-Processing</p>
            <div className='my-3 sm:my-0 w-fit flex items-center gap-4 bg-[#f3f4fb]  pl-5 rounded-xl text-sm'>
                <div className=' font-medium text-gray-600 py-[10px]'>Credits Remaining: <span className='text-black'>2000</span></div>
                <button className='rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-6 py-[10px]'>Buy Credits</button>
            </div>
            </div>

            <div className=' my-5'>
                <div className='flex flex-wrap'>
                    <div onClick={()=>{setSubpage('New')}} className={`${subpage === 'New' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2  rounded-t-xl `}>New (2)</div>
                    <div onClick={()=>{setSubpage('Inprocess')}}  className={`${subpage === 'Inprocess' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2 rounded-t-xl`}>In Progress (2)</div>
                    <div onClick={()=>{setSubpage('Processed')}} className={`${subpage === 'Processed' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2 rounded-t-xl`}>Processed (2)</div>
                    <div onClick={()=>{setSubpage('Hand Over')}} className={`${subpage === 'Hand Over' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2 rounded-t-xl`}>Hand Over</div>
                    <div onClick={()=>{setSubpage('Details')}} className={`${subpage === 'Details' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2 rounded-t-xl`}>Details</div>
                    <div onClick={()=>{setSubpage('Packaging Report')}} className={`${subpage === 'Packaging Report' ? 'bg-blue text-white border-blue':''} border-b-2 cursor-pointer sm:w-52 w-28 text-center py-2 rounded-t-xl`}>Packaging Report</div>
                </div>
                <div className='sm:flex flex-wrap gap-2 items-baseline my-4'>
                 <div className='scrollmenu flex flex-wrap gap-2 items-center mt-4 sm:mt-1'>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <CustomDateRangePicker/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value4} setState={setValue4} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                   <div className='relative'>
                    <input className='mt-4 sm:mt-0 w-full sm:w-52 2xl:w-auto outline-none border-blue/30 border-2 pl-4 pr-10 rounded-xl py-[5px] placeholder:text-sm placeholder:font-thin placeholder:text-gray-700 ' placeholder='Search Order ID'/>
                    <button className='mt-2 sm:mt-0 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600'><IoIosSearch size={20}/></button>
                   </div>
                  
                </div>
            </div>
            <div  className={`${subpage === "New"? 'block':'hidden'}`}>
            <New/>
          </div>
  
          <div className={`${subpage === "Inprocess"? 'block':'hidden'}`}>
           <InProgress/>
          </div>

          
          <div className={`${subpage === "Processed"? 'block':'hidden'}`}>
          <Processed/>
          </div>
          <div className={`${subpage === "Hand Over"? 'block':'hidden'}`}>
          <HandOver/>
          </div>
          <div className={`${subpage === "Details"? 'block':'hidden'}`}>
          <Details/>
          </div>
          <div className={`${subpage === "Packaging Report"? 'block':'hidden'}`}>
          <PackagingReport/>
          </div>
    </div>
  )
}
