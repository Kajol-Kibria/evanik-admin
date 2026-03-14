'use client'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { BsArrowLeft, BsArrowRight  } from "react-icons/bs";
import DownloadApp from '../common/DownloadApp';
import DropButton from '../common/DropButton';

export default function ReconciliationSummeryCantainer() {
  
  const [value1, setValue1] = useState('1mg')
  const [value2, setValue2] = useState('Store Name')
  const [subpage,setSubpage] = useState('Sales')

  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <DownloadApp/>
      <div className='sm:flex items-center justify-between'>
      <p className="my-5 sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
      Reconciliation Summary
      </p>
      <div className='flex items-center gap-4'>
       <DropButton state={value1} setState={setValue1} items={["1mg", "Amazon", "Blinkit", "Flipkart", "Jiomart", "Meesho", "Offlinesales", "Pos", "Shopify", "Snapdeal"]}/>               
       <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter"]}/>               
      </div>
      </div>
      <div className='flex items-center justify-between sm:w-[28%] my-4'>
      <button><BsArrowLeft size={20}/></button>
      <input type="month" id="" defaultValue="2025-03" name=""/>
      <button><BsArrowRight size={20}/></button>
      </div>
        <div className='sm:flex gap-8'>
                <div className='sm:w-[28%] my-4 sm:my-0 rounded-md shd h-[100%]'>
                <div onClick={()=>setSubpage('Sales')} className={` ${subpage ==='Sales'?'bg-blue text-white  border-blue':'bg-white  text-blue'} border-b rounded-t-md px-6 py-5  cursor-pointer`}>
                  <div>
                    <div className='flex items-center justify-between font-medium'>
                      <p className='uppercase text-sm'>Sales</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div onClick={()=>setSubpage('Returned')} className={`${subpage ==='Returned'?'bg-blue text-white  border-blue':'bg-white  text-blue'} grid grid-cols-2 sm:grid-cols-1 border-b px-6 py-5  cursor-pointer`}>
                  <div >
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='Returned'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>Returned</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div onClick={()=>setSubpage('Cancellations')} className={` ${subpage ==='Cancellations'?'bg-blue text-white  border-blue':'bg-white  text-blue'} border-b px-6 py-5  cursor-pointer`}>
                  <div>
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='Cancellations'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>Cancellations</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div onClick={()=>setSubpage('M/P Fee Commission')} className={`${subpage ==='M/P Fee Commission'?'bg-blue text-white  border-blue':'bg-white  text-blue'}  border-b  px-6 py-5  cursor-pointer`}>
                  <div >
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='M/P Fee Commission'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>M/P Fee Commission</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div  onClick={()=>setSubpage('Claims & Reimbursement Summary')} className={`${subpage ==='Claims & Reimbursement Summary'?'bg-blue text-white  border-blue':'bg-white  text-blue'} border-b   px-6 py-5  cursor-pointer`}>
                  <div>
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='Claims & Reimbursement Summary'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>Claims & Reimbursement Summary</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div onClick={()=>setSubpage('Settlements & Payouts')} className={`${subpage ==='Settlements & Payouts'?'bg-blue text-white  border-blue':'bg-white  text-blue'}  border-b  px-6 py-5  cursor-pointer`}>
                  <div >
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='Settlements & Payouts'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>Settlements & Payouts</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                    <div className='flex items-end  justify-between'>
                    <p className='text-lg mt-2 hidden sm:block font-semibold'>6,54,789</p>
                    <p className='text-xs'>100 orders</p>
                    </div>
                  </div>     
                </div>
                <div onClick={()=>setSubpage('Reconciliation Summary')} className={`${subpage ==='Reconciliation Summary'?'bg-blue text-white  border-blue':'bg-white  text-blue'} rounded-b-md  px-6 py-5 cursor-pointer`}>
                  <div>
                    <div className='flex items-center justify-between font-medium'>
                      <p className={`${subpage ==='Reconciliation Summary'?' text-white ':'text-gray-600'} uppercase text-[13px]`}>Reconciliation Summary</p>
                      <IoIosArrowForward className="hidden sm:block"/>
                    </div>
                  </div>     
                </div>
                </div>
                {/* show based on state */}
                <div className='sm:w-[70%] bg-white p-7 shd rounded-md '>


                  <div  className={`${subpage === "Sales"? 'block':'hidden'}`}>
                      <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                      <p className='font-semibold uppercase text-[13px]'>Gross</p>  
                      <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>  
                      </div>           
                      <div className='sm:flex'>
                        <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Returns</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Net Sales</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                      </div>           
                  </div>
                    
                            <div className={`${subpage === "Returned"? 'block':'hidden'}`}>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                          <p className='font-semibold uppercase text-[13px]'>Returns</p>  
                          <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>  
                          </div>           
                          <div className='sm:flex'>
                        <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Received</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Customer</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Courier</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Return not received</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        </div> 
                        </div>
        
                        <div className={`${subpage === "Cancellations"? 'block':'hidden'}`}>
                        <div className='sm:flex'>
                        <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Merchant</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Customer</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                        <p className='font-semibold uppercase text-[13px]'>Total</p>  
                        <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                        </div>
                        </div> 
                        </div>
        
                            <div className={`${subpage === "M/P Fee Commission"? 'block':'hidden'}`}>
                            <div className=''>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On delivered</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On Returned</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Total</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div> 
                            </div>
        
                            <div className={`${subpage === "Claims & Reimbursement Summary"? 'block':'hidden'}`}>
                            <div className='sm:flex'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Claimable Reports Value</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Claims Raised</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Reimbursements Received</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            </div>
                            <div className={`${subpage === "Settlements & Payouts"? 'block':'hidden'}`}>
                            <p className='text-blue font-semibold mb-4'>Receivable</p>
                            <div className='sm:flex'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On delivered</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On Returned</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Total</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            <p className='text-blue font-semibold my-4'>Received(for the Month)</p>
                            <div className='sm:flex'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On delivered</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>On Returned</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Total</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            
                            <div className='sm:flex my-6'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Unpaid</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Unsettled (For the Month)</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Settlements (In the Month)</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>

                            </div>
        
                            <div className={`${subpage === "Reconciliation Summary"? 'block':'hidden'}`}>
                            <p className='text-blue font-semibold mb-4'>Receivable</p>
                            <div className='sm:flex'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Unpaid</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Returns not received</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Total (Order related)</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            <div className='sm:flex my-6'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Wrong Commision</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#FBF8E4] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Courier Returns Charged</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Shipping overcharged</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            <div className='sm:flex my-6'>
                            <div className='bg-[#F3F4FB] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Merchant cancellations charged</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            <div className='bg-[#F1F8F6] w-full py-6 text-center'>
                            <p className='font-semibold uppercase text-[13px]'>Total (Charges related)</p>  
                            <p className='text-xl text-blue font-semibold'>39.75 Lacs</p>
                            </div>
                            </div>
                            </div>
                </div>
              </div>
    </div>
  )
}
