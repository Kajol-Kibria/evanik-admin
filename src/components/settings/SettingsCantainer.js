'use client'
import React, { useState } from 'react'
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
import ProfileSettings from './ProfileSettings';
import BranchSettings from './BranchSettings';
import Integrations from './Integrations';
import ProductSettings from './ProductSettings';
import ReconciliationSettings from './ReconciliationSettings';
import AccountingSettings from './AccountingSettings';
import MainSettings from './MainSettings';

export default function SettingsCantainer() {
    
  const [subpage, setSubpage] = useState('Profile')
  const [mainMenu, setMainMenu] = useState(true)
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 relative'>
      <div className={`${mainMenu?'block':'hidden'} absolute top-0 left-0 bottom-0 right-0 bg-white z-40`}>
        <MainSettings setSubpage={setSubpage} setMainMenu={setMainMenu}/>
      </div>
      <div className={`${mainMenu?'hidden':'block'}`}>
        <button onClick={()=>setMainMenu(true)} className='flex items-center gap-1 text-xs text-gray-700'><IoIosArrowBack/>Back to main settings</button>
          <div className='sticky top-0 z-10 bg-[#fcfeff] sm:flex items-center justify-between gap-4 py-4'>
              <p className="sm:text-4xl text-3xl font-semibold text-[#3a3b4c]">
              {subpage}
              </p>
              <div className='flex gap-4 my-4 sm:my-0'>
              <button className='w-32 h-12 buttonBlue'>Cancel</button>
              <button className='w-32 h-12 blueButton'>Save</button>
              </div>
          </div>
        <div>
        <div className='sm:flex items-start justify-between gap-8'>
        <div className='2xl:w-[32%] sm:w-[33%] w-full my-4 sm:my-0'>
        <div>
          <div onClick={()=>setSubpage('Profile')} className={`${subpage ==='Profile'?'bg-blue text-white border-blue':'bg-white text-black'}  border px-6 py-5 rounded-t-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Profile Settings</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2 hidden 2xl:block'>Manage your account settings, personal information, and preferences all here.</p>
          </div>
          <div onClick={()=>setSubpage('Branch')} className={`${subpage ==='Branch'?'bg-blue text-white  border-blue':'bg-white  text-black'} border-b border-x px-6 py-5  cursor-pointer`}>
          <div className='flex items-center justify-between font-medium'>
            <p>Branch Settings</p>
            <IoIosArrowForward/>
          </div>
          <p className='text-sm mt-2  hidden 2xl:block'>Configure branch-specific details, manage operations, and set preferences effortlessly.</p>
        </div>
        <div onClick={()=>setSubpage('Integrations')} className={`${subpage ==='Integrations'?'bg-blue text-white border-blue':'bg-white text-black'}  border-b border-x px-6 py-5 cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Integrations</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Connect and manage third-party services for seamless business operations.</p>
          </div>
        <div onClick={()=>setSubpage('Product')} className={`${subpage ==='Product'?'bg-blue text-white border-blue':'bg-white text-black'}  border-b border-x px-6 py-5 cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Product Settings</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Customize product details, pricing, and inventory settings to suit your needs.</p>
          </div>
        <div onClick={()=>setSubpage('Reconciliation')} className={`${subpage ==='Reconciliation'?'bg-blue text-white border-blue':'bg-white text-black'}  border-x px-6 py-5 cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Reconciliation Settings</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Set up and automate financial reconciliations for accurate transaction matching.</p>
          </div>
        <div onClick={()=>setSubpage('Accounting')} className={`${subpage ==='Accounting'?'bg-blue text-white border-blue':'bg-white text-black'}  border px-6 py-5  rounded-b-md cursor-pointer`}>
            <div className='flex items-center justify-between font-medium'>
              <p>Accounting Settings</p>
              <IoIosArrowForward/>
            </div>
            <p className='text-sm mt-2  hidden 2xl:block'>Manage accounting preferences, tax settings, and financial integrations with ease.</p>
          </div>
        </div>
        </div>

        {/* show based on state */}
        <div className=' w-full'>
                    <div  className={`${subpage === "Profile"? 'block':'hidden'}`}>
                    <ProfileSettings/>
                    </div>
                    <div className={`${subpage === "Branch"? 'block':'hidden'}`}>
                    <BranchSettings/>
                    </div>
                    <div className={`${subpage === "Integrations"? 'block':'hidden'}`}>
                    <Integrations/>
                    </div>
                    <div className={`${subpage === "Product"? 'block':'hidden'}`}>
                    <ProductSettings/>
                    </div>
                    <div className={`${subpage === "Reconciliation"? 'block':'hidden'}`}>
                    <ReconciliationSettings/>
                    </div>
                    <div className={`${subpage === "Accounting"? 'block':'hidden'}`}>
                    <AccountingSettings/>
                    </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
