'use client'
import React, { useState } from 'react'
import { FaRegFolderClosed } from "react-icons/fa6";
import DownloadClaimsList from './DownloadClaimsList';

export default function DownloadClaimsSubMenu() {
      const [subpage,setSubpage] = useState(1)
  return (
    <div>
            <div className='sm:flex gap-8'>
                <div className='sm:w-[28%] my-4 sm:my-0'>
                    <p className='text-blue font-semibold my-2'>Report Category</p>
                    <div className='rounded-md shd '>
                    <div onClick={()=>setSubpage(1)} className={` ${subpage ===1?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b p-6 rounded-t-md cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 1? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>Unpaid Orders</p>
                            </div>
                            <p className={`${subpage ===1?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                    <div onClick={()=>setSubpage(2)} className={` ${subpage ===2?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b p-6 cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 2? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>Returns Not Received</p>
                            </div>
                            <p className={`${subpage ===2?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                    <div onClick={()=>setSubpage(3)} className={` ${subpage ===3?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b p-6 cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 3? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>Unsellable Returns</p>
                            </div>
                            <p className={`${subpage ===3?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                    <div onClick={()=>setSubpage(4)} className={` ${subpage ===4?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b p-6 cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 4? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>Courier Returns Charged</p>
                            </div>
                            <p className={`${subpage ===4?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                    <div onClick={()=>setSubpage(5)} className={` ${subpage ===5?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b p-6 cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 5? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>SPF Unclaimed</p>
                            </div>
                            <p className={`${subpage ===5?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                    <div onClick={()=>setSubpage(6)} className={` ${subpage ===6?'bg-blue text-white border-blue':'bg-white text-gray-900'} border-b rounded-b-md p-6 cursor-pointer`}>
                        <div>
                            <div className='flex items-center gap-3 font-medium'>
                                <FaRegFolderClosed className={`${subpage === 6? 'text-white':'text-blue'}`} size={22}/>
                                <p className='text-base'>Shipping Reconciliation</p>
                            </div>
                            <p className={`${subpage ===6?'text-white':'text-gray-600 '} text-xs pt-4 font-medium hidden sm:block`}>Every section filled, every detail</p>
                        </div>     
                    </div>
                   </div>
                </div>
                {/* show based on state */}
                <div className='sm:w-[70%]'>
                <div  className={`${subpage === 1? 'block':'hidden'}`}>
                    <DownloadClaimsList/>        
                </div>
                <div className={`${subpage === 2? 'block':'hidden'}`}>
                    <DownloadClaimsList/>
                </div>
                <div className={`${subpage === 3? 'block':'hidden'}`}>
                    <DownloadClaimsList/>
                </div>
                <div className={`${subpage === 4? 'block':'hidden'}`}>
                    <DownloadClaimsList/>
                </div>
                <div className={`${subpage === 5? 'block':'hidden'}`}>
                    <DownloadClaimsList/>
                </div>
                <div className={`${subpage === 6? 'block':'hidden'}`}>
                    <DownloadClaimsList/>
                </div>
                </div>
              </div>
    </div>
  )
}
