import React from 'react'
import Link from '../../../node_modules/next/link';
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
export default function MainSettings({setSubpage, setMainMenu}) {
  return (
    <div className=' sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
        <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c] mb-7">
                  Settings
                </p>
                <div className='grid sm:grid-cols-3 gap-7 relative'>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Profile')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Profile<IoIosArrowForward/></p>
                    <p className='py-3'>Manage your account settings, personal information, and preferences all here.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/iMBhXFjwRsg" title="Manage Profile Settings on eVanik OneWorld Suite"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Branch')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Branch<IoIosArrowForward/></p>
                    <p className='py-3'>Configure branch-specific details, manage operations, and set preferences effortlessly.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/rebnXwA8Dyc" title="Manage Branch Settings on eVanik"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Integrations')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Integrations<IoIosArrowForward/></p>
                    <p className='py-3'>Connect and manage sales channels and third-party services for seamless business operations.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/Bx_CrqdUEnY" title="Channel and other Integrations in eVanik OneWorld Suite" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Product')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Product<IoIosArrowForward/></p>
                    <p className='py-3'>Customize product details, pricing, and inventory settings to suit your needs.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/-8SKBxrjuwk" title="Product Setup on eVanik OneWorld Suite"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Reconciliation')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Reconciliation<IoIosArrowForward/></p>
                    <p className='py-3'>Set up and automate financial reconciliations for accurate transaction matching.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/YgEJEWG-K2c" title="Reconciliation Setup on eVanik OneWorld Suite"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Accounting')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Accounting<IoIosArrowForward/></p>
                    <p className='py-3'>Manage accounting preferences, tax settings, and financial integrations with ease.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/zx7ixosedK8" title="Accounting Setup on eVanik" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <Link href='/automatic_repricer' className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Pricing Automation<IoIosArrowForward/></Link>
                    <p className='py-3'>Automate pricing strategies to optimize revenue and adjust dynamically.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/fZC9muj2oXA" title="Pricing Automation with Automatic Repricer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <Link href='/amazon_feedbaker' className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>FeedBaker<IoIosArrowForward/></Link>
                    <p className='py-3'>Automate and manage buyer feedback on Amazon for improved ratings.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/4WHjeyS8ve0" title="Boost your buyer feedbacks on Amazon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                  <div className='shd rounded-2xl p-5'>
                    <p onClick={()=>{setMainMenu(false);setSubpage('Profile')}} className='flex items-center justify-between text-blue font-semibold text-lg cursor-pointer'>Password<IoIosArrowForward/></p>
                    <p className='py-3'>Change or update your password to secure your account access.</p>
                    <div>
                    <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/ktZGf6Rcs50" title="Manage Passwords on eVanik" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                    </div>
                  </div>
                </div>
    </div>
  )
}
