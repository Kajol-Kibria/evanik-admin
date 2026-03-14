import React from 'react'
import DownloadApp from '../common/DownloadApp'
import ProductWisePLButtons from './ProductWisePLButtons'
import ProductWisePLTable from './ProductWisePLTable'

export default function ProductWisePLCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <ProductWisePLButtons/>
        <ProductWisePLTable/>
    </div>
  )
}
