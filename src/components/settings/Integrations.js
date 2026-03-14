'use client'
import React, { useState } from 'react'
import SalesChannels from './SalesChannels'
import MyChannels from './MyChannels'
import ERP from './ERP'
import Global from './Global'
import Marketing from './Marketing'
import Payments from './Payments'
import Shipping from './Shipping'
export default function Integrations() {
  const [subpage, setSubpage] = useState(1)
  const [connect, setConnect] = useState(false)
  const dataArray =[
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
    {
        Logo:'/images/logo-amazon.png',
        Title:'Amazon (IN)',
        Des:'Connet your amanzon seller central account to access relevant data',
    },
 ]
  return (
              <div>
                          <div className={`${connect?'hidden':'block'}`}>
                              <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-3'>
                                  <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Sales Channels</button>
                                  <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>My Channels</button>
                                  <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>ERP</button>
                                  <button className={`${subpage=== 4 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(4)}>Global</button>
                                  <button className={`${subpage=== 5 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(5)}>Marketing</button>
                                  <button className={`${subpage=== 6 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(6)}>Payments</button>
                                  <button className={`${subpage=== 7 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(7)}>Shipping</button>
                              </div>
                          </div>
                          <div>
                               <div  className={`${subpage === 1 ? 'block':'hidden'} relative`}>
                                        <SalesChannels dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                                        <div className={`${subpage === 2? 'block':'hidden'}`}>
                                        <MyChannels/>
                                        </div>
                                        <div className={`${subpage === 3? 'block':'hidden'}`}>
                                        <ERP dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                                        <div className={`${subpage === 4? 'block':'hidden'}`}>
                                          <Global dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                                        <div className={`${subpage === 5? 'block':'hidden'}`}>
                                        <Marketing dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                                        <div className={`${subpage === 6? 'block':'hidden'}`}>
                                        <Payments dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                                        <div className={`${subpage === 7? 'block':'hidden'}`}>
                                         <Shipping dataArray={dataArray} connect={connect} setConnect={setConnect}/>
                                        </div>
                          </div>
                </div>
  )
}
