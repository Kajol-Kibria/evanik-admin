'use client'
import React, { useState } from 'react'

import { IoIosSearch } from 'react-icons/io';
import DropButton from '../common/DropButton';
import Image from '../../../node_modules/next/image';
import IntegrationsList from './IntegrationsList';
export default function ERP(props) {
  const [value1, setValue1] = useState('All')
  return (
    <div>
        <div className={`${props.connect?'hidden':'block'}`}>
            <div className='sm:flex items-center justify-between'>
            <p className='font-semibold text-blue my-4'>Connect ERP and Accounting Software</p>
            <div className='flex items-center gap-4'>
            <div className='flex items-center mr-4'>
              <input className='pl-5 pr-14  w-40  border-2 border-blue/20 outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-xl' placeholder='search'/>
              <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
            </div>
            <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday', 'Previous Week', 'Previous Month', 'Previous Year']}/>
            </div>
            </div>
        </div>
            <IntegrationsList dataArray={props.dataArray} connect={props.connect} setConnect={props.setConnect}/>
        </div>
  )
}
