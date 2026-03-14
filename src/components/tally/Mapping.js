'use client'
import React, { useState } from 'react'
import MappingTable from './MappingTable'
import { getdata, getLength } from '../../../alldatafiles/MappingLedgersdata';
export default function Mapping() {
  
       const [subpage, setSubpage] = useState('Unknown Ledgers')

            
  return (
    <div>
            <div>
                <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                    <button className={`${subpage==='Unknown Ledgers'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage("Unknown Ledgers")}>Unknown Ledgers</button>
                    <button className={`${subpage==='Unknown Voucher Types'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage("Unknown Voucher Types")}>Unknown Voucher Types</button>
                    <button className={`${subpage==='Unknown Products'?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage("Unknown Products")}>Unknown Products</button>
                </div>
            </div>
            <div>
                 <div  className={`${subpage === "Unknown Ledgers"? 'block':'hidden'}`}>
                           <MappingTable getdata={getdata} getLength={getLength}/>
                          </div>
                  
                          <div className={`${subpage === "Unknown Voucher Types"? 'block':'hidden'}`}>
                          <MappingTable getdata={getdata} getLength={getLength}/>
                          </div>
                          <div className={`${subpage === "Unknown Products"? 'block':'hidden'}`}>
                          <MappingTable getdata={getdata} getLength={getLength}/>
                          </div>
            </div>
        </div>
  )
}
