'use client'
import React, { useState } from 'react'
import PlanSummary from './PlanSummary';

import Plans from './Plans';

export default function PlansChangePlanSubMenu() {
    const [subpage, setSubpage] = useState(1);
  return (
    <div>
        <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-7'>Plans - Change Plan</p>
            <button className='buttonBlue'>Add Funds to eVanik Wallet</button>
        </div>
        <div className='2xl:flex gap-5'>
          <div className='2xl:w-[80%]'>
              <div className='flex font-medium text-[15px] text-gray-700 mb-5'>
                  <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Quarterly</button>
                  <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Half Yearly</button>
                  <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Annual</button>
              </div>
              <div>
                <div className={`${subpage === 1 ? 'block':'hidden'} `}>
                  <Plans/>
                </div>
                <div className={`${subpage === 2 ? 'block':'hidden'} `}>
                  <Plans/>
                </div>
                <div className={`${subpage === 3 ? 'block':'hidden'} `}>
                  <Plans/>
                </div>
              </div>
          </div>
          <div className='min-w-[300px]'>
            <PlanSummary/>
          </div>
        </div>
    </div>
  )
}
