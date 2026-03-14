import React from 'react'
import DownloadApp from '../common/DownloadApp'
import CategoryButtons from './CategoryButtons'
import CategoryTablepegi from './CategoryTablepegi'

export default function CategoryCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <CategoryButtons/>
      <CategoryTablepegi/>
    </div>
  )
}
