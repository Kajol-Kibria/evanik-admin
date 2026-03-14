'use client'
import React, { useState } from 'react'
import { RiPencilLine } from "react-icons/ri";
import Shipping from './Shipping';
import Charges from './Charges';
export default function VarianceSubMenu() {
    const [subpage,setSubpage] = useState(1)
  return (
    <div>
        <div>
            <div className='sm:flex items-center justify-between'>
                <div className='flex scrollmenu font-medium text-[15px] text-gray-700 my-5 w-[320px]'>
                    <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Shipping</button>
                    <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Commission</button>
                    <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Charges</button>
                </div>
                <div className='flex items-start gap-6 my-4 sm:my-0'>
                    <button className='flex items-center gap-2 font-semibold text-[13px] text-gray-800'>
                        <p>WH Pincode</p>
                        <RiPencilLine size={19} className='text-blue'/>
                    </button>
                    <button className='flex items-center gap-2 font-semibold text-[13px] text-gray-800'>
                        <p>Tier</p>
                        <RiPencilLine size={19} className='text-blue'/>
                    </button>
                    <button className='flex items-center gap-2 font-semibold text-[13px] text-gray-800'>
                        <p>Weight</p>
                        <RiPencilLine size={19} className='text-blue'/>
                    </button>
                </div>
            </div>
                <div>
                    <div className={`${subpage === 1 ? 'block':'hidden'} `}>
                        <Shipping/>
                    </div>
                    <div className={`${subpage === 2 ? 'block':'hidden'} `}>
                        <Charges/>
                    </div>
                    <div className={`${subpage === 3 ? 'block':'hidden'} `}>
                        <Charges/>
                    </div>
                </div>
        </div>
    </div>
  )
}
