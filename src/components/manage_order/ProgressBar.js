'use client'
import React, { useState } from 'react'

export default function ProgressBar() {
  const [showprog, setShowprog] = useState(false);
  return (
    <div onClick={()=>setShowprog(!showprog)} className={`${showprog?'hidden':'block'} `}>

    <div className='absolute  z-50 bg-black/50 flex items-center justify-center top-0 bottom-0 right-0 left-0'>
        <div className="progress">
      <div  className={`fill a  text-center text-white text-xs flex items-center justify-center font-bold`}>75%</div>
    </div>
    </div>
    </div>
  )
}
