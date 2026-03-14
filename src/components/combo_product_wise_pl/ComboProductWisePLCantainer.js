import React from 'react'
import DownloadApp from '../common/DownloadApp'
import ComboProductWisePLButtons from './ComboProductWisePLButtons'
import ComboProductWisePLTablePegi from './ComboProductWisePLTablePegi'

export default function ComboProductWisePLCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <ComboProductWisePLButtons/>
        <ComboProductWisePLTablePegi/>
    </div>
  )
}
