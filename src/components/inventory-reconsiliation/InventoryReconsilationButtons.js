'use client'
import React, { useState } from 'react'
import DropButton from '../common/DropButton'
import { IoIosSearch } from 'react-icons/io';
export default function InventoryReconsilationButtons() {
            const [value1, setValue1] = useState('Date Range')
        const [value2, setValue2] = useState('Channel')
        const [value3, setValue3] = useState('Store')
        const [value4, setValue4] = useState('Warehouse')
  return (
    <div>
        <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-4'>Inventory Reconciliation</p>  
    </div>
  )
}
