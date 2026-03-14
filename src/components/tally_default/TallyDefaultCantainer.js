import React from 'react'
import TallyTop from '../tally/TallyTop'
import AlertText from '../common/AlertText'
import TallyDefaultCards from './TallyDefaultCards'

export default function TallyDefaultCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <TallyTop/>
        <TallyDefaultCards/>
    </div>
  )
}
