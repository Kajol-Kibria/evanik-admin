import Login from '@/components/logincomponents/Login'
import React from 'react'
import DashBoardCantainer from '@/components/dashboard/DashBoardCantainer'

export default function page() {
  return (
    <div className=' w-full'>
      <DashBoardCantainer />
      {/* <Login /> */}
    </div>
  )
}
