import React from 'react'
import DownloadApp from '../common/DownloadApp'
import ChannelListingButtons from './ChannelListingButtons'
import ChannelListingTablePegi from './ChannelListingTablePegi'

export default function ChannelListingCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <ChannelListingButtons/>
        <ChannelListingTablePegi/>
    </div>
  )
}
