'use client'
import React, { useState } from 'react'
import OrderManagementtop from '../manage_order/OrderManagementtop'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function PriceTag() {
  const [skuCode, setSkuCode] = useState('')
  const [quantity, setQuantity] = useState('')
  const [mrp, setMrp] = useState('')

  const handlePrint = () => {
    // Print functionality will go here
    console.log('Printing price tag with:', { skuCode, quantity, mrp })
  }

  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
      <OrderManagementtop />
      <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-5'>Price Tag</p>
      
      <div className="grid gap-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="skuCode" className="block text-sm font-medium text-gray-700 mb-2">SkuCode</label>
            <Select value={skuCode} onValueChange={setSkuCode}>
              <SelectTrigger className="w-full border border-gray-300 rounded-md outline-none">
                <SelectValue placeholder="select skucode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sku001">SKU001</SelectItem>
                <SelectItem value="sku002">SKU002</SelectItem>
                <SelectItem value="sku003">SKU003</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-[5px] border border-gray-300 rounded-md outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="mrp" className="block text-sm font-medium text-gray-700 mb-2">MRP</label>
            <input
              type="number"
              id="mrp"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              className="w-full p-[5px] border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            onClick={handlePrint}
            className="bg-blue text-white rounded-md"
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  )
}
