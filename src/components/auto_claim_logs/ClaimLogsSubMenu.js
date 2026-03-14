'use client'
import React, { useState } from 'react'
import AutoClaimLog from './AutoClaimLog'
import ClaimableReportsLog from './ClaimableReportsLog'
import AutoReturnClaimLog from './AutoReturnClaimLog';
export default function ClaimLogsSubMenu() {
  const [subpage, setSubpage] = useState(1);
  return (
    <div>
        <div>
                <div className='flex scrollmenu font-medium text-[15px] text-gray-700 my-5 w-[600px]'>
                    <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Auto Claim Log</button>
                    <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Claimable Reports Log</button>
                    <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Auto Return Claim Log</button>
                </div>
                <div>
                    <div className={`${subpage === 1 ? 'block':'hidden'} `}>
                      <AutoClaimLog/>
                    </div>
                    <div className={`${subpage === 2 ? 'block':'hidden'} `}>
                      <ClaimableReportsLog/>
                    </div>
                    <div className={`${subpage === 3 ? 'block':'hidden'} `}>
                      <AutoReturnClaimLog/>
                    </div>
                </div>
        </div>
    </div>
  )
}
