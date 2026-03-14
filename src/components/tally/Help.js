'use client'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import CategorySection from './CategorySection';
import { Onevideodata ,Onedocumentsdata} from '../../../alldatafiles/CategoryOnedata';
import Link from '../../../node_modules/next/link';

export default function Help() {
  const [subpage,setSubpage] = useState(1);
  return (
    <div>
      <div className='sm:flex items-center justify-between'>
                    <div className='flex items-center mt-4 sm:mt-0 sm:mr-4'>
                                    <input className='pl-5 pr-14 sm:w-[500px] w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent placeholder:text-sm py-2 rounded-xl' placeholder='Enter search text here'/>
                                    <button className='text-gray-600 -ml-10'><IoIosSearch size={22}/></button>
                    </div>
                   <Link href='/help_support_tickets' className='blueButton my-4 sm:my-0 w-full sm:w-auto'>Support Ticket</Link>
      </div>
      <div>
        <div>
                    <div>
                        <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4 mt-4'>
                            <button className={`${subpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setSubpage(1)}>Category 1</button>
                            <button className={`${subpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(2)}>Category 2</button>
                            <button className={`${subpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(3)}>Category 3</button>
                            <button className={`${subpage=== 4 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(4)}>Category 4</button>
                            <button className={`${subpage=== 5 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(5)}>Category 5</button>
                            <button className={`${subpage=== 6 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setSubpage(6)}>Category 6</button>
                        </div>
                    </div>
                    <div>
                         <div  className={`${subpage === 1 ? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                          
                                  <div className={`${subpage === 2? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                                  <div className={`${subpage === 3? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                                  <div className={`${subpage === 4? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                                  <div className={`${subpage === 5? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                                  <div className={`${subpage === 6? 'block':'hidden'}`}>
                                  <CategorySection video={Onevideodata} documents={Onedocumentsdata}/>
                                  </div>
                    </div>
                </div>
      </div>
    </div>
  )
}
