import React from 'react'
import Image from '../../../node_modules/next/image';
import CustomTooltip from '../common/Tooltip';
export default function IntegrationsList(props) {
  return (
    <div>
        <div className={`${props.connect?'hidden':'block'}`}>
        <div className='grid gap-5 sm:grid-cols-2 2xl:grid-cols-3 grid-cols-1 my-3'>
        {props.dataArray.map((data, i)=>(
            <div key={i} className='shd flex flex-col justify-between bg-white p-5 rounded-lg relative'>
            <div className='absolute top-4 right-4 text-[11px] font-semibold px-2 py-1 border border-[#8bc5b1] text-[#1f674f] bg-[#f1f8f6] rounded-full'>02 Connected</div>
            <div className='flex items-center gap-3'>
                <div className='border w-[40px] h-[40px] rounded-lg object-contain flex items-center justify-center'>
                    <Image src={data.Logo} alt='' width={24} height={24}/>
                </div>
                <p className='font-semibold text-blue text-lg my-4'>{data.Title}</p>
            </div>
            <p className='text-sm mb-4'>{data.Des}</p>
            <button onClick={()=>props.setConnect(true)} className='buttonBlue w-full'>Connect</button>
        </div>
        ))}
        </div>
        </div>
        <div  className={`${props.connect?'block':'hidden'}`}>
            <div className=' sm:flex items-center justify-between gap-4 '>
                <div>
                <p className="sm:text-3xl text-2xl font-semibold text-[#3a3b4c]">
                Amazon
                </p>
                <p className='text-blue font-semibold text-lg'>Connect Amazon</p>
                <p className='text-xs text-gray-600'>Integration instructions to authorize and connect amazon India Marketplace</p>
                </div>
                <div className='flex gap-4 my-4 sm:my-0'>
                <button onClick={()=>props.setConnect(false)} className='w-32 h-12 buttonBlue'>Cancel</button>
                <button className='w-32 h-12 blueButton'>Authorize</button>
                </div>
            </div>
            <div className='p-5 shd rounded-lg my-6 grid grid-cols-2 gap-5 pt-10'>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Channel
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Type or Select Accounting Ledger</option>
                    <option>Branch one</option>
                    <option>Branch two</option>
                    <option>Branch three</option>
                </select>
                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    Type or Select Accounting Ledger
                </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                <select  className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer"  required>
                    <option>Type or Select Bank Ledger</option>
                    <option>Branch one</option>
                    <option>Branch two</option>
                    <option>Branch three</option>
                </select>
                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                    <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                    Type or Select Bank Ledger
                </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        User Name
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="password" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Password
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Seller ID
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Store Name
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Email ID
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        SP API Refresh Token
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        SP API Access Token
                    </label>
            </div>
            <div className="relative z-0 mb-5 group text-black">
                    <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                    <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Marketplace ID
                    </label>
            </div>
            </div>
            <div className='p-8 shd rounded-lg'>
                <div className='flex items-center gap-2 mb-4'>
                    <Image src='/images/logo-amazon.png' alt='' width={24} height={24}/>
                    <p className='text-blue font-semibold'>Amazon INDIA</p>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <p className='w-4/5'>eVanik needs access your Amazon Developer credentials into OneWorld Suite (OWS) to communicate with amazon Authorize your amazon developer account with eVanik OWS Sign in using your amazon seller credentials. On log in, click on Register New Application Enter Application name and description as &apos;eVanik&apos; (or whatever you prefer to identify later) In the newly generated table row copy Application Id and Application Secret and paste it across</p>
                    <div><Image src='/images/img-thumb-yt.png' alt='' width={150} height={100}/></div>
                </div>
                <p>Authorize your eVanik OWS <a className='underline text-[#0d6efd] font-semibold' href='#'>Amazon (Seller Central)</a> with eVanik OWS</p>
            </div>
        </div>
    </div>
  )
}
