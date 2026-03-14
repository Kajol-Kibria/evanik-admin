import React from 'react'

import OrderHistory from "../orderdetailsmodel/OrderHistory";
import PaymentSummery from "../orderdetailsmodel/PaymentSummery";
import Product from "../orderdetailsmodel/Product";
import SubscriptionDetails from "../orderdetailsmodel/SubscriptionDetails";
import WholeOrder from "../orderdetailsmodel/WholeOrder";
import ChannelDetails from '../orderdetailsmodel/ChannelDetails';
export default function OrderDetailsModalReturnsCantainer() {
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
