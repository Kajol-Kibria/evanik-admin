import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";

export default function AlertText(props) {
  return (
    <div className='flex items-center gap-2 text-sm p-4 rounded-md bg-[#f8f5f1] text-[#c18029]'>
       <BsInfoCircleFill size={16}/>
        {props.txt}
    </div>
  )
}
