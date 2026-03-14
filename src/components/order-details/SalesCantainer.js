import React from 'react'
import IndexingButtons from './IndexingButtons'
import IndexingTablePegi from './IndexingTablePegi'
import IndexingTop from './IndexingTop'

export default function SalesCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <IndexingTop/>
        <IndexingButtons/>
        <IndexingTablePegi/>
    </div>
  )
}
