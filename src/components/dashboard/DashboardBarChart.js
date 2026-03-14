'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { CustomChart } from './BarChart'
import { CustomDateRangePicker } from './CustomDateRangePicker'


export default function DashboardBarChart() {
        const [value1, setValue1] = useState('This Week')

  return (
    <div>
        <div className=' bg-white rounded-xl shd mt-6 mb-9 p-6'>
                            <div className='sm:flex items-center justify-between mb-4'>
                                <p className='text-blue font-semibold text-lg'>Daily Gross Sales</p>
                                  <div >
                                  <CustomDateRangePicker/>
                                  </div>
                            </div>
                            <div>
                              <div className={`${value1 ==='This Week'?'block':"hidden"}`}>
                                <CustomChart/>
                              </div>
                              <div className={`${value1 ==='This Month'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='This Quarter'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='This Year'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='Yesterday'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='Previous Week'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='Previous Month'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                              <div className={`${value1 ==='Previous Year'?'block':"hidden"}`}>
                              <CustomChart/>
                              </div>
                            </div>
                        </div>
    </div>
  )
}
