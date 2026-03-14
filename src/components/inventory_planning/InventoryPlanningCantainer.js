import React from 'react'
import InventoryPlanButtons from './InventoryPlanButtons'
import InventoryPlanningTable from './InventoryPlanningTable'
export default function InventoryPlanningCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <InventoryPlanButtons/>
      <InventoryPlanningTable/>
    </div>
  )
}
