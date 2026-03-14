import React from 'react'
import DownloadApp from '../common/DownloadApp'
import PlansChangePlanSubMenu from './PlansChangePlanSubMenu'
import UserAddOns from './UserAddOns'

export default function PlansChangePlanCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <PlansChangePlanSubMenu/>
        <UserAddOns/>
    </div>
  )
}
