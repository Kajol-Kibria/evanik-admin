import React from 'react'

import PlanSubscription from './PlanSubscription'
import AccountManager from './AccountManager'
import AddOns from './AddOns'
import PaymentMethod from './PaymentMethod'
import PaymentHistory from './PaymentHistory'
import DownloadApp from '../common/DownloadApp'
export default function ActivePlansCantainer() {
  return (

    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp />
      <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">Plans - Active Subscription</p>
      <div className='sm:flex gap-10  my-5'>
        <div className='sm:w-1/2 space-y-5'>
          <PlanSubscription />
          <AccountManager />
        </div>
        <div className='sm:w-1/2 space-y-5'>
          <AddOns />
          <PaymentMethod />
        </div>
      </div>
      <PaymentHistory />
    </div>
  )
}
