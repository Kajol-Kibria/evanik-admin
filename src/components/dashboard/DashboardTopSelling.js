'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { TopSellingChart } from './TopSellingChart'
import { CustomDateRangePicker } from './CustomDateRangePicker'

export default function DashboardTopSelling() {
  const [value4, setValue4] = useState('This Week')

  return (
    <div>
        <div className=' bg-white rounded-xl shd p-6 h-full'>
                  <div className='2xl:flex items-center justify-between'>
                        <p className='text-blue font-semibold text-lg'>Top Selling Products</p>
                                <CustomDateRangePicker/>
                    </div>
                    <div>
                      <div className={`${value4 ==='This Week'?'block':"hidden"}`}>
                        <TopSellingChart/>
                      </div>
                      <div className={`${value4 ==='This Month'?'block':"hidden"}`}>chart for Month</div>
                      <div className={`${value4 ==='This Quarter'?'block':"hidden"}`}>chart for Quarter</div>
                      <div className={`${value4 ==='This Year'?'block':"hidden"}`}>chart for Year</div>
                      <div className={`${value4 ==='Yesterday'?'block':"hidden"}`}>chart for Yesterday</div>
                      <div className={`${value4 ==='Previous Week'?'block':"hidden"}`}>chart for Previous Week</div>
                      <div className={`${value4 ==='Previous Month'?'block':"hidden"}`}>chart for Previous Month</div>
                      <div className={`${value4 ==='Previous Year'?'block':"hidden"}`}>chart for Previous Year</div>
                    </div>
                  </div>
    </div>
  )
}
