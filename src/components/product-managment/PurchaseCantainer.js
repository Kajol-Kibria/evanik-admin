import React from 'react'
import ProductManagementButtons from './ProductManagementButtons'
import ProductManagmentSubMenu from './ProductManagmentSubMenu'
export default function PurchaseCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
          <ProductManagementButtons/>
          <ProductManagmentSubMenu/>
          
        </div>
  )
}
