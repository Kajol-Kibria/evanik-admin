'use client'
import React, { useState } from 'react'
import GSTR1ReturnSummary from './GSTR1ReturnSummary';
import GSTR1Details from './GSTR1Details';
export default function GSTReturnSummarySubMenu() {
    
      const [subpage, setSubpage] = useState(1);
  return (
    <div>
        <div className='flex scrollmenu font-medium text-[15px] text-gray-700 my-5 w-[600px]'>
            <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>GSTR1 Return Summary</button>
            <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>GSTR1 Details</button>
        </div>
        <div>
            <div className={`${subpage === 1 ? 'block':'hidden'} `}>
                <GSTR1ReturnSummary/>
            </div>
            <div className={`${subpage === 2 ? 'block':'hidden'} `}>
                <GSTR1Details/>
            </div>
        </div>
    </div>
  )
}
