import React from 'react'
import CommissionReconciliationButtons from './CommissionReconciliationButtons';
import CommissionReconciliationTablePegi from './CommissionReconciliationTablePegi';

export default function CommissionReconciliationCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
      <CommissionReconciliationButtons/>
      <CommissionReconciliationTablePegi/>
    </div>
  )
}
