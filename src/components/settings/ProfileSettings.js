'use client'
import React, { useState } from 'react'
import CompanyDetails from './CompanyDetails'
import AddUsers from './AddUsers'
import SubUserPermission from './SubUserPermission'
import LogoSignature from './LogoSignature'
import BankDetails from './BankDetails'
import PasswordSettings from './PasswordSettings'
import TC from './TC'

export default function ProfileSettings() {
   const [subpage, setSubpage] = useState(1)
  return (
    <div>
      <div>
              <div>
                          <div>
                              <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                                  <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Company Details</button>
                                  <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Add Users</button>
                                  <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Sub User Permission</button>
                                  <button className={`${subpage=== 4 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(4)}>Logo & Signature</button>
                                  <button className={`${subpage=== 5 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(5)}>Bank Details</button>
                                  <button className={`${subpage=== 6 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(6)}>Password</button>
                                  <button className={`${subpage=== 7 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(7)}>T&C</button>
                              </div>
                          </div>
                          <div>
                               <div  className={`${subpage === 1 ? 'block':'hidden'} relative`}>
                                        <CompanyDetails/>
                                        </div>
                                
                                        <div className={`${subpage === 2? 'block':'hidden'}`}>
                                          <AddUsers/>
                                        </div>
                                        <div className={`${subpage === 3? 'block':'hidden'}`}>
                                          <SubUserPermission/>
                                        </div>
                                        <div className={`${subpage === 4? 'block':'hidden'}`}>
                                          <LogoSignature/>
                                        </div>
                                        <div className={`${subpage === 5? 'block':'hidden'}`}>
                                          <BankDetails/>
                                        </div>
                                        <div className={`${subpage === 6? 'block':'hidden'}`}>
                                          <PasswordSettings/>
                                        </div>
                                        <div className={`${subpage === 7? 'block':'hidden'}`}>
                                          <TC/>
                                        </div>
                          </div>
                      </div>
            </div>
    </div>
  )
}
