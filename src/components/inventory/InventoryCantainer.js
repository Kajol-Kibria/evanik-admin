import React from 'react'
import InventoryTablePegi from "./InventoryTablePegi";
import InventoryButtons from "./InventoryButtons";

export default function InventoryCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <InventoryButtons/>
      <InventoryTablePegi/>
    </div>
  )
}
