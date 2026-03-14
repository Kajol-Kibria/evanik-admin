import React from 'react'
import ChannelDetails from "./ChannelDetails";
import OrderHistory from "./OrderHistory";
import PaymentSummery from "./PaymentSummery";
import Product from "./Product";
import SubscriptionDetails from "./SubscriptionDetails";
import WholeOrder from "./WholeOrder";
export default function OrderDetailsModelContainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <div className='sm:flex gap-20'>
            <div className='sm:w-1/2'>
            <SubscriptionDetails/>
            <ChannelDetails/>
            <OrderHistory/>
            </div>
            <div className='sm:w-1/2'>
            <WholeOrder/>
            <Product/>
            <PaymentSummery/>
            </div>
        </div>
    </div>
  )
}
