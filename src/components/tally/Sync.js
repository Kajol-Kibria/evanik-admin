'use client'
import React, { useState } from 'react'
import ChannelMonthlyTaxReports from './ChannelMonthlyTaxReports'
import DailyOrdersReturns from './DailyOrdersReturns'
import StockTransfarNote from './StockTransfarNote'

export default function Sync() {
     const [subpage, setSubpage] = useState('Channel')
  return (
    <div>
        <div>
            <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                <button className={`${subpage==='Channel'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage("Channel")}>Channel Monthly Tax Reports</button>
                <button className={`${subpage==='Daily'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage("Daily")}>Daily Orders & Returns</button>
                <button className={`${subpage==='Stock'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage("Stock")}>Stock Transfar Note</button>
            </div>
        </div>
        <div>
             <div  className={`${subpage === "Channel"? 'block':'hidden'}`}>
                       <ChannelMonthlyTaxReports/>
                      </div>
              
                      <div className={`${subpage === "Daily"? 'block':'hidden'}`}>
                      <DailyOrdersReturns/>
                      </div>
            
                      
                      <div className={`${subpage === "Stock"? 'block':'hidden'}`}>
                      <StockTransfarNote/>
                      </div>
        </div>
    </div>
  )
}
