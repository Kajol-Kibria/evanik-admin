'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image'
import DropButton from '../common/DropButton';
import CustomRadio from '../common/CustomRadio';

const metricsOne = [
  { title: "Late Shipment Rate", score: 56, color: "bg-[#F3F4FB]" },
  { title: "Invoice Defect Rate", score: 56, color: "bg-[#ffeceb]" },
  { title: "On-Time Delivery Rate", score: 56, color: "bg-[#FBF8E4]" },
  { title: "Valid Tracking Rate", score: 56, color: "bg-[#F3F4FB]" },
  { title: "Pre-Fulfillment Cancellation Rate", score: 56, color: "bg-[#ffeceb]" },
  { title: "Policy Violations", score: 56, color: "bg-[#FBF8E4]" },
  { title: "On-Time Delivery Rate", score: 56, color: "bg-[#F5EFFA]" },
  { title: "Valid Tracking Rate", score: 56, color: "bg-[#F1F8F6]" },
  { title: "Contact Response Time", score: 56, color: "bg-[#FBF2F0]" },
  { title: "Return Dis-Sat Rate", score: 56, color: "bg-[#F5EFFA]" },
  { title: "CX Dis-Sat Rate", score: 56, color: "bg-[#F1F8F6]" },
];

const metricsTwo = [
  { title: "Product Authenticity Status", score: 56, color: "bg-[#F3F4FB]" },
  { title: "Product Safety Status", score: 56, color: "bg-[#ffeceb]" },
  { title: "Intellectual Property Status", score: 56, color: "bg-[#FBF8E4]" },
  { title: "Order Count", score: 56, color: "bg-[#F3F4FB]" },
  { title: "Order With Defects", score: 56, color: "bg-[#ffeceb]" },
  { title: "Negative Feedbacks", score: 56, color: "bg-[#FBF8E4]" },
  { title: "A to Z Claims", score: 56, color: "bg-[#F5EFFA]" },
  { title: "Chargebacks", score: 56, color: "bg-[#F1F8F6]" },
  { title: "Refunds", score: 56, color: "bg-[#ffeceb]" },
  { title: "Average Response Time", score: 56, color:"bg-[#FBF2F0]" },
  { title: "Response Under 24 Hrs", score: 56, color: "bg-[#F5EFFA]" },
  { title: "Response more than 24 Hrs", score: 56, color: "bg-[#F1F8F6]" },
];


const MetricCard = ({ title, score, color }) => (
  <div className={`flex items-center gap-3 ${color} rounded-lg p-4`}>
    <p className='px-4 py-2.5 bg-gray-700/10 rounded-lg text-xl text-gray-700 font-bold'>{score}</p>
    <p className='text-sm'>{title}</p>
  </div>
);

export default function SellerHealthTop() {
      const [value1, setValue1] = useState("Store");
      const [value2, setValue2] = useState("Date Range");
  return (
    <div>
      <div className='sm:flex items-center justify-between'>
          <p className="my-4 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
            Seller Health Dashboard (Amazon)
          </p>
          <button className='flex items-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium text-gray-700 hover:border-blue hover:text-blue transition-all duration-300'>Watch Video<Image src='/images/icon-video-red.svg' alt='' width={15} height={15}/></button>
      </div>
      <div className='sm:flex items-center gap-4 my-5'>
        <div className='flex items-center gap-4'>
        <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year']}/>        
        <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year']}/> 
        </div>
        <div className='sm:flex sm:gap-2 items-center gap-5 text-sm my-4 sm:my-0'>
          <p className='text-xs text-gray-600 pb-2 sm:pb-0'>Metrics :</p>
          <div  className='flex items-center gap-5'>
              <button className='cursor-pointer'><CustomRadio id={'All'} txt={'All'}/></button>
              <button className='cursor-pointer'><CustomRadio id={'Good'} txt={'Good'}/></button>
              <button className='cursor-pointer'><CustomRadio id={'Bad'} txt={'Bad'}/></button>
              <button className='cursor-pointer'><CustomRadio id={'Critical'} txt={'Critical'}/></button>
          </div>
        </div>       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 justify-center my-5">
        {metricsOne.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5 justify-center my-5">
        {metricsTwo.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  )
}
