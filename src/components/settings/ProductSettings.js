'use client'
import React, { useState } from 'react'
import BulkUpload from './BulkUpload'
import AddManually from './AddManually'
import TallyUnmappedSKU from './TallyUnmappedSKU'

export default function ProductSettings() {
   const [subpage, setSubpage] = useState(1)
  return (
    <div>
          <div>
                    <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                                  <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Bulk Upload</button>
                                  <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Add Manually</button>
                                  <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Tally Unmapped SKU</button>
                    </div>
          </div>
          <div >
                              <div  className={`${subpage === 1 ? 'block':'hidden'} `}>
                              <BulkUpload/>
                              </div>
                              <div className={`${subpage === 2? 'block':'hidden'}`}>
                              <AddManually/>
                              </div>
                              <div className={`${subpage === 3? 'block':'hidden'}`}>
                              <TallyUnmappedSKU/>
                              </div>
                                        
          </div>
    </div>
  )
}
