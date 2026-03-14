'use client'
import React, { useState } from 'react'
import SKUList from './SKUList'
import RepricerList from './RepricerList'

export default function RepricerSubMenu() {
    const [subpage, setSubpage] = useState('SKU List')
  return (
    <div>
        <div className='sm:flex items-center justify-between'>
                  <div className='flex  justify-around scrollmenu my-4 font-medium'>
                    <button className={`${subpage === 'SKU List' ? "text-blue border-blue" : "border-gray-300"} px-2 w-32 mx-auto transition-all duration-300 py-2 border-b-2`} onClick={() => setSubpage("SKU List")}>SKU List</button>
                    <button className={`${subpage === 'Repricer List' ? "text-blue border-blue" : "border-gray-300"} px-2 w-32 mx-auto transition-all duration-300 py-2 border-b-2`} onClick={() => setSubpage("Repricer List")}>Repricer List</button>
                    </div>
                  
                </div>
                <div>
                          <div className={`${subpage === "SKU List" ? 'block' : 'hidden'}`}>
                          <SKUList />
                          </div>
                          <div className={`${subpage === "Repricer List" ? 'block' : 'hidden'}`}>
                            <RepricerList />
                          </div>
                        </div>
                </div>
  )
}
