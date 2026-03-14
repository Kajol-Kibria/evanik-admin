'use client'
import React, { useState } from 'react'
import RemovedTable from './RemovalTable'
import InboundTable from './InboundTable'
import InventoryRecordTable from './InventoryRecordTable'

export default function InventoryReconsilationMenu() {
  const [subpage, setSubpage] = useState('Inventory Record')
  return (
    <div>
      <div>
        <div className="flex justify-around   my-4 font-medium">
          <button
            className={`${
              subpage === 'Inventory Record'
                ? 'text-blue border-blue'
                : 'border-gray-300'
            } transition-all duration-300 py-2 w-1/3 border-b-2`}
            onClick={() => setSubpage('Inventory Record')}
          >
            Inventory Record
          </button>
          <button
            className={`${
              subpage === 'Inbound'
                ? 'text-blue border-blue'
                : 'border-gray-300'
            } transition-all duration-300 py-2 w-1/3 border-b-2`}
            onClick={() => setSubpage('Inbound')}
          >
            Inbound
          </button>
          <button
            className={`${
              subpage === 'Removal'
                ? 'text-blue border-blue'
                : 'border-gray-300'
            } transition-all duration-300 py-2 w-1/3 border-b-2`}
            onClick={() => setSubpage('Removal')}
          >
            Removal
          </button>
        </div>
      </div>
      <div>
        <div
          className={`${subpage === 'Inventory Record' ? 'block' : 'hidden'}`}
        >
          <InventoryRecordTable />
        </div>

        <div className={`${subpage === 'Inbound' ? 'block' : 'hidden'}`}>
          <InboundTable />
        </div>

        <div className={`${subpage === 'Removal' ? 'block' : 'hidden'}`}>
          <RemovedTable />
        </div>
      </div>
    </div>
  )
}
