import TallySubMenu from './TallySubMenu'
import TallyTop from './TallyTop'
import React from 'react'

export default function TallyCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <TallyTop/>
      <TallySubMenu/>
    </div>
  )
}
