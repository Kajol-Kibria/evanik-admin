'use client'
import { DashDonut } from './DashDonut'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { CustomDateRangePicker } from './CustomDateRangePicker'
import GeoMapIndia from './GeoMapIndia'
export default function DashboardMap() {
      const [value2, setValue2] = useState('This Week')

  return (
    <div>
        <div className='h-full bg-white rounded-xl shd p-6'>
                  <div className='2xl:flex items-center justify-between '>
                        <p className='text-blue font-semibold text-lg'>State Wise Sale</p>
                        <div>
                            <CustomDateRangePicker/>
                        </div>
                    

                    </div>
                    <div>
                      <div className={`${value2 ==='This Week'?'block':"hidden"}`}>
                        {/* it gives error!!
                        Error: Cannot read properties of undefined (reading 'ReactCurrentDispatcher') */}
                        {/* <GeoMapIndia/> */}
                      </div>
                      <div className={`${value2 ==='This Month'?'block':"hidden"}`}>chart for Month</div>
                      <div className={`${value2 ==='This Quarter'?'block':"hidden"}`}>chart for Quarter</div>
                      <div className={`${value2 ==='This Year'?'block':"hidden"}`}>chart for Year</div>
                      <div className={`${value2 ==='Yesterday'?'block':"hidden"}`}>chart for Yesterday</div>
                      <div className={`${value2 ==='Previous Week'?'block':"hidden"}`}>chart for Previous Week</div>
                      <div className={`${value2 ==='Previous Month'?'block':"hidden"}`}>chart for Previous Month</div>
                      <div className={`${value2 ==='Previous Year'?'block':"hidden"}`}>chart for Previous Year</div>
                    </div>
                  </div>
    </div>
  )
}
