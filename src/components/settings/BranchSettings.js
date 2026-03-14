'use client'
import React, { useState } from 'react'
import BranchSetup from './BranchSetup'
import WarehouseSetup from './WarehouseSetup'
import ChannelWarehouseSetup from './ChannelWarehouseSetup'
import ForChannelSetup from './ForChannelSetup'

export default function BranchSettings() {
  const [subpage, setSubpage] = useState(1)
  return (
     <div>
                          <div>
                              <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                                  <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Branch Setup</button>
                                  <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Warehouse Setup</button>
                                  <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Channel Warehouse Setup</button>
                                  <button className={`${subpage=== 4 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(4)}>For Channel Setup</button>
                              </div>
                          </div>
                          <div>
                                        <div  className={`${subpage === 1 ? 'block':'hidden'} relative`}>
                                        <BranchSetup/>
                                        </div>
                                        <div className={`${subpage === 2? 'block':'hidden'}`}>
                                        <WarehouseSetup/>
                                        </div>
                                        <div className={`${subpage === 3? 'block':'hidden'}`}>
                                        <ChannelWarehouseSetup/>
                                        </div>
                                        <div className={`${subpage === 4? 'block':'hidden'}`}>
                                        <ForChannelSetup/>
                                        </div>
                                        
                          </div>
                      </div>
  )
}
