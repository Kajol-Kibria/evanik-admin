import React from 'react'
import FixedFeeReconciliationTablePegi from './FixedFeeReconciliationTablePegi'
import FixedFeeReconciliationButtons from './FixedFeeReconciliationButtons'

export default function FixedFeeReconciliationCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <FixedFeeReconciliationButtons/>
        <FixedFeeReconciliationTablePegi/>
    </div>
  )
}
