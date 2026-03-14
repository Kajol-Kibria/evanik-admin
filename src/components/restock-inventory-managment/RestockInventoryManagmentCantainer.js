import React from 'react'
import RestockInventoryTablePegi from "./RestockInventoryTablePegi";
import RestockInventoryTop from "./RestockInventoryTop";
import DownloadApp from '../common/DownloadApp';

export default function RestockInventoryManagmentCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <RestockInventoryTop/>
      <RestockInventoryTablePegi/>
    </div>
  )
}
