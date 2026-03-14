import React from 'react'

export default function OrderDetailsDataGrid() {
  return (
    <div>
        <div>
        <div className='grid sm:grid-cols-5 grid-cols-2 text-gray-500'>
          <div className='flex justify-between items-center p-2 border-r border-b  text-sm font-semibold'><p>Gross Sale</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Returns</p><p>0</p></div>
          <div className='flex justify-between items-center p-2 border-r border-b  text-sm font-semibold'><p>Net Sales</p><p>0</p></div>
          <div className='flex justify-between items-center p-2 border-r border-b  text-sm font-semibold'><p>Cost of Goods Sold</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Gross Margin</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Channel Fee</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Other Charges</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Net Margin</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Reimbursement</p><p>0</p></div>
          <div className='flex justify-between items-center  p-2 border-r border-b  text-sm font-semibold'><p>Order Settlement</p><p>0</p></div>
        </div>
      </div>
    </div>
  )
}
