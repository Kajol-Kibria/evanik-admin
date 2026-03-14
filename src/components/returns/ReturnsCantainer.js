import React from 'react'
import ReturnButtons from "./ReturnButtons";
import ReturnTablePegi from "./ReturnTablePegi";
import DownloadApp from '../common/DownloadApp';

export default function ReturnsCantainer() {
  return (
    <div className="sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 ">
          <DownloadApp />
          <ReturnButtons/>
          <ReturnTablePegi/>
        </div>
  )
}
