'use client'
import React, { useState } from 'react'
import GeneralTickets from './GeneralTickets'
import OpenTickets from './OpenTickets'
export default function HelpSupportTicketCantainer() {
     const [subpage,setSubpage] = useState(1)
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Support Tickets</p>
        <div>
        <div className='flex scrollmenu font-medium text-[15px] text-gray-700 my-5 w-[420px]'>
            <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>General Tickets</button>
            <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Open Tickets</button>
        </div>
        <div>
            <div  className={`${subpage === 1 ? 'block':'hidden'} `}>
              <GeneralTickets/>
            </div>
            <div  className={`${subpage === 2 ? 'block':'hidden'} `}>
              <OpenTickets/>
            </div>
        </div>
        </div>
    </div>
  )
}
