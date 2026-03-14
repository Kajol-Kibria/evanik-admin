'use client'
import { usePlans } from '@/hooks/usePlans';
import React from 'react'

export default function PlanSubcription() {
  const { data, error, isLoading } = usePlans();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading plans</div>;

  return (
    <div>
      <div className=" shd rounded-lg">
        <h2 className=" bg-[#525cc7] text-white font-semibold mb-4 rounded-t-lg p-4">Subscription</h2>
        <div className="p-6">
          <p className='text-base font-semibold '>Platinum</p>
          <div className='flex items-center justify-between my-2'>
            <p className="text-gray-700 text-xs ">2024-06-01 to 2025-06-30</p>
            <span className=" text-[#1f674f] px-4 py-1 bg-[#e7fbe4] text-xs rounded-md font-semibold">Active</span>
          </div>
          <div className='flex items-center gap-2 my-2'>
            <p className="text-gray-700 text-xs ">Plan Type</p>
            <span className=" text-[#AA791D] px-4 py-1 bg-[#FBF3E4] text-xs rounded-md font-semibold">Accounting, CLAIM</span>
          </div>
          <div className='space-y-[14px]'>
            <div className='flex justify-between items-start'>
              <div className='w-1/3 pt-1'>
                <p className="text-gray-700 text-xs mb-1">Credits assigned:</p>
                <p className="font-medium text-gray-900">150000</p>
              </div>
              <div className='w-1/3 pt-1'>
                <p className="text-gray-700 text-xs mb-1">Credits Utilized:</p>
                <p className="font-medium text-gray-900">104200</p>
              </div>
              <div className='w-1/3 pt-1'>
                <p className="text-gray-700 text-xs mb-1">Credits Available:</p>
                <p className="font-medium text-gray-900">45800</p>
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='w-1/2'>
                <p className="text-gray-700 text-xs mb-1 mt-2">Invoice Amount:</p>
                <p className="font-medium text-gray-900">₹ 65000.00</p>
              </div>
              <div className='w-1/2'>
                <p className="text-gray-700 text-xs mb-1 mt-2">Invoice Number:</p>
                <p className="font-medium text-gray-900">EUP/24-25/0042</p>
              </div>
            </div>
          </div>
          <p className='text-base font-semibold mt-4'>Users</p>
          <div className='flex justify-between'>
            <div className='w-1/2'>
              <p className="text-gray-700 text-xs mb-1 mt-2">Additional Users:</p>
              <p className="font-medium text-gray-900"></p>
            </div>
            <div className='w-1/2'>
              <p className="text-gray-700 text-xs mb-1 mt-2">Included Users:</p>
              <p className="font-medium text-gray-900"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
