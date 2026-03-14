import React from 'react'
import OrderManagementtop from "./OrderManagementtop";
import OrderProcessingSubMenu from "./OrderProcessingSubMenu";
import ProgressBar from "./ProgressBar";
export default function ManageOrderCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
    <ProgressBar/>
    <OrderManagementtop/>
    <OrderProcessingSubMenu/>
  </div>
  )
}
