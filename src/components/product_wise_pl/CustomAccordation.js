'use client'
import React, { useState } from 'react'
import Image from '../../../node_modules/next/image';
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
export default function CustomAccordation(props) {
    const { data } = props;
    const [current, setCurrent] =useState(false)
    const [netUnits, setNetUnits] =useState(false)
    const [value, setValue] =useState(false)
    const [previous, setPrevious] =useState(false)
  return (

        <div className='bg-white shd p-5 rounded-lg  my-1'>
            <div className='sm:flex items-center justify-between'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <p className='text-blue font-semibold'>{data.name}</p>
                <p className='text-gray-700 text-xs'>{data.info}</p>
                </div>
            </div>
            <div className='flex items-center gap-3 my-3 sm:my-0'>
                <p className='text-gray-600 text-xs font-medium'>Sales: <span className='text-sm text-black font-semibold'>{data.sales}</span></p>
                <p className='text-gray-600 text-xs font-medium'>Purchase: <span className='text-sm text-black font-semibold'>{data.purchase}</span></p>
                <p className='text-gray-600 text-xs font-medium'>Expense: <span className='text-sm text-red-500 font-semibold'>{data.expense}</span></p>
                <p className='text-gray-600 text-xs font-medium'>Profit: <span className='text-sm text-[#1f674f] font-semibold'>{data.profit}</span></p>
                <button onClick={()=>setPrevious(!previous)} className='w-6 h-6 flex items-center justify-center'><Image src='/images/icon-history.svg' alt='' height={16} width={16}/></button>
                <button onClick={()=>setCurrent(!current)} className='w-6 h-6 flex items-center justify-center'>{current?<Image src='/images/icon-minus.svg' alt='' height={16} width={16}/>:<Image src='/images/icon-plus.svg' alt='' height={16} width={16}/>}</button>
            </div>
            </div>
            <AnimatePresence >
            {previous ? (
                   <motion.div
                   style={{ overflow: "hidden" }}
                   initial={{ height: 0 }}
                   animate={{ height: "auto" }}
                   transition={{ duration: 0.3 }}
                   exit={{ height: 0 }}
                 >
                    <div className='sm:flex mt-5 text-[#3a3b4c]'>
                    <div className='rounded-md p-5 bg-[#F3F4FB] sm:w-1/4'>
                        <div className='flex items-center justify-between mb-5'>
                            <p className='uppercase text-[13px] font-bold text-blue'>Purchase</p>
                            <p className='text-gray-700 text-[11px] font-medium'>{data.history.date}</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Sales :<span className='text-base font-semibold'>{data.history.sales}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.history.purchase}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Expense :<span className='text-base font-semibold text-red-500'>{data.history.expense}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Profit :<span className='text-base font-semibold text-[#1f674f]'>{data.history.profit}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#F3F4FB] sm:w-1/4 sm:border-l'>
                        <div className='flex items-center justify-between mb-5'>
                            <p className='uppercase text-[13px] font-bold text-blue'>Purchase</p>
                            <p className='text-gray-700 text-[11px] font-medium'>Jul 26, 2024</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Sales :<span className='text-base font-semibold'>{data.history.sales}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.history.purchase}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Expense :<span className='text-base font-semibold text-red-500'>{data.history.expense}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Profit :<span className='text-base font-semibold text-[#1f674f]'>{data.history.profit}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#F3F4FB] sm:w-1/4 sm:border-l'>
                        <div className='flex items-center justify-between mb-5'>
                            <p className='uppercase text-[13px] font-bold text-blue'>Purchase</p>
                            <p className='text-gray-700 text-[11px] font-medium'>Jul 26, 2024</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Sales :<span className='text-base font-semibold'>{data.history.sales}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.history.purchase}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Expense :<span className='text-base font-semibold text-red-500'>{data.history.expense}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Profit :<span className='text-base font-semibold text-[#1f674f]'>{data.history.profit}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#F3F4FB] sm:w-1/4 sm:border-l'>
                        <div className='flex items-center justify-between mb-5'>
                            <p className='uppercase text-[13px] font-bold text-blue'>Purchase</p>
                            <p className='text-gray-700 text-[11px] font-medium'>Jul 26, 2024</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Sales :<span className='text-base font-semibold'>{data.history.sales}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.history.purchase}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Expense :<span className='text-base font-semibold text-red-500'>{data.history.expense}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Profit :<span className='text-base font-semibold text-[#1f674f]'>{data.history.profit}</span></p>
                        </div>
                    </div>
                </div>
                 </motion.div>
                ) : null}
            </AnimatePresence>
           
            <AnimatePresence >
            {current ? (
                   <motion.div
                   style={{ overflow: "hidden" }}
                   initial={{ height: 0 }}
                   animate={{ height: "auto" }}
                   transition={{ duration: 0.3 }}
                   exit={{ height: 0 }}
                 >
                    <div className='sm:flex mt-5 text-[#3a3b4c]'>
                    <div className='rounded-md p-5 bg-[#F3F4FB] sm:w-1/4'>
                        <p className='uppercase text-[13px] font-bold mb-5'>sales</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[13px] font-bold'>Net Units</p>
                            <button onClick={()=>setNetUnits(!netUnits)} className='w-4 h-4 flex items-center justify-center'>{netUnits?<Image src='/images/icon-minus.svg' alt='' height={14} width={14}/>:<Image src='/images/icon-plus.svg' alt='' height={14} width={14}/>}</button>
                        </div>
                        <div className={`${netUnits?'h-24 border-b pb-3':'h-0'} my-2 transition-[height] duration-300 overflow-hidden space-y-2`}>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Sales :<span className='text-base font-semibold'>{data.salesDetails.netUnits.sales}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Returns:<span className='text-base font-semibold'>{data.salesDetails.netUnits.returns}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Net:<span className='text-base font-semibold'>{data.salesDetails.netUnits.net}</span></p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[13px] font-bold'>Value</p>
                            <button onClick={()=>setValue(!value)} className='w-4 h-4 flex items-center justify-center'>{value?<Image src='/images/icon-minus.svg' alt='' height={14} width={14}/>:<Image src='/images/icon-plus.svg' alt='' height={14} width={14}/>}</button>
                        </div>
                        <div className={`${value?'h-24 border-b pb-3':'h-0'}  my-2 transition-[height] duration-300 overflow-hidden space-y-2`}>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Returns:<span className='text-base font-semibold'>{data.salesDetails.value.returns}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Net:<span className='text-base font-semibold'>{data.salesDetails.value.net}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Total :<span className='text-base font-semibold'>{data.salesDetails.value.total}</span></p>
                        </div>
                        <div className='space-y-2'>
                        <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.salesDetails.purchase}</span></p>
                        <p className='flex items-center justify-between text-gray-700 text-xs'>Before GST :<span className='text-base font-semibold'>{data.salesDetails.beforeGST}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#FBF8E4] sm:w-1/4'>
                        <p className='uppercase text-[13px] font-bold mb-5'>Purchase</p>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Purchase :<span className='text-base font-semibold'>{data.purchaseDetails.purchase}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Before GST :<span className='text-base font-semibold'>{data.purchaseDetails.beforeGST}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#ffeceb] sm:w-1/4'>
                        <p className='uppercase text-[13px] font-bold mb-5'>Expense</p>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Channel Expenses :<span className='text-base font-semibold'>{data.expenseDetails.channelExpenses}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Per Unit :<span className='text-base font-semibold'>{data.expenseDetails.perUnit}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Before GST :<span className='text-base font-semibold'>{data.expenseDetails.beforeGST}</span></p>
                        </div>
                    </div>
                    <div className='rounded-md p-5 bg-[#f1f8f6] sm:w-1/4'>
                        <p className='uppercase text-[13px] font-bold mb-5'>Profit</p>
                        <div className='space-y-2'>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Gross Unit Margin :<span className='text-base font-semibold'>{data.profitDetails.grossUnitMargin}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Net Payable GST :<span className='text-base font-semibold'>{data.profitDetails.netPayableGST}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Net Unit Margin :<span className='text-base font-semibold'>{data.profitDetails.netUnitMargin}</span></p>
                            <p className='flex items-center justify-between text-gray-700 text-xs'>Percentage :<span className='text-base font-semibold'>{data.profitDetails.percentage}</span></p>
                        </div>
                    </div>
                </div>
                 </motion.div>
                ) : null}
            </AnimatePresence>
        </div>

  )
}
