import React from 'react'
import RepricerButtons from './RepricerButtons'
import RepricerSubMenu from './RepricerSubMenu'
import DownloadApp from '../common/DownloadApp'

export default function AutomaticRepricerCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
    <DownloadApp/>
    <RepricerButtons/>
    <RepricerSubMenu/>
  </div>
  )
}
