import React from 'react'
import FBAButtons from "./FBAButtons";
import FBATablePegi from "./FBATablePegi";
export default function FBACantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <FBAButtons/>
      <FBATablePegi/>            
    </div>
  )
}
