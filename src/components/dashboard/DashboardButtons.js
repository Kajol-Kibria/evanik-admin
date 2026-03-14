import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function DashboardButtons() {
  return (
    <div>
        <div className=''>
                <div className='scrollmenu flex items-center gap-4'>
                <button className='btn'>Daily Gross Sales</button>
                <button className='btn-active'>State Wise Sale</button>
                <button className='btn'>Payment Status</button>
                <button className='btn-active '>Top Selling Products</button>
                <button className='btn '>Top Selling Platform</button>
                <button className='btn '>Top Selling Category</button>
                <button className='btn-active'>Other</button>
                <button className='btn'><IoIosArrowDown/></button>
                </div>
                </div>
    </div>
  )
}
