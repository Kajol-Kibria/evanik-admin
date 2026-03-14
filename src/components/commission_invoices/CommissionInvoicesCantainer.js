import React from 'react'
import CommissionInvoicesTablePegi from './CommissionInvoicesTablePegi'
import DownloadApp from '../common/DownloadApp'
import CommissionInvoicesButtons from './CommissionInvoicesButtons'

export default function CommissionInvoicesCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <DownloadApp/>
        <CommissionInvoicesButtons/>
        <CommissionInvoicesTablePegi/>
    </div>
  )
}
