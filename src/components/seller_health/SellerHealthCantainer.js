import React from 'react'
import DownloadApp from '../common/DownloadApp'
import SellerHealthTop from './SellerHealthTop'
import OrderDefectTable from './OrderDefectTable'
import CustomerExperienceTable from './CustomerExperienceTable'
import TrackingInformationTable from './TrackingInformationTable'
import ReturnDissatisfactionTable from './ReturnDissatisfactionTable'

export default function SellerHealthCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
      <DownloadApp/>
      <SellerHealthTop/>
      <div className='sm:flex gap-5 p-5 shd bg-white rounded-lg'>
        <div className='sm:w-1/2'>
          <OrderDefectTable/>
        </div>
        <div className='sm:w-1/2'>
          <CustomerExperienceTable/>
        </div>
      </div>
      <TrackingInformationTable/>
      <ReturnDissatisfactionTable/>
    </div>
  )
}
