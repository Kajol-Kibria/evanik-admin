'use client'
import React from 'react'
import TaxMisMatchedButtons from './TaxMisMatchedButtons';
import TaxMisMatchedTablePegi from './TaxMisMatchedTablePegi';
export default function TaxMisMatchedCantainer() {

  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
      <TaxMisMatchedButtons/>
      <TaxMisMatchedTablePegi/>
    </div>
  )
}
