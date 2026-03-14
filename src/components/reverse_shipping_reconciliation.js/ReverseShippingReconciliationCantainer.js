import React from 'react'
import ReverseShippingReconciliationTablePegi from './ReverseShippingReconciliationTablePegi'
import ReverseShippingReconciliationButtons from './ReverseShippingReconciliationButtons'
import DownloadApp from '../common/DownloadApp'

export default function ReverseShippingReconciliationCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <ReverseShippingReconciliationButtons/>
      <ReverseShippingReconciliationTablePegi/>
    </div>
  )
}
