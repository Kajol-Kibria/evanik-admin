import React from 'react'
import VendorManagmentTablePegi from './VendorManagmentTablePegi'
import VendorManagmentTop from './VendorManagmentTop'

export default function VendorManagmentCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
       <VendorManagmentTop/> 
       <VendorManagmentTablePegi/>
    </div>
  )
}
