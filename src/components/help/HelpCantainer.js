'use client'
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Image from '../../../node_modules/next/image';
import { IoIosArrowBack } from "react-icons/io";
import CustomTooltip from '../common/Tooltip';
import Link from '../../../node_modules/next/link';

export default function HelpCantainer(props) {
    const [refer, setRefer] = useState(false);
    const [support, setSupport] = useState(false);
    const [video, setVideo] = useState(false);
    const [videoSubpage, setVideoSubpage] = useState(1)
  return (
    <div >
    <div className='shd p-5 rounded-lg absolute z-[60] top-14 right-28 bg-white'>
        <div className='flex items-center justify-between'>
            <p className='text-blue font-semibold text-lg'>Help</p>
            <button className='text-gray-500 hover:text-black transition-all duration-300' onClick={()=>props.setState(!props.state)}><IoCloseOutline size={25}/></button>
        </div>
        <div className='flex items-center my-3'>
            <input className='pl-5 pr-14  w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent py-2 rounded-lg' placeholder='Search'/>
            <button className='text-gray-600 -ml-10'><IoIosSearch size={25}/></button>
        </div>
        <div className='grid grid-cols-3 gap-5 py-5'>
            <button className='flex flex-col items-center mx-5'>
                <Image width={21} height={21} src={`/images/icon-Help-Documents.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Help Documents</p>
            </button>
            <button className='flex flex-col items-center mx-5'>
                <Image width={21} height={21} src={`/images/icon-FAQ-help.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>FAQs</p>
            </button>
            <button className='mx-5'>
            <Link className='flex flex-col items-center' href='/'>
                <Image width={21} height={21} src={`/images/icon-Submit-Ticket.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Submit a Ticket</p>
            </Link>
            </button>
            <button  onClick={()=>setVideo(!video)} className='flex flex-col items-center mx-5'>
                <Image width={21} height={21} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Video Tutorials</p>
            </button>
            <button onClick={()=>props.setState(!props.state)} className='mx-5'>
              <Link className='flex flex-col items-center' href='/helpExploreFeatures'>
                <Image width={21} height={21} src={`/images/icon-Explore-Features.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Explore Features</p>
              </Link>
            </button>
            <button className='flex flex-col items-center mx-5'>
                <Image width={21} height={21} src={`/images/icon-Upgrade-Renew.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Upgrade / Renew</p>
            </button>
            <button onClick={()=>props.setState(!props.state)} className='mx-5'>
              <Link className='flex flex-col items-center' href='/helpWhatsNew'>
                <Image width={21} height={21} src={`/images/icon-Whats-New.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>What&apos;s New</p>
              </Link>
            </button>
            <button onClick={()=>props.setState(!props.state)} className='mx-5'>
              <Link className='flex flex-col items-center' href='/helpMpPoliciesDocuments'>
                <Image width={21} height={21} src={`/images/icon-Policies-Documents.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>M/P Policies & Documents</p>
              </Link>
            </button>
            <button onClick={()=>setRefer(!refer)} className='flex flex-col items-center mx-5'>
                <Image width={21} height={21} src={`/images/icon-Refer-Friend.svg`} alt='' />
                <p className='py-1 text-gray-800 text-[13px] font-medium'>Refer a Friend</p>
            </button>
        </div>
        <div className='flex items-center justify-between py-4 border-y border-[#e0e1ff]'>
            <Link onClick={()=>props.setState(!props.state)} href='/productTourLanding' className='w-1/2 flex items-center gap-3'>
                <Image width={32} height={32} src={`/images/icon-product-tour.png`} alt='' />
                <p className='text-gray-800 text-[13px] font-medium'>Take a Product tour</p>
            </Link>
            <button onClick={()=>setSupport(!support)} className='w-1/2 flex items-center gap-3'>
                <Image width={32} height={32} src={`/images/icon-help-Support.svg`} alt='' />
                <p className='text-gray-800 text-[13px] font-medium'>Support</p>
            </button>
        </div>
        
        <div className='flex items-center justify-between pt-4'>
            <a onClick={()=>props.setState(!props.state)} target="_blank" href='https://play.google.com/store/apps/details?id=com.evaflow' className='w-1/2 flex items-center gap-3'>
                <Image width={60} height={60} src={`/images/icon-help-qr-big.png`} alt='' />
                <div>
                <p className='text-gray-800 text-[13px] font-medium'>Download our</p>
                <p className='text-gray-800 text-[13px] font-medium'>Mobile App</p>
                </div>
            </a>
            <div className='w-1/2 flex items-center gap-3'>
                <Image width={64} height={64} src={`/images/icon-chrome-extension-help.png`} alt='' />
                <div>
                <p className='text-gray-800 text-[13px] font-medium'>Install the Chrome</p>
                <p onClick={()=>props.setState(!props.state)} className='text-gray-800 text-[13px] font-medium'>Extension <a  className='text-blue' target="_blank" href='https://chromewebstore.google.com/detail/evanik-online-gst-tally-3/kacdplajplbfjdjkngebffhcgpehpfdd?hl=en-US&utm_source=ext_sidebar'>link</a></p>
                </div>
            </div>
        </div>
 {/* refer friend section */}
        <div className={`${refer?'block':'hidden'} absolute top-0 right-0 bottom-[90px] p-5 rounded-lg left-0 bg-white`}>
            <div className='flex items-center justify-between'>
                <button  onClick={()=>setRefer(!refer)} className='flex items-center gap-1 text-xs text-gray-700'><IoIosArrowBack size={16}/>Back to main help</button>
                <button  onClick={()=>props.setState(!props.state)} className='text-gray-500 hover:text-black transition-all duration-300'><IoCloseOutline size={25}/></button>
            </div>
            <p className='text-blue font-semibold my-4 text-lg'>Refer a Friend</p>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={18} height={18} src={`/images/icon-qr-help.png`} alt='' />
                </div>
                <p className='text-sm font-medium'>Share Referal Code Link</p>
            </button>
                    <div className="relative z-0 mb-5 group text-black">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                        <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Recipient email address
                        </label>
                    </div>
                <p className='pb-5'>OR</p>
                    <div className="relative z-0 mb-5 group text-black">
                        <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                        <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                        Recipient mobile number
                        </label>
                    </div>
        <div className='flex justify-end py-4 border-b border-[#e0e1ff]'>
            <button className='blueButton'>Send Referal Code</button>
        </div>
        </div>
    {/* support section */}
    <div className={`${support?'block':'hidden'} z-50 absolute top-0 right-0 bottom-[90px] p-5 rounded-lg left-0 bg-white`}>
            <div className='flex items-center justify-between'>
                <button  onClick={()=>setSupport(!support)} className='flex items-center gap-1 text-xs text-gray-700'><IoIosArrowBack size={16}/>Back to main help</button>
                <button  onClick={()=>props.setState(!props.state)} className='text-gray-500 hover:text-black transition-all duration-300'><IoCloseOutline size={25}/></button>
            </div>
            <p className='text-blue font-semibold my-4 text-lg'>Support</p>
            <div className='grid grid-cols-2'>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={16} height={16} src={`/images/icon-help-Send-email.png`} alt='' />
                </div>
                <p className='text-sm font-medium'>Send On Email</p>
            </button>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={16} height={16} src={`/images/icon-Register-for-webinars.png`} alt='' />
                </div>
                <p className='text-sm font-medium'>Register for webinars</p>
            </button>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={16} height={16} src={`/images/icon-Find-an-accountant.png`} alt='' />
                </div>
                <p className='text-sm font-medium'>Find an accountant</p>
            </button>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={16} height={16} src={`/images/icon-Early-access-features.png`} alt='' />
                </div>
                <p className='text-sm font-medium'>Early access features</p>
            </button>
            <button className='flex items-center gap-3  text-gray-700  pb-5'>
                <div className='p-2.5 border border-[#e0e1ff] rounded-full'>
                    <Image width={16} height={16} src={`/images/icon-talk-us.png`} alt='' />
                </div>
                <div className='text-left'>
                <p className='text-sm font-medium'>Talk to us</p>
                <p className='text-sm font-medium'>Mon - Fri (9:00 AM - 7:00 PM)</p>
                <p className='text-sm font-medium'>Toll Free - 18005726671</p>
                </div>
            </button>
            </div>
        </div>
    {/* video section */}
        <div className={`${video?'block':'hidden'} absolute top-0 right-0 bottom-[162px] p-5 rounded-lg left-0 bg-white`}>
            <div className='flex items-center justify-between'>
                <button  onClick={()=>setVideo(!video)} className='flex items-center gap-1 text-xs text-gray-700'><IoIosArrowBack size={16}/>Back to main help</button>
                <button  onClick={()=>props.setState(!props.state)} className='text-gray-500 hover:text-black transition-all duration-300'><IoCloseOutline size={25}/></button>
            </div>
            <div className='flex items-center my-5'>
                <input className='pl-5 pr-14  w-full border-2 border-blue/20 outline-none placeholder:text-gray-600 focus:placeholder-transparent py-2 rounded-lg' placeholder='Search'/>
                <button className='text-gray-600 -ml-10'><IoIosSearch size={25}/></button>
            </div>
                    <div>
                          <div>
                              <div className='flex scrollmenu justify-around font-medium text-[15px] text-gray-700 mb-4'>
                                  <button className={`${videoSubpage=== 1 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2 `} onClick={()=>setVideoSubpage(1)}>Video</button>
                                  <button className={`${videoSubpage=== 2 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setVideoSubpage(2)}>Documents</button>
                                  <button className={`${videoSubpage=== 3 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setVideoSubpage(3)}>FAQs</button>
                                  <button className={`${videoSubpage=== 4 ?"text-blue border-blue":"border-gray-300"} transition-all duration-300 py-2 sm:w-1/3 border-b-2 px-2`} onClick={()=>setVideoSubpage(4)}>Others</button>
                              </div>
                          </div>
                          <div className='h-36 pb-5 overflow-auto'>
                                    <div  className={`${videoSubpage === 1 ? 'block':'hidden'} relative`}>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How to setup Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How can I view past transactions in my Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How do I export my Ledger data to a spreadsheet?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>Can I edit or delete a transaction in my Ledger?? </p>
                                        </button>
                                    </div>
                                    <div className={`${videoSubpage === 2? 'block':'hidden'}`}>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How to setup Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How can I view past transactions in my Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How do I export my Ledger data to a spreadsheet?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>Can I edit or delete a transaction in my Ledger?? </p>
                                        </button>
                                    </div>
                                    <div className={`${videoSubpage === 3? 'block':'hidden'}`}>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How to setup Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How can I view past transactions in my Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How do I export my Ledger data to a spreadsheet?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>Can I edit or delete a transaction in my Ledger?? </p>
                                        </button>
                                    </div>
                                    <div className={`${videoSubpage === 4? 'block':'hidden'}`}>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How to setup Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How can I view past transactions in my Ledger?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>How do I export my Ledger data to a spreadsheet?</p>
                                        </button>
                                        <button className='flex items-center gap-3  text-gray-700  pb-5'>
                                            <div className='p-[9px] bg-blue/10 border border-[#e0e1ff] rounded-full'>
                                                <Image width={14} height={14} src={`/images/icon-Video-Tutorials.svg`} alt='' />
                                            </div>
                                            <p className='text-sm font-medium'>Can I edit or delete a transaction in my Ledger?? </p>
                                        </button>
                                    </div>
                                        
                          </div>
                      </div>           
        </div>
    </div>
    </div>
  )
}
