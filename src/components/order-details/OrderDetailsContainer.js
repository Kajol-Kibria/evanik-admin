import React from 'react'
import OrderDEtailsButtons from "./OrderDEtailsButtons";
import OrderDetailsDataGrid from "./OrderDetailsDataGrid";
import OrderDetailsTablePegi from "./OrderDetailsTablePegi";
import DownloadApp from '../common/DownloadApp';
export default function OrderDetailsContainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <OrderDEtailsButtons/>
      <OrderDetailsDataGrid/>
      <OrderDetailsTablePegi/>
    </div>
  )
}
