import React from 'react'
import DownloadApp from '../common/DownloadApp'
import { IoIosSearch } from "react-icons/io";
import { RiMicLine } from "react-icons/ri";
import { RiSendPlane2Line } from "react-icons/ri";
import Image from '../../../node_modules/next/image';

export default function EvaCantainer() {
    const dataArray = [
        {
            ID:1,
            Month:'January',
            Revenue:'₹ 85,000',
        },
        {
            ID:2,
            Month:'February',
            Revenue:'₹ 85,000',
        },
        {
            ID:3,
            Month:'March',
            Revenue:'₹ 85,000',
        },
        {
            ID:4,
            Month:'April',
            Revenue:'₹ 85,000',
        },
        {
            ID:5,
            Month:'May',
            Revenue:'₹ 85,000',
        },
        {
            ID:6,
            Month:'June',
            Revenue:'₹ 85,000',
        },
        {
            ID:13,
            Month:'Total',
            Revenue:'₹ 486,000',
        },
        
    ];
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 m-5 relative h-[calc(100vh-73px)]'>
        <DownloadApp/>
        <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c] my-4">Ask eVa</p>
        <div className='absolute bottom-5 sm:bottom-16 sm:left-36 2xl:left-96 sm:right-36 2xl:right-96'>
            <div className='h-[40vh] overflow-auto px-3 sm:px-8'>
            {/* before starting of the chat*/}
            <div className='hidden content-end h-full'>
                <div className='relative shd my-5 rounded-lg pr-[35px] pl-[45px] py-[24px] w-80 mx-auto'>
                    <p className='text-sm'>Hi I am your eVanik Assiatant. Ask any query here to get instant answers to your questions.</p>
                    <button className='absolute  overflow-hidden  -left-8 bottom-9 w-16 h-16 bg-white flex items-center justify-center border rounded-full hover:border-blue hover:bg-blue/10 transition-all duration-300'>
                    <Image className='object-cover' src='/images/chat-avator.png' alt='' width={60} height={60}/>
                    </button>
                </div>
            </div>
            {/* after starting the chat */}
            <div className='content-end h-full space-y-2'>
                <div className='flex items-center justify-end'>
                    <div className=' w-fit max-w-[75%] '>
                    <p className='my-1 py-1.5 px-4 rounded-lg bg-[#F3F4FB]'>What is my revenue for the year 2023?</p>
                    </div> 
                </div>
                <div className='flex items-center justify-start'>
                    <div className=' w-fit max-w-[75%] group'>
                    <div className='flex items-start gap-2'>
                    <div className='min-w-12 min-h-12 max-w-12 max-h-12 flex items-center justify-center border rounded-full overflow-hidden'>
                        <Image className='object-cover' src='/images/ask-eva-loader.gif' alt='' width={75} height={75}/>
                    </div>
                    <p className='my-1 py-1.5 px-4 rounded-lg bg-[#F3F4FB]'>Your total revenue for the year 2023 was ₹ 12,50,000. This represents a 15% increase from 2022, driven primarily by higher sales in the second and third quarters.</p>
                    </div>
                    <table className='sm:w-1/2 mt-4 font-medium'>
                        <thead>
                            <tr className=' text-left text-sm text-gray-500 font-medium'>
                            <th className='py-3 px-2'>Month</th>
                            <th>Revenue (INR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataArray.map((data)=>(
                            <tr key={data.ID} className={`${data.Month==='Total'?'font-semibold':''} border-t border-gray-300 text-sm`} >
                            <td className='py-3 px-2'>{data.Month}</td>
                            <td>{data.Revenue}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='group-hover:opacity-100 opacity-0 flex items-center gap-4 my-1 transition-all duration-300'>
                        <button><Image src='/images/icon-like.svg' alt='' width={17} height={17}/></button> 
                        <button><Image src='/images/icon-dislike.svg' alt='' width={17} height={17}/></button>
                        <button><Image src='/images/icon-copy-chat.svg' alt='' width={17} height={17}/> </button>
                        <button><Image src='/images/icon-download-chat.svg' alt='' width={17} height={17}/></button> 
                        <button><Image src='/images/icon-speaker-chat.svg' alt='' width={17} height={17}/></button>
                        <button><Image src='/images/icon-chat-refresh.svg' alt='' width={17} height={17}/></button>
                    </div>
                    </div> 
                </div>
            </div>
            </div>
            <div className='sm:flex gap-4 items-center justify-between my-4 space-y-2 sm:space-y-0'>
                <p className='sm:w-1/4 text-blue text-[13px] font-semibold py-2 px-5 rounded-xl border border-[#e0e1ff] cursor-pointer hover:text-black transition-all duration-200'>What is my Revenue for the year 2023?</p>              
                <p className='sm:w-1/4 text-blue text-[13px] font-semibold py-2 px-5 rounded-xl border border-[#e0e1ff] cursor-pointer hover:text-black transition-all duration-200'>Which region has the most sales in last month?</p>              
                <p className='sm:w-1/4 text-blue text-[13px] font-semibold py-2 px-5 rounded-xl border border-[#e0e1ff] cursor-pointer hover:text-black transition-all duration-200'>Which products are profit making?</p>              
                <p className='sm:w-1/4 text-blue text-[13px] font-semibold py-2 px-5 rounded-xl border border-[#e0e1ff] cursor-pointer hover:text-black transition-all duration-200'>What is my sales for the year 2023?</p>              
            </div>
                <button className='sm:absolute -left-16 bottom-1 w-12 h-12 flex items-center justify-center border rounded-full hover:border-blue hover:bg-blue/10 transition-all duration-300'>
                   <Image src='/images/icon-new-message.svg' alt='' width={19} height={19}/>
                </button>
                <div className='flex items-center mt-4 sm:mt-0'>
                 <input className='pl-5 pr-28 w-full border-2 border-[#e0e1ff] outline-none placeholder:text-gray-600 focus:placeholder-transparent py-4 rounded-lg' placeholder='Type your question here'/>
                 <div className='flex items-center'>
                 <button className='text-gray-600 -ml-12'><RiSendPlane2Line size={22}/></button>
                 <button className='text-gray-600 -ml-[70px]'><RiMicLine size={22}/></button>
                 </div>
                </div> 
        </div>
    </div>
  )
}
