import React from 'react'
import InventoryReconsilationButtons from './InventoryReconsilationButtons'
import InventoryReconsilationMenu from './InventoryReconsilationMenu'
import ReconciliationTopBanner from './ReconciliationTopBanner'
export default function InventoryReconsiliationCantainer() {
  return (
    <div className="sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 ">
      <ReconciliationTopBanner />
      <InventoryReconsilationButtons />
      <InventoryReconsilationMenu />
    </div>
  )
}
