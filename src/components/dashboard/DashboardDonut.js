'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { DashDonut } from './DashDonut'
import { CustomDateRangePicker } from './CustomDateRangePicker'

export default function DashboardDonut() {
      const [value3, setValue3] = useState('This Week')
  return (
    <div>
        <div className=' bg-white rounded-xl shd p-6  h-full'>
                          <div className='2xl:flex items-center justify-between'>
                                <p className='text-blue font-semibold text-lg'>Payment Status</p>
                                    <CustomDateRangePicker/>                          
                            </div>
                            <div className=' h-full grid items-center'>
                              <div className={`${value3 ==='This Week'?'block':"hidden"}`}>
                                <DashDonut/>
                              </div>
                              <div className={`${value3 ==='This Month'?'block':"hidden"}`}>chart for Month</div>
                              <div className={`${value3 ==='This Quarter'?'block':"hidden"}`}>chart for Quarter</div>
                              <div className={`${value3 ==='This Year'?'block':"hidden"}`}>chart for Year</div>
                              <div className={`${value3 ==='Yesterday'?'block':"hidden"}`}>chart for Yesterday</div>
                              <div className={`${value3 ==='Previous Week'?'block':"hidden"}`}>chart for Previous Week</div>
                              <div className={`${value3 ==='Previous Month'?'block':"hidden"}`}>chart for Previous Month</div>
                              <div className={`${value3 ==='Previous Year'?'block':"hidden"}`}>chart for Previous Year</div>
                            </div>
                          </div>
    </div>
  )
}
