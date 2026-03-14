import React from 'react'
import DownloadApp from '../common/DownloadApp'
import FeedBakerButtons from './FeedBakerButtons'
import FeedBakerSubMenu from './FeedBakerSubMenu'
export default function AmazonFeedbakerCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp />
      <FeedBakerButtons />
      <FeedBakerSubMenu />
    </div>
  )
}
