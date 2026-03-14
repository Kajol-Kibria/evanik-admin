import React from 'react'
import SalesManagementButtons from './SalesManagementButtons'
import SalesManagementSubMenu from './SalesManagementSubMenu'

export default function SalesManagmentCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <SalesManagementButtons/>
    <SalesManagementSubMenu/>
    </div>
  )
}
