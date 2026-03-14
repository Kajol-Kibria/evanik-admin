import React from 'react'
import ChannelsListTable from './ChannelsListTable'
import DownloadApp from '../common/DownloadApp'

export default function ChannelsListCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <ChannelsListTable/>
    </div>
  )
}
