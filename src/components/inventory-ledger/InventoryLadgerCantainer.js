import React from 'react'
import DownloadApp from '../common/DownloadApp'
import LedgerTop from './LedgerTop'
import LedgerTablePegi from './LedgerTablePegi'
export default function InventoryLadgerCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <LedgerTop/>
      <LedgerTablePegi/>
    </div>
  )
}
