import React from 'react'
import CommissionInvoiceReconciliationButtons from './CommissionInvoiceReconciliationButtons'
import CommissionInvoiceReconciliationTablePegi from './CommissionInvoiceReconciliationTablePegi'

export default function CommissionInvoiceReconciliation() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <CommissionInvoiceReconciliationButtons/>
        <CommissionInvoiceReconciliationTablePegi/>
    </div>
  )
}
