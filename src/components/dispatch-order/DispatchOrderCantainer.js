import React from 'react'
import DispatchTablePegi from './DispatchTablePegi'
import DispatchTop from './DispatchTop'
export default function DispatchOrderCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DispatchTop/>
      <DispatchTablePegi/>
    </div>
  )
}
