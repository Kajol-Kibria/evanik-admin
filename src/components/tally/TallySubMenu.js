'use client'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Sync from './Sync'
import Help from './Help'
import Mapping from './Mapping'
import AddRule from './AddRule'

export default function TallySubMenu() {
    const [subpage,setSubpage] = useState('Sync')
  return (
    <div>
         <div>              
                <div className='sm:flex gap-5 my-5'>
                                <div className='sm:w-[20%] my-4 sm:my-0 rounded-md shd h-[100%]'>


                                <div onClick={()=>setSubpage('Sync')} className={` ${subpage ==='Sync'?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b rounded-t-md px-6 py-5  cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center justify-between font-medium'>
                                      <p className='text-base'>Sync</p>
                                      <IoIosArrowForward/>
                                    </div>
                                    <p className={`${subpage ==='Sync'?'text-white':'text-gray-600 '} text-xs pt-4`}>Sync data to Tally Prime</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage('Add Rule')} className={`${subpage ==='Add Rule'?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b px-6 py-5  cursor-pointer`}>
                                  <div >
                                    <div className='flex items-center justify-between font-medium'>
                                      <p className='text-base'>Add Rule</p>
                                      <IoIosArrowForward/>
                                    </div>
                                    <p className={`${subpage ==='Add Rule'?'text-white':'text-gray-600 '} text-xs pt-4`}>Define Rules for Tally Sync</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage('Mapping')} className={` ${subpage ==='Mapping'?'bg-blue text-white  border-blue':'bg-white  text-gray-900'} border-b px-6 py-5  cursor-pointer`}>
                                  <div>
                                    <div className='flex items-center justify-between font-medium'>
                                      <p className='text-base'>Mapping</p>
                                      <IoIosArrowForward/>
                                    </div>
                                    <p className={`${subpage ==='Mapping'?'text-white':'text-gray-600 '} text-xs pt-4`}>Map unknown Ledgers, Vouchers & Products</p>
                                  </div>     
                                </div>
                                <div onClick={()=>setSubpage('Help')} className={`${subpage ==='Help'?'bg-blue text-white  border-blue':'bg-white  text-gray-900'}  rounded-b-md px-6 py-5  cursor-pointer`}>
                                  <div >
                                    <div className='flex items-center justify-between font-medium'>
                                      <p className='text-base'>Help</p>
                                      <IoIosArrowForward/>
                                    </div>
                                    <p className={`${subpage ==='Help'?'text-white':'text-gray-600 '} text-xs pt-4`}>Answers to all your Tally related questions</p>
                                  </div>     
                                </div>
                                
                                </div>
                                {/* show based on state */}
                                <div className='sm:w-[80%] '>
                                            <div  className={`${subpage === "Sync"? 'block':'hidden'}`}>
                                                <Sync/>    
                                            </div>
                                            <div className={`${subpage === "Add Rule"? 'block':'hidden'}`}>
                                                <AddRule/>
                                            </div>
                                            <div className={`${subpage === "Mapping"? 'block':'hidden'}`}>
                                                <Mapping/>
                                            </div>
                                            <div className={`${subpage === "Help"? 'block':'hidden'}`}>
                                                <Help/>
                                            </div>
                                </div>
                              </div>
            </div>
    </div>
  )
}
