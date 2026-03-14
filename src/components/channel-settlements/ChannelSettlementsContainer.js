import React from 'react'
import ChannelSettlementsButtons from './ChannelSettlementsButtons'
import ChannelSettlementsTablePegi from './ChannelSettlementsTablePegi'
import DownloadApp from '../common/DownloadApp'

export default function ChannelSettlementsContainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <ChannelSettlementsButtons/>
        <ChannelSettlementsTablePegi/>
    </div>
  )
}
